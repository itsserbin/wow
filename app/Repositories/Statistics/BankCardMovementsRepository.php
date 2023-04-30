<?php

namespace App\Repositories\Statistics;

use App\Models\Statistics\BankCardMovement as Model;
use App\Repositories\CoreRepository;
use Carbon\Carbon;
use Illuminate\Pagination\LengthAwarePaginator;
use JetBrains\PhpStorm\ArrayShape;

class BankCardMovementsRepository extends CoreRepository
{
    public function __construct()
    {
        parent::__construct();
    }

    protected function getModelClass()
    {
        return Model::class;
    }

    final public function getLastRowByDate()
    {
        return $this->model::orderBy('date', 'desc')->first();
    }

    final public function getByMonth(string $month)
    {
        return $this
            ->model::where('date', 'like', $month . '%')
            ->orderBy('date', 'asc')
            ->get();
    }

    final public function getRowByMovementId($id)
    {
        return $this->model::where('movement_id', $id)->first();
    }

    final public function getById($id)
    {
        return $this->model::where('id', $id)->first();
    }

    final public function getAllWithPaginate(array $data = null): LengthAwarePaginator
    {
        $model = $this->model::select([
            'id',
            'date',
            'sum',
            'balance',
            'category_id',
            'comment',
        ]);

        if (isset($data['get'])) {
            if ($data['get'] === 'profits') {
                $model->where('sum', '>', 0);
            }
            if ($data['get'] === 'costs') {
                $model->where('sum', '<', 0);
            }
        }

        if (isset($data['date_start'], $data['date_end'])) {
            $model->whereBetween('date', [$data['date_start'], $data['date_end']]);
        }

        if (isset($data['sort'], $data['param'])) {
            $model->orderBy($data['sort'], $data['param']);
        } else {
            $model->orderBy('date', 'desc');
        }

        return $model->with(['category:id,title'])->paginate(15);
    }

    final public function indicators(array $data): array
    {
        $model = $this->model::select([
            'id',
            'date',
            'sum',
            'balance',
            'category_id',
            'comment',
        ]);

        if (isset($data['get'])) {
            if ($data['get'] === 'profits') {
                $model->where('sum', '>', 0);
            }
            if ($data['get'] === 'costs') {
                $model->where('sum', '<', 0);
            }
        }

        if (isset($data['date_start'], $data['date_end'])) {
            $model->whereBetween('date', [$data['date_start'], $data['date_end']]);
        }

        $collection = $model->orderBy('date', 'desc')->get();

        $result = [];
        $result['balance'] = $collection->first()?->balance ?: 0;
        $result['costs'] = $collection->where('sum', '<', 0)->sum('sum');
        $result['profits'] = $collection->where('sum', '>', 0)->sum('sum');

        return $result;
    }

    final public function create(array $data): \Illuminate\Database\Eloquent\Model
    {
        $model = new $this->model;
        $model->fill($data);
        $model->save();

        $this->updateCashFlow($data['date']);
        $this->updateProfitAndLoss($data['date']);
        $this->calculateBalance($data['date']);
        return $model;
    }

    final public function update(int $id, array $data): \Illuminate\Database\Eloquent\Model
    {
        $model = $this->model::where('id', $id)->first();
        $model->fill($data);
        $model->update();

        $this->updateCashFlow($data['date']);
        $this->updateProfitAndLoss($data['date']);
        $this->calculateBalance($data['date']);
        return $model;
    }

    final public function updateCategory(array $data): \Illuminate\Database\Eloquent\Model
    {
        $model = $this->model::where('id', $data['id'])->first();
        $model->category_id = $data['category_id'];
        $model->update();

        return $model;
    }

    final public function calculateBalance(string $date): bool
    {
        $items = $this->model::where('date', '>=', $date)
            ->orderBy('date', 'asc')
            ->get();

        $previous_model = $this->model::where('date', '<', $date)->orderBy('date', 'desc')->first();
        $previous_balance = $previous_model ? $previous_model->balance : 0;

        foreach ($items as $item) {
            $balance = $previous_balance + $item->sum;
            $previous_balance = $balance;
            $item->balance = $balance;
            $item->save();
        }
        return true;
    }

    final public function updateProfitAndLoss(string $date): bool
    {
        $month = Carbon::parse($date)->format('Y-m');
        $repository = new ProfitAndLossRepository();
        $repository->update($month);
        return true;
    }

    final public function updateCashFlow(string $date): bool
    {
        $month = Carbon::parse($date)->format('Y-m');
        $repository = new CashFlowRepository();
        $repository->update($month);
        return true;
    }

}
