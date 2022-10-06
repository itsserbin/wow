<?php

namespace App\Repositories\Statistics;

use App\Models\Statistics\MarketingStatistic as Model;
use App\Repositories\CoreRepository;
use Carbon\Carbon;
use DateTime;

class MarketingStatisticRepository extends CoreRepository
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
            'average_application_price',
            'average_approve_application_price',
            'average_done_application_price',
            'average_check',
            'average_marginality',
            'average_items',
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
            'average_application_price',
            'average_approve_application_price',
            'average_done_application_price',
            'average_check',
            'average_marginality',
            'average_items',
        );

        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $startDate = DateTime::createFromFormat("Y-m-d\TH:i:s.uO", $data['date_start'])->format('Y-m-d');
            $endDate = DateTime::createFromFormat("Y-m-d\TH:i:s.uO", $data['date_end'])->format('Y-m-d');

            $model->whereBetween('date', [$startDate, $endDate]);        } elseif (array_key_exists('last', $data)) {
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
            'date',
            'average_application_price',
            'average_approve_application_price',
            'average_done_application_price',
            'average_check',
            'average_marginality',
            'average_items',
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

        $result['Ср.цена заявки'] = $model->average('average_application_price');
        $result['Ср.цена апрува'] = $model->average('average_approve_application_price');
        $result['Ср.цена выполненной заявки'] = $model->average('average_done_application_price');
        $result['Ср.чек'] = $model->average('average_check');
        $result['Ср.маржа'] = $model->average('average_marginality');
        $result['Ср.кол-во товара'] = $model->average('average_items');

        return $result;
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
