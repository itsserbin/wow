<?php

namespace App\Repositories\Statistics;

use App\Models\Statistics\CashFlow as Model;
use App\Repositories\CoreRepository;
use Carbon\Carbon;
use Illuminate\Pagination\LengthAwarePaginator;
use JetBrains\PhpStorm\ArrayShape;

class CashFlowRepository extends CoreRepository
{
    private mixed $bankCardMovementsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->bankCardMovementsRepository = app(BankCardMovementsRepository::class);
    }

    protected function getModelClass(): string
    {
        return Model::class;
    }

    final public function getByMonth(string $month): ?\Illuminate\Database\Eloquent\Model
    {
        return $this->model::where('month', $month)->first();
    }

    final public function getViewPage(array $data): LengthAwarePaginator
    {
        $model = $this->model::select([
            'id',
            'month',
            'start_month_balance',
            'end_month_balance',
            'difference',
            'approved_income',
            'approved_consumption',
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

        return $model->paginate($data['perPage'] ?? 15);
    }

    final public function create(string $month): bool
    {
        $model = new $this->model;
        $model->month = $month;

        $items = $this->bankCardMovementsRepository->getByMonth($month);

        $model->start_month_balance = $items->first()?->balance ?: 0;
        $model->end_month_balance = $items->last()?->balance ?: 0;
        $model->approved_income = $items->isNotEmpty() ? $items->where('sum', '>', 0)->sum('sum') : 0;
        $model->approved_consumption = $items->isNotEmpty() ? $items->where('sum', '<', 0)->sum('sum') : 0;
        $model->difference = $model->approved_income + $model->approved_consumption;
        $model->save();

        return true;
    }

    final public function update(string $month): bool
    {
        $model = $this->getByMonth($month);

        if (!$model) {
            return $this->create($month);
        }

        $items = $this->bankCardMovementsRepository->getByMonth($month);

        $model->start_month_balance = $items->first()?->balance ?: 0;
        $model->end_month_balance = $items->last()?->balance ?: 0;
        $model->approved_income = $items->isNotEmpty() ? $items->where('sum', '>', 0)->sum('sum') : 0;
        $model->approved_consumption = $items->isNotEmpty() ? $items->where('sum', '<', 0)->sum('sum') : 0;
        $model->difference = $model->approved_income + $model->approved_consumption;
        $model->save();

        return true;
    }
}
