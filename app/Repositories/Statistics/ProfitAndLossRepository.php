<?php

namespace App\Repositories\Statistics;

use App\Models\Statistics\ProfitAndLoss as Model;
use App\Repositories\CoreRepository;
use App\Repositories\OrdersRepository;
use Carbon\Carbon;
use Illuminate\Pagination\LengthAwarePaginator;
use JetBrains\PhpStorm\ArrayShape;

class ProfitAndLossRepository extends CoreRepository
{
    private mixed $bankCardMovementsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->bankCardMovementsRepository = app(BankCardMovementsRepository::class);
        $this->ordersRepository = app(OrdersRepository::class);
    }

    protected function getModelClass(): string
    {
        return Model::class;
    }

    final public function getByMonth(string $month): ?\Illuminate\Database\Eloquent\Model
    {
        return $this->model::where('month', $month)->first();
    }

    final public function getAllWithPaginate(array $data): LengthAwarePaginator
    {
        $model = $this->model::select([
            'id',
            'month',
            'purchase_cost',
            'business_profitability',
            'total_revenues',
            'costs',
            'net_profit',
        ]);

//        if (isset($data['date_start'], $data['date_end'])) {
//            $model->whereBetween('date', [$data['date_start'], $data['date_end']]);
//        }
//
        if (isset($data['sort'], $data['param'])) {
            $model->orderBy($data['sort'], $data['param']);
        } else {
            $model->orderBy('month', 'desc');
        }

        return $model->orderBy('month', 'desc')->paginate($data['perPage'] ?? 15);
    }

    final public function create(string $month)
    {
        $model = new $this->model;
        $model->month = $month;

        $items = $this->bankCardMovementsRepository->getByMonth($month);

        $model->purchase_cost = $this->ordersRepository->getTradeTotalPriceByMonth($month) ?: 0;
        $model->total_revenues = $this->ordersRepository->getTotalPriceByMonth($month) ?: 0;
        $model->costs = $items->isNotEmpty() ? $items->where('sum', '<', 0)->sum('sum') : 0;
        $model->net_profit = $model->total_revenues + $model->costs - $model->purchase_cost;
        $model->business_profitability = $model->total_revenues ? ($model->net_profit / $model->total_revenues) * 100 : 0;
        $model->save();

        return true;
    }

    final public function update(string $month)
    {

        $model = $this->getByMonth($month);

        if (!$model) {
            return $this->create($month);
        }

        $items = $this->bankCardMovementsRepository->getByMonth($month);
        $model->purchase_cost = $this->ordersRepository->getTradeTotalPriceByMonth($month) ?: 0;
        $model->total_revenues = $this->ordersRepository->getTotalPriceByMonth($month) ?: 0;
        $model->costs = $items->isNotEmpty() ? $items->where('sum', '<', 0)->sum('sum') : 0;
        $model->net_profit = $model->total_revenues + $model->costs - $model->purchase_cost;
        $model->business_profitability = $model->total_revenues ? ($model->net_profit / $model->total_revenues) * 100 : 0;
        $model->update();

        return true;
    }

}
