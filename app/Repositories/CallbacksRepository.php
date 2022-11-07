<?php

namespace App\Repositories;

use App\Models\Callback as Model;
use App\Models\Enums\CallbackStatus;

class CallbacksRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::where('id', $id)->first();
    }

    public function getAllWithPaginate($data)
    {
        $model = $this
            ->model::select(
                'id',
                'status',
                'name',
                'phone',
                'comment',
                'created_at',
                'updated_at',
            );

        if (array_key_exists('status', $data)) {
            $model->where('status', $data['status']);
        }

        return $model->orderBy('id', 'desc')->paginate(15);
    }

    public function create(array $data)
    {
        $model = new $this->model;
        $model->name = $data['name'];
        $model->phone = $data['phone'];
        $model->comment = $data['comment'];
        $model->status = CallbackStatus::NEW_STATUS;

        $model->save();

        return $model;
    }

    public function update(int $id, array $data)
    {
        $model = $this->getById($id);
        $model->name = $data['name'];
        $model->phone = $data['phone'];
        $model->comment = $data['comment'];
        $model->status = $data['status'];
        return $model->update();
    }

    public function destroy($id)
    {
        return $this->model::destroy($id);
    }

}
