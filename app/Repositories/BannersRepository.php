<?php

namespace App\Repositories;

use App\Models\Banner as Model;
use Illuminate\Pagination\LengthAwarePaginator;

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
    public function getForPublic()
    {
        $columns = [
            'id',
            'title',
            'image_mobile',
            'image_table',
            'image_desktop',
            'sort',
            'link'
        ];

        return $this
            ->model::select($columns)
            ->where('published', 1)
            ->orderBy('sort', 'desc')
            ->get();
    }

    public function getForPublicByCategory($id)
    {
        $columns = [
            'id',
            'title',
            'image_mobile',
            'image_table',
            'image_desktop',
            'sort',
            'link'
        ];

        return $this
            ->model::select($columns)
            ->whereHas('categories', function ($q) use ($id) {
                $q->where('id', $id);
            })
            ->where('published', 1)
            ->orderBy('sort', 'desc')
            ->get();
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function create(array $data)
    {
        $model = new $this->model;
        $model->title = $data['title'];
        $model->link = $data['link'];
        $model->image_mobile = $data['image_mobile'];
        $model->image_table = $data['image_table'];
        $model->image_desktop = $data['image_desktop'];
        $model->published = $data['published'];
        $model->save();

        $categories = [];
        foreach ($data['categories'] as $category) {
            array_push($categories, $category['id']);
        }
        $model->categories()->sync($categories);
        return $model;
    }

    /**
     * Обновление данных категории.
     *
     * @param int $id
     * @param array $data
     * @return mixed
     */
    public function update(int $id, array $data)
    {
        $model = $this->getById($id);
        $model->title = $data['title'];
        $model->link = $data['link'];
        $model->image_mobile = $data['image_mobile'];
        $model->image_table = $data['image_table'];
        $model->image_desktop = $data['image_desktop'];
        $model->published = $data['published'];
        $model->update();
        $categories = [];
        foreach ($data['categories'] as $category) {
            array_push($categories, $category['id']);
        }
        $model->categories()->sync($categories);
        return $model;
    }

    /**
     * @param int $id
     * @return int
     */
    public function destroy(int $id)
    {
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
