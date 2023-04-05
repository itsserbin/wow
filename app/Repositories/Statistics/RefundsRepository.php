<?php

namespace App\Repositories\Statistics;

use App\Models\Statistics\Refund as Model;
use App\Repositories\CoreRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class RefundsRepository extends CoreRepository
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return string
     */
    protected function getModelClass(): string
    {
        return Model::class;
    }

    final public function getAll(): Collection
    {
        return $this->model::all();
    }

    final public function getByOrderId(int $id): ?\Illuminate\Database\Eloquent\Model
    {
        return $this->model::where('id', $id)->first();
    }

    final public function create(array $data): \Illuminate\Database\Eloquent\Model
    {
        $model = new $this->model;
        $model->fill($data);
        $model->save();

        return $model;
    }

    final public function getAllWithPaginate(array $data): LengthAwarePaginator
    {
        $model = $this->model::select([
            'date',
            'sum_provider_trade_price',
            'sum_order_price',
            'sum_provider_refund',
            'sum_client_refund',
            'order_id',
        ]);

        return $model->orderBy('date', 'desc')->paginate(15);
    }
}
