<?php

namespace App\Repositories;

use App\Models\Client as Model;
use App\Models\Enums\ClientStatus;
use App\Models\Enums\MassActions;
use App\Models\Enums\OrderStatus;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;

class ClientsRepository extends CoreRepository
{

    private mixed $promoCodesRepository;

    public function __construct()
    {
        parent::__construct();
        $this->promoCodesRepository = app(PromoCodesRepository::class);
    }

    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::with('orders')->find($id);
    }

    public function getAllWithPaginate($data): LengthAwarePaginator
    {
        $columns = [
            'id',
            'name',
            'last_name',
            'middle_name',
            'phone',
            'status',
            'sub_status',
            'number_of_purchases',
            'purchased_goods',
            'comment',
            'whole_check',
            'average_check',
            'created_at',
            'updated_at',
        ];

        $model = $this->model::select($columns);

        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $model->whereBetween('created_at', [
                date_format(date_create($data['date_start']), 'Y-m-d') . ' 00:00:00',
                date_format(date_create($data['date_end']), 'Y-m-d') . ' 23:59:59'
            ]);
        }

        if (array_key_exists('status', $data)) {
            $model->where('status', $data['status']);
        }

        if (isset($data['orderBy'])) {
            $model->orderBy($data['orderBy']['key'], $data['orderBy']['val']);
        } else {
            $model->orderBy('id', 'desc');
        }

        $results = $model->paginate(15);

        return $results->setCollection(
            $results->getCollection()->map->toArray()
        );
    }

    public function search($search)
    {
        $columns = [
            'id',
            'name',
            'last_name',
            'middle_name',
            'phone',
            'status',
            'sub_status',
            'number_of_purchases',
            'comment',
            'whole_check',
            'average_check',
            'created_at',
            'updated_at',
        ];

        return $this
            ->model::select($columns)
            ->where('name', 'LIKE', "%$search%")
            ->orWhere('last_name', 'LIKE', "%$search%")
            ->orWhere('middle_name', 'LIKE', "%$search%")
            ->orWhere('email', 'LIKE', "%$search%")
            ->orWhere('phone', 'LIKE', "%$search%")
            ->orWhere('comment', 'LIKE', "%$search%")
            ->orWhere('id', 'LIKE', "%$search%")
            ->orderBy('id', 'desc')
            ->paginate(15);
    }

    /**
     * Обновить данные клиента.
     *
     * @param $id
     * @param $request
     * @return mixed
     */
    public function update(int $id, array $data)
    {
        $model = $this->getById($id);
        $model->name = $data['name'];
        $model->last_name = $data['last_name'];
        $model->middle_name = $data['middle_name'];
        $model->email = $data['email'];
        $model->status = $data['status'];
        $model->sub_status = $data['sub_status'];
        $model->comment = $data['comment'];
        $model->phone = $data['phone'];
        return $model->update();
    }

    public function destroy(int $id)
    {
        return $this->model::destroy($id);
    }

    /**
     * Проверить наличие клиента в БД.
     */
    public function checkByPhone($phone)
    {
        return $this->model::where('phone', $phone)->first();
    }

    public function createClient($data, $phone, $items, $promoCode)
    {
        $client = new $this->model;
        $client->name = $data['name'] ?? 'Не вказано';
        $client->email = $data['email'];
        $client->last_name = $data['last_name'];
        $client->middle_name = $data['middle_name'];
        $client->status = 'new';
        $client->phone = $phone;
        $client->number_of_purchases = 1;

//        $totalPrice = 0;
//        $totalCount = 0;
//
//        foreach ($items as $item) {
//            if ($item->product) {
//                $totalPrice += ($item->product->discount_price ?: $item->product->price) * $item->count;
//                $totalCount += $item->count;
//            }
//        }
//
//        if ($promoCode) {
//            $discount = $this->promoCodesRepository->getDiscount($promoCode);
//
//            if ($discount->discount_in_hryvnia) {
//                $totalPrice -= $discount->discount_in_hryvnia;
//            } elseif ($discount->percent_discount) {
//                $totalPrice = $totalPrice * (100 - $discount->percent_discount) / 100;
//            }
//        }
//        $client->whole_check = $totalPrice;
//        $client->purchased_goods = $totalCount;
//        $client->average_check = $totalPrice / $totalCount;

        $client->save();

        return $client;
    }

    public function updateClient($client)
    {
        $result = $this->model::where('id', $client)->first();

        ++$result->number_of_purchases;
        $result->status = ClientStatus::EXPERIENCED_STATUS;

        $result->update();

        return $result;
    }

    public function updateAvgAndWholeCheck($id)
    {
        $model = $this->getById($id);

        if (count($model->orders)) {
            $countOrder = 0;
            $wholeCheck = 0;
            $avgCheck = 0;
            foreach ($model->orders as $order) {
                $countOrder += 1;
                $wholeCheck += $order->total_price;
            }
            $avgCheck = $wholeCheck / $countOrder;
            $model->whole_check = $wholeCheck;
            $model->average_check = $avgCheck;
            $model->number_of_purchases = $countOrder;
            return $model->update();
        }
    }

    public function updatePurchaseGoods($id)
    {
        $model = $this
            ->model::where('id', $id)
            ->select('id', 'purchased_goods')
            ->with(['orders' => function ($q) {
                $q->select('client_id', 'status', 'id');
            }])
            ->first();

        $goods = 0;

        if (count($model->orders)) {
            foreach ($model->orders as $order) {
                if ($order->status == OrderStatus::STATUS_DONE) {
                    $goods++;
                }
            }
        }

        $model->purchased_goods = $goods;
        return $model->update();
    }

    public function massActions($action, $data): bool
    {
        if ($action == MassActions::DESTROY) {
            foreach ($data as $key => $item) {
                if ($key !== MassActions::DESTROY) {
                    $this->model::destroy($item);
                }
            }
            return true;
        }
        return false;
    }

    public function filter(array $data, int $perPage = 15)
    {
        $columns = [
            'id',
            'name',
            'last_name',
            'phone',
            'status',
            'sub_status',
            'number_of_purchases',
            'comment',
            'whole_check',
            'average_check',
            'created_at',
            'updated_at',
        ];

        return $this
            ->model::where('status', $data['by'])
            ->select($columns)
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);
    }

    public function subFilter(array $data, int $perPage = 15)
    {
        $columns = [
            'id',
            'name',
            'last_name',
            'phone',
            'status',
            'sub_status',
            'number_of_purchases',
            'comment',
            'whole_check',
            'average_check',
            'created_at',
            'updated_at',
        ];

        return $this
            ->model::where('sub_status', $data['by'])
            ->select($columns)
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);
    }

    public function indicators($data)
    {
        if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
            $total_count = $this->model->whereBetween('created_at', [
                date_format(date_create($data['date_start']), 'Y-m-d') . ' 00:00:00',
                date_format(date_create($data['date_end']), 'Y-m-d') . ' 23:59:59'
            ])->count();
        } else {
            $total_count = $this->model->count();
        }

        if ($total_count) {
            if (array_key_exists('date_start', $data) && array_key_exists('date_end', $data)) {
                $successful_repeat_purchases = $this->model->whereBetween('created_at', [
                    date_format(date_create($data['date_start']), 'Y-m-d') . ' 00:00:00',
                    date_format(date_create($data['date_end']), 'Y-m-d') . ' 23:59:59'
                ])->where('purchased_goods', '>=', 2)->count();

                $repeat_purchases = $this->model->whereBetween('created_at', [
                    date_format(date_create($data['date_start']), 'Y-m-d') . ' 00:00:00',
                    date_format(date_create($data['date_end']), 'Y-m-d') . ' 23:59:59'
                ])->has('orders', '>=', 2)->count();

                $canceled_purchases = $this->model->whereBetween('created_at', [
                    date_format(date_create($data['date_start']), 'Y-m-d') . ' 00:00:00',
                    date_format(date_create($data['date_end']), 'Y-m-d') . ' 23:59:59'
                ])->whereHas('orders', function ($query) {
                    $query->where('status', 'canceled');
                })->doesntHave('orders', 'and', function ($query) {
                    $query->where('status', '!=', 'canceled');
                })->count();
            } else {
                $successful_repeat_purchases = $this->model->where('purchased_goods', '>=', 2)->count();
                $repeat_purchases = $this->model->has('orders', '>=', 2)->count();
                $canceled_purchases = $this->model->whereHas('orders', function ($query) {
                    $query->where('status', 'canceled');
                })->doesntHave('orders', 'and', function ($query) {
                    $query->where('status', '!=', 'canceled');
                })->count();
            }
            $percentage_of_successful_repeat_purchases = ($successful_repeat_purchases / $total_count) * 100;
            $percentage_of_repeat_purchases = ($repeat_purchases / $total_count) * 100;
            $percentage_of_canceled_purchases = ($canceled_purchases / $total_count) * 100;

        } else {
            $percentage_of_successful_repeat_purchases = 0;
            $percentage_of_repeat_purchases = 0;
            $percentage_of_canceled_purchases = 0;
        }

        return [
            '% успішних повторних завмовлень' => round($percentage_of_successful_repeat_purchases, 2),
            'Загальний % повторних завмовлень' => round($percentage_of_repeat_purchases, 2),
            '% хто не зробив покупку' => round($percentage_of_canceled_purchases, 2)
        ];
    }
}
