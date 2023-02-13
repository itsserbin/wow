<?php

namespace App\Repositories;

use App\Models\Size as Model;

class SizesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::where('id', $id)->first();
    }

    public function getAllWithPaginate(string $sort = 'id', string $param = 'desc', int $perPage = 15)
    {
        return $this
            ->model::select(
                'id',
                'title',
                'published',
            )
            ->orderBy($sort, $param)
            ->paginate($perPage);
    }

    public function list()
    {
        return $this->model::select(
            'id',
            'title',
        )->get();
    }

    public function create($data)
    {
        $model = new $this->model;
        $model->published = $data['published'];
        $model->title = $data['title'];
        return $model->save();
    }

    public function update($id, $data)
    {
        $model = $this->getById($id);
        $model->published = $data['published'];
        $model->title = $data['title'];
        return $model->update();
    }

    public function getListForPublic($slug)
    {
        return $this->model::whereHas('products', function ($q) use ($slug) {
            $q->whereHas('categories', function ($q) use ($slug) {
                $q->where('slug', $slug);
            });
        })->get();
    }
}
