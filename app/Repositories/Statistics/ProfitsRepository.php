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
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'],'date'),
                $this->dateFormatFromTimepicker($data['date_end'],'date')
            ]);
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
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'],'date'),
                $this->dateFormatFromTimepicker($data['date_end'],'date')
            ]);
        }

        $labels = [];
        $turnover = [];
        $marginality = [];
        $clear_profit = [];
        $sale_of_air_sum = [];
        $average_marginality = [];
        foreach ($model->orderBy('date', 'asc')->get() as $item) {
            array_push($turnover, $item->turnover);
            array_push($marginality, $item->marginality);
            array_push($clear_profit, $item->clear_profit);
            array_push($sale_of_air_sum, $item->sale_of_air_sum);
            array_push($average_marginality, $item->average_marginality);
            array_push($labels, DateTime::createFromFormat("Y-m-d", $item->date)->format('d.m.Y'));
        }
        return [
            'labels' => $labels,
            'datasets' => [
                [
                    'label' => 'Оберт',
                    'borderColor' => ['#3498DB'],
                    'data' => $turnover
                ],
                [
                    'label' => 'Маржа',
                    'borderColor' => ['#F4D03F'],
                    'data' => $marginality
                ],
                [
                    'label' => 'Чистий прибуток',
                    'borderColor' => ['#58D68D'],
                    'data' => $clear_profit
                ],
                [
                    'label' => 'Продажі повітря',
                    'borderColor' => ['#E74C3C'],
                    'data' => $sale_of_air_sum
                ],
                [
                    'label' => 'Середня маржа',
                    'borderColor' => ['#A569BD'],
                    'data' => $average_marginality
                ],
            ]
        ];

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
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'],'date'),
                $this->dateFormatFromTimepicker($data['date_end'],'date')
            ]);
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
