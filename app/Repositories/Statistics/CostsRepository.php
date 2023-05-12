<?php

namespace App\Repositories\Statistics;

use App\Models\Statistics\Cost as Model;
use App\Repositories\Statistics\CostAndProfitCategoriesRepository;
use App\Repositories\CoreRepository;
use Carbon\Carbon;
use DateInterval;
use DatePeriod;
use DateTime;
use Exception;
use Illuminate\Database\Eloquent\Collection;
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

    final public function getByCostCategoryAndDate(string $costCategory, string $date): ?\Illuminate\Database\Eloquent\Model
    {
        return $this->model::whereHas('category', static function ($q) use ($costCategory) {
            $q->where('id', $costCategory);
        })->where('date', $date)->first();
    }

    public function getById($id)
    {
        return $this->model::find($id);
    }

    public function getAllWithPaginate(array $data = null)
    {
        $model = $this->model::select([
            'id',
            'date',
            'cost_category_id',
            'quantity',
            'sum',
            'total',
            'comment',
            'user_id',
        ]);

        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data) && array_key_exists('filter', $data)) {
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'], 'date') . " 00:00:00",
                $this->dateFormatFromTimepicker($data['date_end'], 'date') . " 23:59:59"
            ])->whereHas('category', function ($q) use ($data) {
                $q->where('id', $data['filter']);
            });
        } elseif (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'], 'date') . " 00:00:00",
                $this->dateFormatFromTimepicker($data['date_end'], 'date') . " 23:59:59"
            ]);
        } elseif (array_key_exists('filter', $data)) {
            $model->where('cost_category_id', $data['filter']);
        }

        if (array_key_exists('sort', $data) && array_key_exists('param', $data)) {
            $model->orderBy($data['sort'], $data['param']);
        } else {
            $model->orderBy('date', 'desc');
        }

        return $model->with([
                'user:id,name',
                'category:id,title'
            ]
        )->paginate(15);

    }

    public function generalStatistic($data = null)
    {
        $costCategoriesRepository = new CostAndProfitCategoriesRepository();
        $list = $costCategoriesRepository->list();

        $model = $this->model::select([
            'date',
            'cost_category_id',
            'total'
        ]);

        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data) && array_key_exists('filter', $data)) {
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'], 'date') . " 00:00:00",
                $this->dateFormatFromTimepicker($data['date_end'], 'date') . " 23:59:59"
            ])->whereHas('category', function ($q) use ($data) {
                $q->where('id', $data['filter']);
            });
        } elseif (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'], 'date') . " 00:00:00",
                $this->dateFormatFromTimepicker($data['date_end'], 'date') . " 23:59:59"
            ]);
        } elseif (array_key_exists('filter', $data)) {
            $model->where('cost_category_id', $data['filter']);
        }

        $model = $model->get();
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
        $model = $this->model::select([
            'date',
            'total'
        ]);

        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data) && array_key_exists('filter', $data)) {
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'], 'date') . " 00:00:00",
                $this->dateFormatFromTimepicker($data['date_end'], 'date') . " 23:59:59"
            ])->where('cost_category_id', $data['filter']);
        } else if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'], 'date') . " 00:00:00",
                $this->dateFormatFromTimepicker($data['date_end'], 'date') . " 23:59:59"
            ]);
        } elseif (array_key_exists('filter', $data)) {
            $model->where('cost_category_id', $data['filter']);
        }

        $labels = [];
        $result = [];
        foreach ($model->orderBy('date', 'asc')->groupBy('date')->get() as $item) {
            array_push($result, $this->model::whereDate('date', $item->date)->sum('total'));
            array_push($labels, $item->date->format('d.m.Y'));
        }
        return [
            'labels' => $labels,
            'datasets' => [
                [
                    'label' => 'Витрати',
                    'borderColor' => ['#3498DB'],
                    'data' => $result
                ]
            ]
        ];
    }

    /**
     * @throws Exception
     */
    final public function create(array $data)
    {
        $costType = $data['cost_type'] ?? null;

        if ($costType === 'range') {
            $period = new DatePeriod(
                new DateTime($this->dateFormatFromTimepicker($data['date'][0])),
                new DateInterval('P1D'),
                new DateTime(
                    DateTime::createFromFormat("Y-m-d\TH:i:s.uO", $data['date'][1])
                        ->modify('+1 day')
                        ->format('Y-m-d'))
            );
            $sum = round($data['sum'] / iterator_count($period), 2);

            $params = [
                'comment' => $data['comment'],
                'quantity' => $data['quantity'],
                'sum' => $sum,
                'cost_category_id' => $data['cost_category_id'],
            ];

            foreach ($period as $key => $value) {
                $params['date'] = $value->format('Y-m-d');
                $this->onCreate($params);
            }
        } else {
            $this->onCreate($data);
        }
    }

    public function onCreate($data)
    {
        $model = new $this->model;
        if (isset($data['comment'])) {
            $model->comment = $data['comment'];
        }
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

    public function sumAdvertisingCostsByDate($date)
    {
        return $this->model::whereHas('category', function ($q) {
            $q->where('slug', 'facebook');
        })
            ->whereDate('date', $date)
            ->select('total')
            ->sum('total');
    }

    final public function getManagerSalaryRowByDate(string $date): \Illuminate\Database\Eloquent\Model|null
    {
        $costCategoriesRepository = new CostAndProfitCategoriesRepository();
        $costCategoriesItem = $costCategoriesRepository->getByCode('#CC');

        if ($costCategoriesItem) {
            $model = $this->model::where('cost_category_id', $costCategoriesItem->id)
                ->where('date', '>=', Carbon::parse($date)->startOfDay())
                ->where('date', '<=', Carbon::parse($date)->endOfDay())
                ->first();

            return $model ?? null;
        }

        return null;
    }

    final public function getAllManagerSalaryRows(): Collection|bool
    {
        $costCategoriesRepository = new CostAndProfitCategoriesRepository;
        $costCategoriesItem = $costCategoriesRepository->getByCode('#CC');

        if ($costCategoriesItem) {
            return $this->model::where('cost_category_id', $costCategoriesItem->id)->get();
        }

        return false;
    }
}
