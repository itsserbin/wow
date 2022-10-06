<?php

namespace App\Repositories\Statistics;

use App\Models\Statistics\OrderStatistic as Model;
use App\Repositories\CoreRepository;
use Carbon\Carbon;
use DateTime;

class OrdersStatisticsRepository extends CoreRepository
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

    public function getAllWithPaginate($data)
    {
        $model = $this->model->select(
            'id',
            'date',
            'applications',
            'unprocessed',
            'completed',
            'refunds',
            'cancel',
            'at_the_post_office',
            'requires_clarification',
            'in_process',
            'transferred_to_supplier',
            'awaiting_dispatch',
            'awaiting_prepayment',
            'on_the_road',
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

        if (array_key_exists('sort', $data) && array_key_exists('param', $data)) {
            $model->orderBy($data['sort'], $data['param']);
        }else {
            $model->orderBy('date', 'desc');
        }

        return $model->paginate(15);

    }

    public function generalStatistic($data)
    {
        $model = $this->model->select(
            'id',
            'date',
            'applications',
            'unprocessed',
            'completed',
            'refunds',
            'cancel',
            'at_the_post_office',
            'requires_clarification',
            'in_process',
            'transferred_to_supplier',
            'awaiting_dispatch',
            'awaiting_prepayment',
            'on_the_road',
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

        $result['Усього'] = $model->sum('applications');
        $result['Нові'] = $model->sum('unprocessed');
        $result['Виконані'] = $model->sum('completed');
        $result['Повернення'] = $model->sum('refunds');
        $result['Скасовані'] = $model->sum('cancel');
        $result['На пошті'] = $model->sum('at_the_post_office');
        $result['В процесі'] = $model->sum('in_process');
        $result['Передані постачальнику'] = $model->sum('transferred_to_supplier');
        $result['Вимагають уточнення'] = $model->sum('requires_clarification');
        $result['Очікування передоплати'] = $model->sum('awaiting_prepayment');
        $result['Очікування відправки'] = $model->sum('awaiting_dispatch');
        $result['В дорозі'] = $model->sum('on_the_road');

        return $result;
    }

    public function generalIndicatorsStatistic($data)
    {
        $model = $this->model->select(
            'canceled_orders_rate',
            'returned_orders_ratio',
            'received_parcel_ratio',
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

        $result['COR (Отмененные)'] = round($model->average('canceled_orders_rate'));
        $result['ROR (Возвраты)'] = round($model->average('returned_orders_ratio'));
        $result['RPT (Выполненные)'] = round($model->average('received_parcel_ratio'));

        return $result;
    }

    public function getDataForChart($data)
    {
        $model = $this->model->select(
            'date',
            'applications',
            'completed',
            'refunds',
            'cancel',
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

    public function getAll()
    {
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

}
