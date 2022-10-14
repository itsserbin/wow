<?php

namespace App\Repositories;

use App\Models\Xml as Model;

class XmlsRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::where('id', $id)->first();
    }

    public function getBySlug($slug)
    {
        return $this->model::where('slug', $slug)->first();
    }

    public function getAllWithPaginate()
    {
        return $this
            ->model::select(
                'id',
                'slug',
                'title',
                'description',
                'category',
                'created_at',
                'updated_at',
            )
            ->orderBy('id', 'desc')
            ->paginate(15);
    }

    public function create(array $data)
    {
        $model = new $this->model;
        $model->title = $data['title'];
        $model->description = $data['description'];
        $model->category = $data['category'];
        $model->products = $data['products'];
        $model->slug = $data['slug'];
        $model->save();

        return $model;
    }

    public function update(int $id, array $data)
    {
        $model = $this->getById($id);
        $model->title = $data['title'];
        $model->description = $data['description'];
        $model->category = $data['category'];
        $model->products = $data['products'];
        $model->slug = $data['slug'];
        $model->update();
        return $model;
    }

    public function destroy($id)
    {
        return $this->model::destroy($id);
    }
}
