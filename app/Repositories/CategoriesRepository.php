<?php

namespace App\Repositories;

use App\Models\Category as Model;
use App\Models\Enums\MassActions;
use Illuminate\Pagination\LengthAwarePaginator;

class CategoriesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::find($id);
    }

    /**
     * Найти категории по slug.
     *
     * @param $slug
     * @return mixed
     */
    public function findFySlug($slug)
    {
        return $this->model::where('slug', $slug)->first();
    }

    /**
     * Получить все категории и вывести в пагинации по 15 шт.
     *
     * @param string $sort
     * @param string $param
     * @param int $perPage
     *
     * @return LengthAwarePaginator
     */
    public function getAllWithPaginate(string $sort = 'id', string $param = 'desc', int $perPage = 15)
    {
        return $this
            ->model
            ->select(
                'id',
                'title',
                'sort',
                'slug',
                'parent_id',
                'published',
                'meta_title',
                'meta_description',
                'meta_keyword',
                'created_at',
                'updated_at',
                'preview',
            )
            ->orderBy($sort, $param)
            ->paginate($perPage);
    }

    /**
     * Получаем ID и название всех категорий.
     *
     * @return mixed
     */
    public function list()
    {
        return $this
            ->model::select(
                'id',
                'title',
                'slug',
                'preview',
                'parent_id'
            )->get();
    }

    /**
     * Получаем ID и название всех категорий для вывода в фид.
     *
     * @return mixed
     */
    public function getAllToFeed()
    {
        return $this
            ->model::where('published', true)
            ->select(
                'id',
                'title',
                'parent_id',
                'slug',
                'updated_at',
            )->get();
    }

    /**
     * Получаем ID, превью и название всех категорий для выводе на проде.
     *
     * @return mixed
     */
    public function listPublic()
    {
        $columns = [
            'id',
            'title',
            'slug',
            'preview'
        ];

        return $this
            ->model::select($columns)
            ->where('published', 1)
            ->orderBy('sort', 'desc')
            ->get();
    }

    /**
     * Создание новой категории.
     *
     * @param array $data
     * @return mixed
     */
    public function create(array $data)
    {
        $model = new $this->model;
        $model->title = $data['title'];
        $model->slug = $data['slug'];
        $model->parent_id = $data['parent_id'];
        $model->published = $data['published'];
        $model->meta_title = $data['meta_title'];
        $model->meta_description = $data['meta_description'];
        $model->meta_keyword = $data['meta_keyword'];
        $model->preview = $data['preview'];
        $model->seo_text = $data['seo_text'];

        return $model->save();
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
        $model->slug = $data['slug'];
        $model->parent_id = $data['parent_id'];
        $model->published = $data['published'];
        $model->meta_title = $data['meta_title'];
        $model->meta_description = $data['meta_description'];
        $model->meta_keyword = $data['meta_keyword'];
        $model->preview = $data['preview'];
        $model->seo_text = $data['seo_text'];

        $model->update();
    }

    /**
     * Удалить категорию по ID.
     *
     * @param int $id
     * @return int
     */
    public function destroy(int $id)
    {
        return $this->model::destroy($id);
    }

    /**
     * Получить категорию по Slug для вывода на проде.
     *
     * @param $slug
     * @return mixed
     */
    public function getCategoryOnProduction($slug)
    {
        return $this
            ->model::with('products')
            ->where('slug', $slug)
            ->first();
    }


    public function search($search, $perPage = 15)
    {
        return $this->model::where('id', 'LIKE', "%$search%")
            ->orWhere('title', 'LIKE', "%$search%")
            ->orWhere('slug', 'LIKE', "%$search%")
            ->orWhere('meta_title', 'LIKE', "%$search%")
            ->paginate($perPage);
    }

    public function updateSort(int $id, $value)
    {
        return $this->model::where('id', $id)->update(['sort' => $value ?? null]);
    }

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
