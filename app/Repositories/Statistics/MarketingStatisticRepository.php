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
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'], 'date'),
                $this->dateFormatFromTimepicker($data['date_end'], 'date')
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
            'average_application_price',
            'average_approve_application_price',
            'average_done_application_price',
            'average_check',
            'average_marginality',
            'average_items',
        );

        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'], 'date'),
                $this->dateFormatFromTimepicker($data['date_end'], 'date')
            ]);
        }

        $labels = [];
        $average_application_price = [];
        $average_approve_application_price = [];
        $average_done_application_price = [];
        $average_check = [];
        $average_marginality = [];
        foreach ($model->orderBy('date', 'asc')->get() as $item) {
            array_push($average_application_price, $item->average_application_price);
            array_push($average_approve_application_price, $item->average_approve_application_price);
            array_push($average_done_application_price, $item->average_done_application_price);
            array_push($average_check, $item->average_check);
            array_push($average_marginality, $item->average_marginality);
            array_push($labels, DateTime::createFromFormat("Y-m-d", $item->date)->format('d.m.Y'));
        }
        return [
            'labels' => $labels,
            'datasets' => [
                [
                    'label' => 'Ср. ціна заявки',
                    'borderColor' => ['#5DADE2'],
                    'data' => $average_application_price
                ],
                [
                    'label' => 'Ср. ціна апрува',
                    'borderColor' => ['#F4D03F'],
                    'data' => $average_approve_application_price
                ],
                [
                    'label' => 'Ср. ціна виконаної заявки',
                    'borderColor' => ['#58D68D'],
                    'data' => $average_done_application_price
                ],
                [
                    'label' => 'Ср. чек',
                    'borderColor' => ['#E74C3C'],
                    'data' => $average_check
                ],
                [
                    'label' => 'Ср. маржа',
                    'borderColor' => ['#A569BD'],
                    'data' => $average_marginality
                ],
            ]
        ];

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
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'], 'date'),
                $this->dateFormatFromTimepicker($data['date_end'], 'date')
            ]);
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
