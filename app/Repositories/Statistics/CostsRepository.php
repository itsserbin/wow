<?php

namespace App\Repositories\Statistics;

use App\Models\Statistics\Cost as Model;
use App\Repositories\Statistics\CostCategoriesRepository;
use App\Repositories\CoreRepository;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CostsRepository extends CoreRepository
{
    public function __construct()
    {
        parent::__construct();
    }

    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::find($id);
    }

    public function getAllWithPaginate($data = null)
    {
        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data) && array_key_exists('filter', $data)) {
            $model = $this->model::whereBetween('date', [$data['date_start'], $data['date_end']])
                ->whereHas('category', function ($q) use ($data) {
                    $q->where('id', $data['filter']);
                });
        } else if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $model = $this->model::whereBetween('date', [$data['date_start'], $data['date_end']]);
        } elseif (array_key_exists('last', $data) && array_key_exists('filter', $data)) {
            $data['last'] == 'week' ? $model = $this->model::whereBetween('date',
                [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                ->where('cost_category_id', $data['filter']) :
                ($data['last'] == 'two-week' ? $model = $this->model::whereBetween('date',
                    [Carbon::now()->subWeek()->startOfWeek(), Carbon::now()->endOfWeek()])
                    ->where('cost_category_id', $data['filter']) :
                    ($data['last'] == 'one-month' ? $model = $this->model::whereBetween('date',
                        [Carbon::now()->startOfMonth(), Carbon::now()->endOfWeek()])
                        ->where('cost_category_id', $data['filter']) :
                        $model = $this->model::where('cost_category_id', $data['filter'])));
        } elseif (array_key_exists('last', $data)) {
            $data['last'] == 'week' ? $model = $this->model::whereBetween('date',
                [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()]) :
                ($data['last'] == 'two-week' ? $model = $this->model::whereBetween('date',
                    [Carbon::now()->subWeek()->startOfWeek(), Carbon::now()->endOfWeek()]) :
                    ($data['last'] == 'one-month' ? $model = $this->model::whereBetween('date',
                        [Carbon::now()->startOfMonth(), Carbon::now()->endOfWeek()]) :
                        $model = $this->model
                    )
                );
        } elseif (array_key_exists('filter', $data)) {
            $model = $this->model::where('cost_category_id', $data['filter']);
        } else {
            $model = $this->model;
        }

        if (array_key_exists('sort', $data) && array_key_exists('param', $data)) {
            return $model->select(
                'id',
                'date',
                'cost_category_id',
                'quantity',
                'sum',
                'total',
                'comment',
                'user_id',
            )
                ->with('user', 'category')
                ->orderBy($data['sort'], $data['param'])
                ->paginate(15);
        } else {
            return $model->select(
                'id',
                'date',
                'cost_category_id',
                'quantity',
                'sum',
                'total',
                'comment',
                'user_id',
            )
                ->with('user', 'category')
                ->orderBy('date', 'desc')
                ->paginate(15);
        }
    }

    public function generalStatistic($data = null)
    {
        $costCategoriesRepository = new CostCategoriesRepository();
        $list = $costCategoriesRepository->list();

        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data) && array_key_exists('filter', $data)) {
            $model = $this->model::whereBetween('date', [$data['date_start'], $data['date_end']])
                ->whereHas('category', function ($q) use ($data) {
                    $q->where('id', $data['filter']);
                })->orderBy('date', 'desc')
                ->get();;
        } elseif (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $model = $this->model::whereBetween('date', [$data['date_start'], $data['date_end']])
                ->orderBy('date', 'desc')
                ->get();
        } elseif (array_key_exists('last', $data) && array_key_exists('filter', $data)) {
            $data['last'] == 'week' ? $model = $this->model::whereBetween('date',
                [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                ->where('cost_category_id', $data['filter'])->get() :
                ($data['last'] == 'two-week' ? $model = $this->model::whereBetween('date',
                    [Carbon::now()->subWeek()->startOfWeek(), Carbon::now()->endOfWeek()])
                    ->where('cost_category_id', $data['filter'])->get() :
                    ($data['last'] == 'one-month' ? $model = $this->model::whereBetween('date',
                        [Carbon::now()->startOfMonth(), Carbon::now()->endOfWeek()])
                        ->where('cost_category_id', $data['filter'])->get() :
                        $model = $this->model::where('cost_category_id', $data['filter'])->get()));
        } elseif (array_key_exists('last', $data)) {
            $data['last'] == 'week' ? $model = $this->model::whereBetween('date',
                [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->get() :
                ($data['last'] == 'two-week' ? $model = $this->model::whereBetween('date',
                    [Carbon::now()->subWeek()->startOfWeek(), Carbon::now()->endOfWeek()])->get() :
                    ($data['last'] == 'one-month' ? $model = $this->model::whereBetween('date',
                        [Carbon::now()->startOfMonth(), Carbon::now()->endOfWeek()])->get() :
                        $model = $this->model::all()));
        } elseif (array_key_exists('filter', $data)) {
            $model = $this->model::where('cost_category_id', $data['filter'])
                ->orderBy('date', 'desc')->get();
        } else {
            $model = $this->model::orderBy('date', 'desc')->get();
        }
        $result = [];
        $result['Всего'] = $model->sum('total');

        foreach ($model as $item) {
            foreach ($list as $listItem) {
                if ($item->cost_category_id == $listItem->id) {
                    $result[$listItem->title] = $model->where('cost_category_id', $listItem->id)->sum('total');
                }
            }
        }
        return $result;
    }

    public function getAllForChart($data = null)
    {
        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data) && array_key_exists('filter', $data)) {
            $model = $this->model::whereBetween('date', [$data['date_start'], $data['date_end']])
                ->whereHas('category', function ($q) use ($data) {
                    $q->where('id', $data['filter']);
                })->orderBy('date', 'desc')
                ->get();
        } else if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $model = $this->model::whereBetween('date', [$data['date_start'], $data['date_end']])->get();
        } elseif (array_key_exists('last', $data) && array_key_exists('filter', $data)) {
            $data['last'] == 'week' ? $model = $this->model::whereBetween('date',
                [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                ->where('cost_category_id', $data['filter'])->get() :
                ($data['last'] == 'two-week' ? $model = $this->model::whereBetween('date',
                    [Carbon::now()->subWeek()->startOfWeek(), Carbon::now()->endOfWeek()])
                    ->where('cost_category_id', $data['filter'])->get() :
                    ($data['last'] == 'one-month' ? $model = $this->model::whereBetween('date',
                        [Carbon::now()->startOfMonth(), Carbon::now()->endOfWeek()])
                        ->where('cost_category_id', $data['filter'])->get() :
                        $model = $this->model::where('cost_category_id', $data['filter'])->get()));
        } elseif (array_key_exists('last', $data)) {
            $data['last'] == 'week' ? $model = $this->model::whereBetween('date',
                [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->get() :
                ($data['last'] == 'two-week' ? $model = $this->model::whereBetween('date',
                    [Carbon::now()->subWeek()->startOfWeek(), Carbon::now()->endOfWeek()])->get() :
                    ($data['last'] == 'one-month' ? $model = $this->model::whereBetween('date',
                        [Carbon::now()->startOfMonth(), Carbon::now()->endOfWeek()])->get() :
                        $model = $this->model::all()));
        } elseif (array_key_exists('filter', $data)) {
            $model = $this->model::where('cost_category_id', $data['filter'])->orderBy('date', 'desc')->get();
        } else {
            $model = $this->model::all();
        }

        $result = [];
        foreach ($model as $item) {
            array_push($result, ['date' => $item->date, 'total' => $this->model::whereDate('date', $item->date)->sum('total')]);
        }
        return $result;
    }

    public function create($data)
    {
        $model = new $this->model;
        $model->comment = $data['comment'];
        $model->quantity = $data['quantity'];
        $model->sum = $data['sum'];
        $model->date = $data['date'];
        $model->user_id = Auth::id();
        $model->total = $model->quantity * $model->sum;
        $model->cost_category_id = $data['cost_category_id'];

        return $model->save();
    }

    public function update($id, $data)
    {
        $model = $this->getById($id);
        $model->comment = $data['comment'];
        $model->quantity = $data['quantity'];
        $model->sum = $data['sum'];
        $model->date = $data['date'];
        $model->user_id = Auth::id();
        $model->total = $model->quantity * $model->sum;
        $model->cost_category_id = $data['cost_category_id'];

        return $model->update();
    }

    public function destroy(int $id)
    {
        return $this->model::destroy($id);
    }

    public function sumCostsByDate($date)
    {
        return $this->model::whereDate('date', $date)
            ->select('total')
            ->sum('total');
    }

    public function getManagerSalaryRowByDate($date)
    {
        $costCategoriesRepository = new CostCategoriesRepository;
        $costCategoriesItem = $costCategoriesRepository->getBySlug('salary');

        return $this->model::where('cost_category_id', $costCategoriesItem->id)
            ->whereDate('date', $date)->first();
    }

    public function getAllManagerSalaryRows()
    {
        $costCategoriesRepository = new CostCategoriesRepository;
        $costCategoriesItem = $costCategoriesRepository->getBySlug('salary');

        return $this->model::where('cost_category_id', $costCategoriesItem->id)->get();
    }
}
