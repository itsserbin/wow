<?php

namespace App\Repositories\Statistics;

use App\Models\Statistics\ManagerSalary as Model;
use App\Repositories\CoreRepository;
use App\Repositories\UsersRepository;
use DateTime;

class ManagerSalariesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model->find($id);
    }

    public function getRowByDateAndManagerId($date, $managerId)
    {
        return $this->model::whereDate('date', $date)->where('manager_id', $managerId)->first();
    }

    public function getRowsByDate($date)
    {
        return $this->model::whereDate('date', $date)->get();
    }

    public function getAll()
    {
        return $this->model::all();
    }

    public function createNewModel()
    {
        return new $this->model;
    }

    public function getAllStatistics($data = null)
    {
        $date = null;
        $managers = null;

        if (array_key_exists('managers', $data)) {
            $managers = explode(',', $data['managers']);
        }
        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $date = ['date_start' => $data['date_start'], 'date_end' => $data['date_end']];
        }

        $model = $this->model->select(
            'date',
            'manager_id',
            'count_applications',
            'canceled_applications',
            'returned_applications',
            'in_process_applications',
            'done_applications',
            'total_applications',
            'count_additional_sales',
            'sum_additional_sales',
            'sum_price_applications',
            'sum_price_additional_sales',
            'count_sale_of_air',
            'price_sale_of_air',
            'total_sale_of_air',
            'count_prepayments',
            'prepayments_amount',
            'total_price',
            'count_parcel_reminder',
        );

        if ($managers && $date) {
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'], 'date'),
                $this->dateFormatFromTimepicker($data['date_end'], 'date')
            ])
                ->whereIn('manager_id', $managers)
                ->groupBy('date');;


        } elseif ($date) {
            $model->whereBetween('date', [
                $this->dateFormatFromTimepicker($data['date_start'], 'date'),
                $this->dateFormatFromTimepicker($data['date_end'], 'date')
            ])->where('manager_id', null);
        } elseif ($managers) {
            $model->whereIn('manager_id', $managers)->groupBy('date');
        } else {
            $model->where('manager_id', null);
        }

        return $model->orderBy('date', 'desc')->paginate(15);
    }

    public function generalStatistics($data = null): array
    {
        $date = null;
        $managers = null;

        if (array_key_exists('managers', $data)) {
            $managers = explode(',', $data['managers']);
        }

        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $date = [
                'date_start' => $this->dateFormatFromTimepicker($data['date_start'], 'date'),
                'date_end' => $this->dateFormatFromTimepicker($data['date_end'], 'date')
            ];
        }
        $result['Всього заявок'] = $this->sumColumnByDateRangeAndManagerId('count_applications', $date, $managers);
        $result['Скасовані'] = $this->sumColumnByDateRangeAndManagerId('canceled_applications', $date, $managers);
        $result['Повернення'] = $this->sumColumnByDateRangeAndManagerId('returned_applications', $date, $managers);
        $result['В процесі'] = $this->sumColumnByDateRangeAndManagerId('in_process_applications', $date, $managers);
        $result['Виконані'] = $this->sumColumnByDateRangeAndManagerId('done_applications', $date, $managers);
        $result['Загальний апрув'] = $this->sumColumnByDateRangeAndManagerId('total_applications', $date, $managers);
        $result['Всього дод.продаж'] = $this->sumColumnByDateRangeAndManagerId('count_additional_sales', $date, $managers);
        $result['Загальна маржа дод.продаж'] = $this->sumColumnByDateRangeAndManagerId('sum_additional_sales', $date, $managers);
        $result['Сума за заявки'] = $this->sumColumnByDateRangeAndManagerId('sum_price_applications', $date, $managers);
        $result['Сума за дод.продажи'] = $this->sumColumnByDateRangeAndManagerId('sum_price_additional_sales', $date, $managers);
        $result['Кількість продажів повітря'] = $this->sumColumnByDateRangeAndManagerId('count_sale_of_air', $date, $managers);
        $result['Загальна сума продажу повітря'] = $this->sumColumnByDateRangeAndManagerId('price_sale_of_air', $date, $managers);
        $result['Сума за продаж повітря'] = $this->sumColumnByDateRangeAndManagerId('total_sale_of_air', $date, $managers);
        $result['Кількість передоплат'] = $this->sumColumnByDateRangeAndManagerId('count_prepayments', $date, $managers);
        $result['Кількість нагадувань про посилку'] = $this->sumColumnByDateRangeAndManagerId('count_parcel_reminder', $date, $managers);
        $result['Сума за передоплати'] = $this->sumColumnByDateRangeAndManagerId('prepayments_amount', $date, $managers);
        $result['Загалом'] = $this->sumColumnByDateRangeAndManagerId('total_price', $date, $managers);
        return $result;
    }


    public function sumColumnByDateRangeAndManagerId($column, $date = null, $managers = null)
    {
        if ($date && $managers) {
            return $this->model::whereBetween('date', [$date['date_start'], $date['date_end']])
                ->whereIn('manager_id', $managers)
                ->sum($column);
        } elseif ($date) {
            if (is_array($date)) {
                if (array_key_exists('date_start', $date) && array_key_exists('date_end', $date)) {
//                    dd($date);
                    return $this->model::whereBetween('date', [$date['date_start'], $date['date_end']])
                        ->where('manager_id', null)
                        ->sum($column);
                }
            } else {
                return $this->model::whereDate('date', $date)
                    ->where('manager_id', null)
                    ->sum($column);
            }

        } elseif ($managers) {
            return $this->model::whereIn('manager_id', $managers)
                ->sum($column);
        } else {
            return $this->model::where('manager_id', null)->sum($column);
        }
    }

    public function addDay($data): bool
    {
        $usersRepository = new UsersRepository();

        if (!$this->model::where('date', $data['date'])->first()) {
            foreach ($usersRepository->getManagersList() as $item) {
                $model = $this->createNewModel();
                $model->date = $data['date'];
                $model->manager_id = $item->id;
                $model->save();
            }
            $model = $this->createNewModel();
            $model->date = $data['date'];
            $model->manager_id = null;
            $model->save();

            return true;
        } else {
            return false;
        }
    }

    public function destroy($id)
    {
        return $this->model::destroy($id);
    }
}
