<?php

namespace App\Repositories;

use App\Models\Enums\SupportStatus;
use App\Models\Support as Model;

class SupportsRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::where('id', $id)->first();
    }

    public function getAllWithPaginate()
    {
        return $this
            ->model::select(
                'id',
                'order_id',
                'status',
                'name',
                'phone',
                'comment',
                'created_at',
                'updated_at',
            )
            ->orderBy('id', 'desc')
            ->paginate(15);
    }

    public function create(array $data)
    {
        $model = new $this->model;
        $model->order_id = $data['order_id'];
        $model->name = $data['name'];
        $model->phone = $data['phone'];
        $model->comment = $data['comment'];
        $model->status = SupportStatus::NEW_STATUS;

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
