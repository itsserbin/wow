<?php

namespace App\Repositories;

use App\Models\Client as Model;
use App\Models\Enums\ClientStatus;
use App\Models\Enums\MassActions;
use Illuminate\Pagination\LengthAwarePaginator;

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

    public function getAllWithPaginate(): LengthAwarePaginator
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
            ->orderBy('id', 'desc')
            ->paginate(15);
    }

    public function search($search, $perPage = null)
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
            ->orWhere('phone', 'LIKE', "%$search%")
            ->orWhere('id', 'LIKE', "%$search%")
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);
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
        $client->status = ClientStatus::NEW_STATUS;
        $client->phone = $phone;
        $client->number_of_purchases = 1;

        $totalPrice = 0;
        $totalCount = 0;

        foreach ($items as $item) {
            if ($item->product) {
                $totalPrice += ($item->product->discount_price ?: $item->product->price) * $item->count;
                $totalCount += $item->count;
            }
        }

        if ($promoCode) {
            $discount = $this->promoCodesRepository->getDiscount($promoCode);

            if ($discount->discount_in_hryvnia) {
                $totalPrice -= $discount->discount_in_hryvnia;
            } elseif ($discount->percent_discount) {
                $totalPrice = $totalPrice * (100 - $discount->percent_discount) / 100;
            }
        }
        $client->whole_check = $totalPrice;
        $client->purchased_goods = $totalCount;
        $client->average_check = $totalPrice / $totalCount;

        $client->save();

        return $client;
    }

    public function updateClient($client, $items, $promoCode)
    {
        $result = $this->model::where('id', $client)->first();

        ++$result->number_of_purchases;
        $result->status = ClientStatus::EXPERIENCED_STATUS;

        $totalPrice = $result->whole_check;
        $totalCount = $result->purchased_goods;

        foreach ($items as $item) {
            if ($item->product) {
                $totalPrice += ($item->product->discount_price ?: $item->product->price) * $item->count;
                $totalCount += $item->count;
            }
        }

        if ($promoCode) {
            $discount = $this->promoCodesRepository->getDiscount($promoCode);

            if ($discount->discount_in_hryvnia) {
                $totalPrice -= $discount->discount_in_hryvnia;
            } elseif ($discount->percent_discount) {
                $totalPrice = $totalPrice * (100 - $discount->percent_discount) / 100;
            }
        }

        $result->whole_check = $totalPrice;
        $result->purchased_goods = $totalCount;
        $result->average_check = $totalPrice / $totalCount;


        $result->update();

        return $result;
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
}
