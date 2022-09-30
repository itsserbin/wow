<?php

namespace App\Repositories;

use App\Models\Color as Model;
use Illuminate\Pagination\LengthAwarePaginator;

class ColorsRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model->find($id);
    }

    public function list()
    {
        return $this->model->orderBy('created_at', 'desc')->get();
    }

    public function getAllWithPaginate(string $sort = 'id', string $param = 'desc', int $perPage = 15): LengthAwarePaginator
    {
        $columns = [
            'id',
            'name',
            'hex',
        ];

        return $this
            ->model
            ->select($columns)
            ->orderBy($sort, $param)
            ->paginate($perPage);
    }

    public function create($data)
    {
        $model = new $this->model;
        $model->name = $data['name'];
        $model->hex = $data['hex'];
        return $model->save();
    }

    public function update($id, $data)
    {
        $model = $this->getById($id);
        $model->name = $data['name'];
        $model->hex = $data['hex'];
        return $model->update();
    }

    public function destroy($id)
    {
        return $this->model::destroy($id);
    }
}
