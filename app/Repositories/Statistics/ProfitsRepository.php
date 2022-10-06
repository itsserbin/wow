<?php

namespace App\Repositories\Statistics;

use App\Models\Statistics\Profit as Model;
use App\Repositories\CoreRepository;
use Carbon\Carbon;
use DateTime;

class ProfitsRepository extends CoreRepository
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return string
     */
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::find($id);
    }

    public function getAllWithPaginate($data)
    {
        $model = $this->model->select(
            'id',
            'date',
            'cost',
            'marginality',
            'average_marginality',
            'clear_profit',
            'refunds_sum',
            'sale_of_air_sum',
            'prepayment_sum',
            'additional_sales_sum',
            'additional_sales_marginality_sum',
            'debt_supplier',
            'turnover',
        );;

        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $startDate = DateTime::createFromFormat("Y-m-d\TH:i:s.uO", $data['date_start'])->format('Y-m-d');
            $endDate = DateTime::createFromFormat("Y-m-d\TH:i:s.uO", $data['date_end'])->format('Y-m-d');

            $model->whereBetween('date', [$startDate, $endDate]);
        } elseif (array_key_exists('last', $data)) {
            if ($data['last'] == 'week') {
                $model->whereBetween('date', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()]);
            } elseif ($data['last'] == 'two-week') {
                $model->whereBetween('date', [Carbon::now()->subWeek()->startOfWeek(), Carbon::now()->endOfWeek()]);
            } elseif ($data['last'] == 'one-month') {
                $model->whereBetween('date', [Carbon::now()->startOfMonth(), Carbon::now()->endOfWeek()]);
            } elseif ($data['last'] == '7-days') {
                $model->whereBetween('date', [Carbon::now()->subDays(7), Carbon::now()]);
            } elseif ($data['last'] == '14-days') {
                $model->whereBetween('date', [Carbon::now()->subDays(14), Carbon::now()]);
            } elseif ($data['last'] == '30-days') {
                $model->whereBetween('date', [Carbon::now()->subDays(30), Carbon::now()]);
            } elseif ($data['last'] == '90-days') {
                $model->whereBetween('date', [Carbon::now()->subDays(90), Carbon::now()]);
            }
        }

        if (array_key_exists('sort', $data) && array_key_exists('param', $data)) {
            $model->orderBy($data['sort'], $data['param']);
        } else {
            $model->orderBy('date', 'desc');
        }

        return $model->paginate(15);

    }

    public function getDataForChart($data)
    {
        $model = $this->model->select(
            'id',
            'date',
            'cost',
            'marginality',
            'average_marginality',
            'clear_profit',
            'refunds_sum',
            'sale_of_air_sum',
            'prepayment_sum',
            'additional_sales_sum',
            'additional_sales_marginality_sum',
            'debt_supplier',
            'turnover',
        );

        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $startDate = DateTime::createFromFormat("Y-m-d\TH:i:s.uO", $data['date_start'])->format('Y-m-d');
            $endDate = DateTime::createFromFormat("Y-m-d\TH:i:s.uO", $data['date_end'])->format('Y-m-d');

            $model->whereBetween('date', [$startDate, $endDate]);
        } elseif (array_key_exists('last', $data)) {
            if ($data['last'] == 'week') {
                $model->whereBetween('date', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()]);
            } elseif ($data['last'] == 'two-week') {
                $model->whereBetween('date', [Carbon::now()->subWeek()->startOfWeek(), Carbon::now()->endOfWeek()]);
            } elseif ($data['last'] == 'one-month') {
                $model->whereBetween('date', [Carbon::now()->startOfMonth(), Carbon::now()->endOfWeek()]);
            } elseif ($data['last'] == '7-days') {
                $model->whereBetween('date', [Carbon::now()->subDays(7), Carbon::now()]);
            } elseif ($data['last'] == '14-days') {
                $model->whereBetween('date', [Carbon::now()->subDays(14), Carbon::now()]);
            } elseif ($data['last'] == '30-days') {
                $model->whereBetween('date', [Carbon::now()->subDays(30), Carbon::now()]);
            } elseif ($data['last'] == '90-days') {
                $model->whereBetween('date', [Carbon::now()->subDays(90), Carbon::now()]);
            }
        }

        return $model
            ->orderBy('date', 'desc')
            ->get();

    }

    public function generalStatistic($data)
    {
        $model = $this->model->select(
            'id',
            'date',
            'cost',
            'marginality',
            'average_marginality',
            'clear_profit',
            'refunds_sum',
            'sale_of_air_sum',
            'prepayment_sum',
            'additional_sales_sum',
            'additional_sales_marginality_sum',
            'debt_supplier',
            'turnover',
        );

        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $startDate = DateTime::createFromFormat("Y-m-d\TH:i:s.uO", $data['date_start'])->format('Y-m-d');
            $endDate = DateTime::createFromFormat("Y-m-d\TH:i:s.uO", $data['date_end'])->format('Y-m-d');

            $model->whereBetween('date', [$startDate, $endDate]);
        } elseif (array_key_exists('last', $data)) {
            if ($data['last'] == 'week') {
                $model->whereBetween('date', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()]);
            } elseif ($data['last'] == 'two-week') {
                $model->whereBetween('date', [Carbon::now()->subWeek()->startOfWeek(), Carbon::now()->endOfWeek()]);
            } elseif ($data['last'] == 'one-month') {
                $model->whereBetween('date', [Carbon::now()->startOfMonth(), Carbon::now()->endOfWeek()]);
            } elseif ($data['last'] == '7-days') {
                $model->whereBetween('date', [Carbon::now()->subDays(7), Carbon::now()]);
            } elseif ($data['last'] == '14-days') {
                $model->whereBetween('date', [Carbon::now()->subDays(14), Carbon::now()]);
            } elseif ($data['last'] == '30-days') {
                $model->whereBetween('date', [Carbon::now()->subDays(30), Carbon::now()]);
            } elseif ($data['last'] == '90-days') {
                $model->whereBetween('date', [Carbon::now()->subDays(90), Carbon::now()]);
            }
        }

        $model->get();

        $result['Витрати'] = $model->sum('cost');
        $result['Оберт'] = $model->sum('turnover');
        $result['Маржа'] = $model->sum('marginality');
        $result['Чистий прибуток'] = $model->sum('clear_profit');
        $result['Винен постачальник'] = $model->sum('debt_supplier');
        $result['Продажі повітря'] = $model->sum('sale_of_air_sum');
        $result['Середня маржа'] = $model->avg('average_marginality');
        $result['Сума переодоплат'] = $model->sum('prepayment_sum');
        $result['Сума за повернення товару'] = $model->sum('refunds_sum');
        $result['Оберт дод.продаж'] = $model->sum('additional_sales_sum');
        $result['Маржа з дод.продаж'] = $model->sum('additional_sales_marginality_sum');

        return $result;
    }

    public function getAll($date_start = null, $date_end = null, $last = null)
    {
//        if ($date_start && $date_end) {
//            return $this->model::whereBetween('date', [$date_start, $date_end])->get();
//        } elseif ($last) {
//            if ($last == 'week') {
//                return $this->model::whereBetween('date',
//                    [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->get();
//            } elseif ($last == 'two-week') {
//                return $this->model::whereBetween('date',
//                    [Carbon::now()->subWeek()->startOfWeek(), Carbon::now()->endOfWeek()])->get();
//            } elseif ($last == 'one-month') {
//                return $this->model::whereBetween('date',
//                    [Carbon::now()->startOfMonth(), Carbon::now()->endOfWeek()])->get();
//            } else {
//                return $this->model::all();
//            }
//        } else {
//            return $this->model::all();
//        }
        return $this->model::all();
    }

    public function create($data)
    {
        $model = new $this->model;
        $model->date = $data['date'];
        return $model->save();
    }

    public function getRowByDate($date)
    {
        return $this->model::whereDate('date', $date)->first();
    }

    public function createNewModel()
    {
        return new $this->model;
    }

    public function averageMarginalityByDate($date)
    {
        return $this->model::whereDate('date', $date)
            ->select('average_marginality')
            ->average('average_marginality');
    }
}
