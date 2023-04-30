<?php

namespace App\Repositories;

use App\Models\Enums\InvoicesStatus;
use App\Models\Enums\MassActions;
use App\Models\Enums\OrderStatus;
use App\Models\Order as Model;

//use App\Services\NovaPoshtaService;
use App\Services\NovaPoshtaService;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Carbon;
use PhpParser\Node\Expr\AssignOp\Concat;

class OrdersRepository extends CoreRepository
{
    private mixed $promoCodesRepository;
    private mixed $clientsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->promoCodesRepository = app(PromoCodesRepository::class);
        $this->clientsRepository = app(ClientsRepository::class);
    }

    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this
            ->model::with('items.product.provider', 'client.orders', 'manager', 'invoices', 'items.product.preview')
            ->find($id);
    }

    /**
     * This method retrieves all orders from the database, with the ability to filter the results by order status.
     * It selects specific columns from the order table, including the order's ID, status, waybill, client ID,
     * comment, total count, total price, and the timestamps for when it was last updated and created.
     *
     * If a status filter is provided in the input data,
     * the query is further narrowed down to only include orders with that specific status.
     * The method also eager loads the client relationship, orders by descending ID,
     * and paginates the results to show 15 orders per page. Finally, it maps the collection to an array before returning it.
     *
     * @param $data
     * @return mixed
     */
    public function getAllWithPaginate($data)
    {
        $model = $this->model::select(
            'id',
            'status',
            'waybill',
            'client_id',
            'comment',
            'total_count',
            'total_price',
            'updated_at',
            'created_at',
        );

        if (isset($data['status'])) {
            $model->where('status', $data['status']);
        }

        if (isset($data['orderBy'])) {
            $model->orderBy($data['orderBy']['key'], $data['orderBy']['val']);
        } else {
            $model->orderBy('id', 'desc');
        }

        $results = $model->with(['client'])->paginate(15);

        return $results->setCollection(
            $results->getCollection()->map->toArray()
        );
    }

    /**
     * @param array $data
     * @param int $perPage
     * @return mixed
     */
    public function filter(array $data, int $perPage = 15)
    {
        $columns = [
            'id',
            'status',
            'client_id',
            'waybill',
            'comment',
            'total_price',
            'total_count',
            'created_at',
            'updated_at',
        ];

        return $this
            ->model::with('client')
            ->where('status', $data['by'])
            ->select($columns)
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);
    }

    /**
     * This method creates a new order and assigns the provided data to it.
     * The order's city, postal office, client ID, status, promo code, comment,
     * and payment method are set from the provided data. The method then saves the order.
     * It also creates new order items with the provided items, order ID, and promo code.
     * If the items are created successfully, it calls the calculatePrice method to update the order's total price.
     * Finally, it returns the created order.
     *
     * @param $data
     * @param $client_id
     * @param $promoCode
     * @param $items
     * @return mixed
     */
    public function create($data, $client_id, $promoCode, $items)
    {
        $order = new $this->model;

        $order->city = $data['city'] ?? null;
        $order->postal_office = $data['postal_office'] ?? null;
        $order->client_id = $client_id;
        $order->status = OrderStatus::STATUS_NEW;
        $order->promo_code = $promoCode;
        $order->comment = $data['comment'];
        $order->payment_method = $data['payment_method'];
        $order->save();

        $orderItemsRepository = new OrderItemsRepository();
        if ($orderItemsRepository->create($items, $order->id, $promoCode)) {
            $this->calculatePrice($order->id);
        }

        return $this->model::where('id', $order->id)->first();
    }

    /**
     * The function calculatePrice takes in an ID and retrieves the model with the associated ID along with its related items.
     * It then initializes three variables, totalPrice, totalCount, and totalClearPrice, which are used to track the total price,
     * item count, and clear total price of the model. The function iterates through the related items,
     * and for each item that has a product, it updates the total price, total count, and total clear price.
     *
     * Next, the function checks if the model has a promo code and if so, it retrieves the discount associated
     * with the promo code and updates the total price based on the type of discount applied.
     * If the discount is in hryvnias, it subtracts the discount amount from the total price, otherwise,
     * it calculates the percent discount and updates the total price accordingly.
     *
     * The function then adds the sale of air price to the total price and total clear price if the sale of air field is set.
     * Next, it subtracts the discount sum from the total price and total clear price if the discount field is set.
     *
     * Finally, the function updates the model's total count, total price and clear total price fields and returns the update query.
     *
     * @param $id
     * @return mixed
     */
    public function calculatePrice($id)
    {
        $model = $this->model::where('id', $id)->with('items')->first();

        $totalPrice = 0;
        $totalCount = 0;
        $totalClearPrice = 0;

        foreach ($model->items as $item) {
            if ($item->product) {
                $totalPrice += ($item->product->discount_price ?: $item->product->price) * $item->count;
                $totalCount += $item->count;
                $totalClearPrice += (($item->product->discount_price ?: $item->product->price) - $item->product->trade_price) * $item->count;
            }
        }

        if ($model->promo_code) {
            $discount = $this->promoCodesRepository->getDiscount($model->promo_code);

            if ($discount) {
                $totalPrice = $discount->discount_in_hryvnia
                    ? $totalPrice - $discount->discount_in_hryvnia
                    : $totalPrice * (100 - $discount->percent_discount) / 100;
            }
        }

        $totalPrice += $model->sale_of_air_price;
        $totalClearPrice += $model->sale_of_air_price;

        $totalPrice -= $model->discount_sum;
        $totalClearPrice -= $model->discount_sum;

        $model->update([
            'total_count' => $totalCount,
            'total_price' => $totalPrice,
            'clear_total_price' => $totalClearPrice
        ]);

        return $model->update();
    }

    public function find(int $id)
    {
        return $this->model::where('id', $id)->with('items', 'items.product')->first();
    }

    /**
     * This code updates a record of a certain model by its ID, using the data passed in the $data array.
     * It first retrieves the model by calling the getById method, and then assigns the attributes
     * from the $data array to the corresponding fields of the model.
     * It also sets the sale_of_air and sale_of_air_price to null if they are not present in the data array.
     * The same applies for discount and discount_sum.
     * After updating the model, the function calls the calculatePrice method to recalculate
     * the total price for the model and the updateAvgAndWholeCheck method from the clientsRepository
     * to update the average and whole check for the client. Finally, it returns the updated model.
     *
     * @param int $id
     * @param array $data
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    final public function update(int $id, array $data): ?\Illuminate\Database\Eloquent\Model
    {
        $model = $this->getById($id);

        $attributes = [
            'status' => $data['status'],
            'comment' => $data['comment'],
            'city' => $data['city'],
            'waybill' => $data['waybill'],
            'postal_office' => $data['postal_office'],
            'manager_id' => $data['manager_id'],
            'parcel_reminder' => $data['parcel_reminder'],
            'sale_of_air_price' => $data['sale_of_air_price'],
            'discount_sum' => $data['discount_sum'],
            'payment_method' => $data['payment_method'],
        ];

        $model->update($attributes);
        $this->calculatePrice($model->id);
        $this->clientsRepository->updateAvgAndWholeCheck($model->client_id);
        return $model;
    }


    /**
     * This code is a function that calculates the total sum of prepaid payments for a specific order.
     * It begins by querying the database for a model that matches the provided $order_id and eager loads the related
     * invoices that have a status of "PAID_STATUS".
     *
     * Then it uses the sum() function on the collection to calculate the total sum of the related
     * invoices that match the specified status. Next, it adds the value of the wfp_payment_sum field (if it exists)
     * to the total sum. Finally, it updates the prepayment_sum field on the model with the calculated total sum
     * and returns the updated model.
     *
     * The function also uses the optional() function to avoid any error if the $model is null and update method
     * to update the model instead of saving it.
     * It also makes use of Eloquent's with method to filter the related invoices with the specific status
     *
     * @param $order_id
     * @return mixed
     */
    public function sumPrepayment($order_id)
    {
        $model = $this->model::where('id', $order_id)
            ->with(['invoices' => function ($query) {
                $query->where('status', InvoicesStatus::PAID_STATUS);
            }])->first();

        $total = $model->invoices->sum('sum');
        $total += optional($model)->wfp_payment_sum;

        optional($model)->update(['prepayment_sum' => $total]);

        return $model;
    }


    public function destroy(int $id)
    {
        return $this->model::destroy($id);
    }

    public function search($query)
    {
        $columns = [
            'id',
            'status',
            'client_id',
            'waybill',
            'comment',
            'total_price',
            'total_count',
            'created_at',
            'updated_at',
        ];

        $model = $this->model::select($columns);

        return $model->whereHas('client', function ($q) use ($query) {
            $q->where('phone', 'LIKE', "%$query%");
            $q->orWhere('name', 'LIKE', "%$query%");
            $q->orWhere('last_name', 'LIKE', "%$query%");
        })
            ->orWhere('id', $query)
            ->orWhere('waybill', $query)
            ->orWhere('comment', $query)
            ->with('client')
            ->paginate(15);
    }

    public function sumAllClientOrders($phone, $sale_price)
    {
        return $this
                ->model::where('phone', $phone)
                ->sum('sale_price') + $sale_price;
    }

    /**
     * Получить все номера телефонов из заказа.
     *
     * @return mixed
     */
    public function getAllPhones()
    {
        return $this->model::select('phone', 'created_at')->orderBy('created_at')->get();
    }

    public function massActions($data): bool
    {
        if (array_key_exists('action', $data)) {
            if ($data['action'] == MassActions::DESTROY) {
                foreach ($data['items'] as $key => $item) {
                    $this->model::destroy($item['id']);
                }
                return true;
            } elseif ($data['action'] == 'create_waybill') {
                if (array_key_exists('sender', $data)) {
                    $sender = $data['sender'];
                    foreach ($data['items'] as $key => $item) {
                        $model = $this->getById($item['id']);
                        if (!$model->waybill && $model->np_city_id && $model->np_post_office_id) {
                            $npService = new NovaPoshtaService;
                            $model->waybill = $npService->createWaybill($sender, $model);
                            $model->update();
                        }
                    }
                }
            }
        }

        return false;
    }

    public function updateSmsWaybillStatus($id)
    {
        return $this->model::where('id', $id)->update(['sms_waybill_status' => 1]);
    }

    public function updateOnAddOrderTotalPriceAndCount($id, $count, $price)
    {
        $model = $this->getById($id);
        $model->total_price += $price;
        $model->total_count += $count;
        $model->update();
        return $model;
    }

    public function updateOnDestroyOrderTotalPriceAndCount($id, $count, $price)
    {
        $model = $this->getById($id);
        $model->total_price -= $price;
        $model->total_count -= $count;
        $model->update();
        return $model;
    }

    public function updateOrderTotalPriceAndCount($order_id)
    {
        $orderItemsRepository = new OrderItemsRepository();
        $result = $orderItemsRepository->sumOrderTotalPriceAndCount($order_id);
        $model = $this->getById($order_id);
        $model->total_price = $result['total_price'];
        $model->total_count = $result['count'];
        return $model->update();
    }

    public function countOrdersByStatus($status = null, $date = null, $manager_id = null)
    {
        if ($manager_id && $date && $status) {
            return $this->model::whereDate('created_at', $date)
                ->where([
                    ['status', $status],
                    ['manager_id', $manager_id],
                ])->count();
        } elseif ($manager_id && $date) {
            return $this->model::whereDate('created_at', $date)
                ->where('manager_id', $manager_id)
                ->count();
        } elseif ($date && $status) {
            return $this->model::whereDate('created_at', $date)
                ->where('status', $status)->count();
        } elseif ($status && $manager_id) {
            return $this->model::where([
                ['status', $status],
                ['manager_id', $manager_id],
            ])->count();
        } elseif ($status) {
            return $this->model::where('status', $status)->count();
        } elseif ($date) {
            return $this->model::whereDate('created_at', $date)->count();
        } elseif ($manager_id) {
            return $this->model::whereDate('manager_id', $manager_id)->count();
        }
    }

    public function countWithParcelReminder($date, $manager_id = null)
    {
        if ($manager_id) {
            return $this->model::whereDate('created_at', $date)
                ->where([
                    ['status', '=', OrderStatus::STATUS_DONE],
                    ['manager_id', $manager_id],
                    ['parcel_reminder', 1],
                ])
                ->count();
        } else {
            return $this->model::whereDate('created_at', $date)
                ->where([
                    ['status', '!=', OrderStatus::STATUS_DONE],
                    ['parcel_reminder', 1],
                ])
                ->count();
        }
    }

    public function countWithoutParcelReminder($date, $manager_id = null)
    {
        if ($manager_id) {
            return $this->model::whereDate('created_at', $date)
                ->where([
                    ['status', '!=', OrderStatus::STATUS_CANCELED],
                    ['manager_id', $manager_id],
                    ['parcel_reminder', 0],
                ])
                ->count();
        } else {
            return $this->model::whereDate('created_at', $date)
                ->where([
                    ['status', '!=', OrderStatus::STATUS_CANCELED],
                    ['parcel_reminder', 0],
                ])
                ->count();
        }
    }

    public function sumIndefiniteApplications($date, $manager_id = null)
    {
        if ($manager_id) {
            return $this->model::whereDate('created_at', $date)
                ->where('manager_id', $manager_id)
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_PROCESSED);
                    $query->orWhere('status', OrderStatus::STATUS_AWAITING_PREPAYMENT);
                    $query->orWhere('status', OrderStatus::STATUS_NEW);
                })
                ->count();
        } else {
            return $this->model::whereDate('created_at', $date)
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_PROCESSED);
                    $query->orWhere('status', OrderStatus::STATUS_AWAITING_PREPAYMENT);
                    $query->orWhere('status', OrderStatus::STATUS_NEW);
                })
                ->count();
        }
    }

    public function sumApprovalApplications($date, $manager_id = null)
    {
        if ($manager_id) {
            return $this->model::whereDate('created_at', $date)
                ->where('manager_id', $manager_id)
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_DONE);
                    $query->orWhere('status', OrderStatus::STATUS_AWAITING_PREPAYMENT);
                    $query->orWhere('status', OrderStatus::STATUS_TRANSFERRED_TO_SUPPLIER);
                    $query->orWhere('status', OrderStatus::STATUS_RETURN);
                    $query->orWhere('status', OrderStatus::STATUS_AWAITING_DISPATCH);
                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
                })
                ->count();
        } else {
            return $this->model::whereDate('created_at', $date)
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_DONE);
                    $query->orWhere('status', OrderStatus::STATUS_AWAITING_PREPAYMENT);
                    $query->orWhere('status', OrderStatus::STATUS_TRANSFERRED_TO_SUPPLIER);
                    $query->orWhere('status', OrderStatus::STATUS_RETURN);
                    $query->orWhere('status', OrderStatus::STATUS_AWAITING_DISPATCH);
                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
                })
                ->count();
        }
    }

    public function countPrepaymentsByDateAndManagerId($date = null, $manager_id = null)
    {
        if ($manager_id and $date) {
            return $this->model::whereDate('created_at', $date)
                ->where([
                    ['prepayment_sum', '!=', null],
                    ['manager_id', $manager_id]
                ])
//                ->where(function ($query) {
//                    $query->where('status', OrderStatus::STATUS_DONE);
//                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
//                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
//                })
                ->count();
        } elseif ($date) {
            return $this->model::whereDate('created_at', $date)
                ->where('prepayment_sum', '!=', null)
//                ->where(function ($query) {
//                    $query->where('status', OrderStatus::STATUS_DONE);
//                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
//                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
//                })
                ->count();
        } elseif ($manager_id) {
            return $this->model::where([
                ['prepayment_sum', '!=', null],
                ['manager_id', $manager_id]
            ])
//                ->where(function ($query) {
//                    $query->where('status', OrderStatus::STATUS_DONE);
//                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
//                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
//                })
                ->count();
        } else {
            return $this->model::where('prepayment_sum', '!=', null)
//                ->where(function ($query) {
//                    $query->where('status', OrderStatus::STATUS_DONE);
//                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
//                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
//                })
                ->count();
        }
    }

    public function sumPrepaymentsByDateAndManagerId($date = null, $manager_id = null)
    {
        if ($manager_id and $date) {
            return $this->model::whereDate('created_at', $date)
                ->where([
                    ['prepayment', 1],
                    ['manager_id', $manager_id]
                ])
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_DONE);
                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
                })
                ->sum('prepayment_sum');
        } elseif ($date) {
            return $this->model::whereDate('created_at', $date)
                ->where('prepayment', 1)
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_DONE);
                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
                })
                ->sum('prepayment_sum');
        } elseif ($manager_id) {
            return $this->model::where('status', OrderStatus::STATUS_DONE)
                ->where([
                    ['prepayment', 1],
                    ['manager_id', $manager_id]
                ])
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_DONE);
                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
                })
                ->sum('prepayment_sum');
        } else {
            return $this->model::where('prepayment', 1)
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_DONE);
                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
                })
                ->sum('prepayment_sum');
        }
    }

    public function sumCountSalesOfAirMarginality($date = null, $manager_id = null)
    {
        if ($manager_id and $date) {
            return $this->model::whereDate('created_at', $date)
                ->where([
                    ['sale_of_air_price', '!=', null],
                    ['manager_id', $manager_id]
                ])
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_DONE);
                    $query->orWhere('status', OrderStatus::STATUS_TRANSFERRED_TO_SUPPLIER);
                    $query->orWhere('status', OrderStatus::STATUS_RETURN);
                    $query->orWhere('status', OrderStatus::STATUS_AWAITING_DISPATCH);
                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
                })
                ->count();
        } elseif ($date) {
            return $this->model::whereDate('created_at', $date)
                ->where('sale_of_air_price', '!=', null)
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_DONE);
                    $query->orWhere('status', OrderStatus::STATUS_TRANSFERRED_TO_SUPPLIER);
                    $query->orWhere('status', OrderStatus::STATUS_RETURN);
                    $query->orWhere('status', OrderStatus::STATUS_AWAITING_DISPATCH);
                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
                })
                ->count();
        } elseif ($manager_id) {
            return $this->model::where([
                ['sale_of_air_price', '!=', null],
                ['manager_id', $manager_id]
            ])
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_DONE);
                    $query->orWhere('status', OrderStatus::STATUS_TRANSFERRED_TO_SUPPLIER);
                    $query->orWhere('status', OrderStatus::STATUS_RETURN);
                    $query->orWhere('status', OrderStatus::STATUS_AWAITING_DISPATCH);
                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
                })
                ->count();
        } else {
            return $this->model::where('sale_of_air_price', '!=', null)
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_DONE);
                    $query->orWhere('status', OrderStatus::STATUS_TRANSFERRED_TO_SUPPLIER);
                    $query->orWhere('status', OrderStatus::STATUS_RETURN);
                    $query->orWhere('status', OrderStatus::STATUS_AWAITING_DISPATCH);
                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
                })
                ->count();
        }
    }

    public function sumPriceSalesOfAirMarginality($date = null, $manager_id = null)
    {
        if ($manager_id and $date) {
            return $this->model::whereDate('created_at', $date)
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_DONE);
                })->where([
                    ['sale_of_air_price', '>', 80],
                    ['manager_id', $manager_id]
                ])
                ->sum('sale_of_air_price');
        } elseif ($date) {
            return $this->model::whereDate('created_at', $date)
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_DONE);
                })->where([
                    ['sale_of_air_price', '>', 80]
                ])
                ->sum('sale_of_air_price');
        } elseif ($manager_id) {
            return $this->model::where([
                ['sale_of_air_price', '>', 80],
                ['manager_id', $manager_id]
            ])
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_DONE);
                    $query->orWhere('status', OrderStatus::STATUS_RETURN);
                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
                })
                ->sum('sale_of_air_price');
        } else {
            return $this->model::where(function ($query) {
                $query->where('status', OrderStatus::STATUS_DONE);
                $query->orWhere('status', OrderStatus::STATUS_RETURN);
                $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
                $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
            })
                ->where([
                    ['sale_of_air_price', '>', 80],
                ])
                ->sum('sale_of_air_price');
        }
    }

    public function sumDoneOrdersTotalPriceByDate($date)
    {
        return $this->model::whereDate('created_at', $date)
            ->select('status', 'total_price')
            ->where('status', OrderStatus::STATUS_DONE)
            ->sum('total_price');
    }

    public function averageCheckOfCompletedOrdersByDate($date)
    {
        return $this->model::whereDate('created_at', $date)
            ->select('status', 'total_price')
            ->where('status', OrderStatus::STATUS_DONE)
            ->average('total_price');
    }

    public function averageCountItemsCompletedOrdersByDate($date)
    {
        return $this->model::whereDate('created_at', $date)
            ->select('status', 'total_count')
            ->where('status', OrderStatus::STATUS_DONE)
            ->average('total_count');
    }

    public function sumPrepaymentByDate($date, $param = null)
    {
        return $this->model::whereDate('created_at', $date)
            ->select('prepayment_sum')
            ->sum('prepayment_sum');
    }

    public function sumDoneOrdersClearTotalPriceByDate($date)
    {
        return $this->model::whereDate('created_at', $date)
            ->where('status', OrderStatus::STATUS_DONE)
            ->select('clear_total_price')
            ->sum('clear_total_price');
    }

    public function averageMarginalityByDate($date)
    {
        return $this->model::whereDate('created_at', $date)
            ->where('status', OrderStatus::STATUS_DONE)
            ->select('clear_total_price')
            ->avg('clear_total_price');
    }

    public function countOrdersForDashboard(): array
    {
        $result = [];

        $result['Сьогодні'] = $this
            ->model::whereDate('created_at', Carbon::now()->format('Y-m-d'))
            ->count();

        $result['Вчора'] = $this
            ->model::whereDate('created_at', Carbon::yesterday()->format('Y-m-d'))
            ->count();

        $result['7 днів'] = $this
            ->model::whereBetween('created_at', [Carbon::now()->subDays(7)->format('Y-m-d'), Carbon::now()->endOfWeek()->format('Y-m-d')])
            ->count();

        $result['Поточний місяць'] = $this
            ->model::whereBetween('created_at', [Carbon::now()->startOfMonth()->format('Y-m-d'), Carbon::now()->endOfWeek()->format('Y-m-d')])
            ->count();

        return $result;
    }

    public function setPrepayment($data)
    {
        if ($data['transactionStatus'] == 'Approved') {
            $model = $this->getById($data['orderReference']);
            $model->wfp_payment_sum = $data['amount'];
            $model->update();
            return $this->sumPrepayment($model->id);
        } else {
            return 0;
        }
    }

    public function getStatus($data)
    {
        return $this
            ->model
            ->select(
                'id',
                'status',
                'city',
                'postal_office',
                'total_price',
                'client_id',
                'waybill',
                'prepayment_sum',
            )
            ->where('id', $data['order_id'])
            ->whereHas('client', function ($q) use ($data) {
                $q->where('phone', preg_replace('/[^0-9]/', '', $data['phone']));
            })
            ->with([
                'client' => function ($q) {
                    $q->select('id', 'name', 'last_name', 'phone');
                },
                'items' => function ($q) {
                    $q->select('color', 'size', 'count', 'id', 'order_id', 'product_id', 'total_price');
                    $q->with(['product' => function ($q) {
                        $q->select('id', 'h1', 'price', 'discount_price', 'preview_id');
                        $q->with('preview');
                    }]);
                }
            ])
            ->first();
    }

    final public function getAllRefunds(): Collection
    {
        return $this
            ->model::select([
                'id',
                'prepayment_sum',
                'total_price',
                'refund_other_waybill',
                'other_waybill',
                'created_at'
            ])
            ->where('status', OrderStatus::STATUS_RETURN)
            ->whereNotNull('waybill')
            ->whereHas('items.product')
            ->with('items.product')
            ->get();
    }

    final public function getTotalPriceByMonth(string $month): float
    {
        $startOfMonth = date('Y-m-01', strtotime($month));
        $endOfMonth = date('Y-m-t', strtotime($month));
        $orders = $this->model::where('status', OrderStatus::STATUS_DONE)
            ->whereBetween('created_at', [$startOfMonth, $endOfMonth])
            ->get();
        return $orders->sum('total_price');
    }

    final public function getTradeTotalPriceByMonth(string $month): float
    {
        $startOfMonth = date('Y-m-01', strtotime($month));
        $endOfMonth = date('Y-m-t', strtotime($month));
        $orders = $this->model::where('status', OrderStatus::STATUS_DONE)
            ->whereBetween('created_at', [$startOfMonth, $endOfMonth])
            ->get();

        $totalPrice = $orders->sum('total_price');
        $clearPrice = $orders->sum('clear_total_price');
        return $totalPrice - $clearPrice;
    }

}
