<?php

namespace App\Repositories;

use App\Models\Provider as Model;

class ProvidersRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::find($id);
    }

    public function getAllWithPaginate($perPage = 15)
    {
        return $this
            ->model::orderBy('created_at', 'desc')
            ->paginate($perPage);
    }

    public function create(array $data)
    {
        $model = new $this->model;
        $model->name = $data['name'];
        $model->catalog = $data['catalog'];
        $model->time_of_dispatch = $data['time_of_dispatch'];
        $model->availability = $data['availability'];
        $model->prepayment = $data['prepayment'];
        $model->prepayment_sum = $data['prepayment_sum'];
        $model->refunds = $data['refunds'];
        $model->refunds_sum = $data['refunds_sum'];
        $model->contacts = $data['contacts'];
        $model->comment = $data['comment'];

        return $model->save();
    }

    public function update(int $id, array $data)
    {
        $model = $this->getById($id);
        $model->name = $data['name'];
        $model->catalog = $data['catalog'];
        $model->time_of_dispatch = $data['time_of_dispatch'];
        $model->availability = $data['availability'];
        $model->prepayment = $data['prepayment'];
        $model->prepayment_sum = $data['prepayment_sum'];
        $model->refunds = $data['refunds'];
        $model->refunds_sum = $data['refunds_sum'];
        $model->contacts = $data['contacts'];
        $model->comment = $data['comment'];

        return $model->update();
    }

    public function destroy(int $id)
    {
        return $this->model::destroy($id);
    }

    public function list()
    {
        return $this->model->select('id', 'name')->orderBy('id', 'desc')->get();
    }
}
