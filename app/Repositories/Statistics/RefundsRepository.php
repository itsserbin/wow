<?php

namespace App\Repositories\Statistics;

use App\Models\Statistics\Refund as Model;
use App\Repositories\CoreRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use JetBrains\PhpStorm\ArrayShape;

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
        return $this->model::where('order_id', $id)->first();
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

        if (isset($data['date_start'], $data['date_end'])) {
            $model->whereBetween('date', [$data['date_start'], $data['date_end']]);
        }

        return $model->orderBy('date', 'desc')->paginate(15);
    }

    #[ArrayShape(['sum_provider_trade_price' => "mixed", 'sum_order_price' => "mixed", 'sum_provider_refund' => "mixed", 'sum_client_refund' => "mixed"])]
    final public function getIndicators(array $data): array
    {
        $model = $this->model::select([
            'date',
            'sum_provider_trade_price',
            'sum_order_price',
            'sum_provider_refund',
            'sum_client_refund',
        ]);

        if (isset($data['date_start'], $data['date_end'])) {
            $model->whereBetween('date', [$data['date_start'], $data['date_end']]);
        }

        return [
            'sum_provider_trade_price' => $model->sum('sum_provider_trade_price'),
            'sum_order_price' => $model->sum('sum_order_price'),
            'sum_provider_refund' => $model->sum('sum_provider_refund'),
            'sum_client_refund' => $model->sum('sum_client_refund'),
        ];
    }
}
