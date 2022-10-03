<?php

namespace App\Repositories\Statistics;

use App\Models\Statistics\ManagerSalary as Model;
use App\Repositories\CoreRepository;
use App\Repositories\UsersRepository;

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
        );


        if ($managers && $date) {
            $model->whereBetween('date', [$data['date_start'], $data['date_end']])
                ->whereIn('manager_id', $managers)
                ->groupBy('date');
        } elseif ($date) {
            $model->whereBetween('date', [$data['date_start'], $data['date_end']])->where('manager_id', null);
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
            $date = ['date_start' => $data['date_start'], 'date_end' => $data['date_end']];
        }
        $result['Всего заявок'] = $this->sumColumnByDateRangeAndManagerId('count_applications', $date, $managers);
        $result['Отмененных заявок'] = $this->sumColumnByDateRangeAndManagerId('canceled_applications', $date, $managers);
        $result['Возвратов'] = $this->sumColumnByDateRangeAndManagerId('returned_applications', $date, $managers);
        $result['В процессе'] = $this->sumColumnByDateRangeAndManagerId('in_process_applications', $date, $managers);
        $result['Выполненных заявок'] = $this->sumColumnByDateRangeAndManagerId('done_applications', $date, $managers);
        $result['Общий апрув'] = $this->sumColumnByDateRangeAndManagerId('total_applications', $date, $managers);
        $result['Всего доп.продаж'] = $this->sumColumnByDateRangeAndManagerId('count_additional_sales', $date, $managers);
        $result['Общая маржа доп.продаж'] = $this->sumColumnByDateRangeAndManagerId('sum_additional_sales', $date, $managers);
        $result['Сумма за заявки'] = $this->sumColumnByDateRangeAndManagerId('sum_price_applications', $date, $managers);
        $result['Сумма за доп.продажи'] = $this->sumColumnByDateRangeAndManagerId('sum_price_additional_sales', $date, $managers);
        $result['Кол-во продаж воздуха'] = $this->sumColumnByDateRangeAndManagerId('count_sale_of_air', $date, $managers);
        $result['Общая сумма продаж воздуха'] = $this->sumColumnByDateRangeAndManagerId('price_sale_of_air', $date, $managers);
        $result['Сумма за продажу воздуха'] = $this->sumColumnByDateRangeAndManagerId('total_sale_of_air', $date, $managers);
        $result['Кол-во предоплат'] = $this->sumColumnByDateRangeAndManagerId('count_prepayments', $date, $managers);
        $result['Сумма за предоплаты'] = $this->sumColumnByDateRangeAndManagerId('prepayments_amount', $date, $managers);
        $result['Итого'] = $this->sumColumnByDateRangeAndManagerId('total_price', $date, $managers);
        return $result;
    }


    public function sumColumnByDateRangeAndManagerId($column, $date = null, $managers = null)
    {
        if ($date && $managers) {
            return $this->model::whereBetween('date', [$date['date_start'], $date['date_end']])
                ->whereIn('manager_id', $managers)
                ->sum($column);
        } elseif ($date) {
            if ($date == []) {
                if (array_key_exists('date_start', $date) && array_key_exists('date_end', $date)) {
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
