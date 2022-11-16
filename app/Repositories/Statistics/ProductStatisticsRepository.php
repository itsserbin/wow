<?php

namespace App\Repositories\Statistics;

use App\Models\Statistics\ProductStatistic as Model;
use App\Repositories\CoreRepository;
use Carbon\Carbon;
use DateTime;

class ProductStatisticsRepository extends CoreRepository
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
            'product_id',
            'date',
            'sales',
            'returns',
            'exchanges',
            'canceled',
            'conversion_rate',
            'cancellation_rate',
            'return_rate',
            'exchanges_rate',
        );

        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'], 'date'),
                $this->dateFormatFromTimepicker($data['date_end'], 'date')
            ]);
        }

        if (array_key_exists('products', $data)) {
            $products = explode(',', $data['products']);
            $model->whereIn('product_id', $products);
        }

        if (array_key_exists('sort', $data) && array_key_exists('param', $data)) {
            $model->orderBy($data['sort'], $data['param']);
        } else {
            $model->orderBy('date', 'desc');
        }

        return $model->with(['product' => function ($q) {
            $q->select('id', 'h1');
        }])->orderBy('date')->paginate(15);

    }

    public function generalStatistic($data)
    {
        $model = $this->model->select(
            'date',
            'product_id',
            'sales',
            'returns',
            'exchanges',
            'canceled',
            'conversion_rate',
            'cancellation_rate',
            'return_rate',
            'exchanges_rate',
        );

        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'], 'date'),
                $this->dateFormatFromTimepicker($data['date_end'], 'date')
            ]);
        }

        if (array_key_exists('products', $data)) {
            $products = explode(',', $data['products']);
            $model->whereIn('product_id', $products);
        }

        $model->get();

        $result['Продажів'] = $model->sum('sales');
        $result['Повернень'] = $model->sum('returns');
        $result['Обмінів'] = $model->sum('exchanges');
        $result['Скасувань'] = $model->sum('canceled');

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
