<?php

namespace App\Repositories;

use App\Models\CharacteristicValue as Model;

class CharacteristicValuesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::where('id', $id)->first();
    }

    public function create($id, $data)
    {
        $model = new $this->model;
        $model->title = $data['title'];
        $model->characteristic_id = $id;
        $model->save();
        return $model;
    }

    public function destroy($id)
    {
        return $this->model::where('characteristic_id', $id)->delete();
    }
}
