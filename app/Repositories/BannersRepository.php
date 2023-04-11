<?php

namespace App\Repositories;

use App\Models\Banner as Model;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Cache;
use Psr\SimpleCache\InvalidArgumentException;

class BannersRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::where('id', $id)->with('categories')->first();
    }

    public function getAllWithPaginate()
    {
        return $this
            ->model
            ->select(
                'id',
                'title',
                'sort',
                'image_mobile',
                'link',
                'published',
                'created_at',
                'updated_at',
            )
            ->orderBy('id', 'desc')
            ->paginate(15);
    }

    /**
     * @return mixed
     */
    final public function getForPublic(string $slug = null)
    {
        $cacheKey = 'banners_public_' . $slug;
        return Cache::remember($cacheKey, 60 * 60, function () use ($slug) {
            $columns = [
                'id',
                'title',
                'image_mobile',
                'image_table',
                'image_desktop',
                'sort',
                'link'
            ];
            $model = $this->model::select($columns)->where('published', 1);

            if ($slug) {
                $model->whereHas('categories', function ($q) use ($slug) {
                    $q->where('slug', $slug);
                });
            }
            return $model
                ->orderBy('sort', 'desc')
                ->get()
                ->toArray();
        });
    }

    final public function getForPublicByCategory(string $slug): array
    {
        $cacheKey = 'banners_by_category_' . $slug;
        return Cache::remember($cacheKey, 60 * 60, function () use ($slug) {
            $columns = [
                'id',
                'title',
                'image_mobile',
                'image_table',
                'image_desktop',
                'sort',
                'link'
            ];
            return $this->model::select($columns)
                ->whereHas('categories', function ($q) use ($slug) {
                    $q->where('slug', $slug);
                })
                ->where('published', 1)
                ->orderBy('sort', 'desc')
                ->get()
                ->toArray();
        });
    }


    /**
     * @param array $data
     * @return mixed
     */
    final public function create(array $data): \Illuminate\Database\Eloquent\Model
    {
        $model = new $this->model;
        $model->fill($data);
        $model->save();

        $categories = array_column($data['categories'], 'id');
        $model->categories()->sync($categories);


        if (count($data['categories'])) {
            foreach ($data['categories'] as $category) {
                Cache::forget('banners_public_' . $category['slug']);
            }
        }
        Cache::forget('banners_public_');

        return $model;
    }

    /**
     * Обновление данных категории.
     *
     * @param int $id
     * @param array $data
     * @return mixed
     */
    final public function update(int $id, array $data): \Illuminate\Database\Eloquent\Model
    {
        $model = $this->getById($id);
        $model->title = $data['title'];
        $model->link = $data['link'];
        $model->image_mobile = $data['image_mobile'];
        $model->image_table = $data['image_table'];
        $model->image_desktop = $data['image_desktop'];
        $model->published = $data['published'];
        $model->update();

        $categories = array_column($data['categories'], 'id');
        $model->categories()->sync($categories);

        if (!empty($model->categories)) {
            foreach ($model->categories as $category) {
                Cache::forget('banners_public_' . $category['slug']);
            }
        }

        Cache::forget('banners_public_');

        return $model;
    }

    /**
     * @param int $id
     * @return bool
     */
    final public function destroy(int $id): bool
    {
        $model = $this->model::where('id', $id)->first();

        if (!empty($model->categories)) {
            foreach ($model->categories as $category) {
                Cache::forget('banners_public_' . $category['slug']);
            }
        }

        Cache::forget('banners_public_');

        return $this->model::destroy($id);
    }

    /**
     * @param int $id
     * @param $value
     * @return mixed
     */
    public function updateSort(int $id, $value)
    {
        return $this->model::where('id', $id)->update(['sort' => $value ?? null]);
    }

    /**
     * @param $action
     * @param $data
     * @return bool
     */
    public function massActions($action, $data): bool
    {
        if ($action == MassActions::NOT_PUBLISHED) {
            foreach ($data as $key => $item) {
                if ($key !== MassActions::NOT_PUBLISHED) {
                    $this->model->where('id', $item)->update(['published' => 0]);
                }
            }

            return true;
        } elseif ($action == MassActions::PUBLISHED) {
            foreach ($data as $key => $item) {
                if ($key !== MassActions::PUBLISHED) {
                    $this->model->where('id', $item)->update(['published' => 1]);
                }
            }
            return true;
        } elseif ($action == MassActions::DESTROY) {
            foreach ($data as $key => $item) {
                if ($key !== MassActions::DESTROY) {
                    $this->model::destroy($item);
                }
            }
            return true;
        }
        return false;
    }
}
