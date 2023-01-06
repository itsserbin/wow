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
            ->model::with('items.product.provider', 'client.orders', 'manager', 'invoices','items.product.preview')
            ->find($id);
    }

    public function getAllWithPaginate($data): LengthAwarePaginator
    {
        $columns = [
            'id',
            'status',
            'waybill',
            'client_id',
            'comment',
            'total_count',
            'total_price',
            'updated_at',
            'created_at',
        ];

        $model = $this->model::select($columns);

        if (array_key_exists('status', $data)) {
            $model->where('status', $data['status']);
        }

        return $model->orderBy('id', 'desc')->with('client')->paginate(15);
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
//        $order->city = $data['city']['Description'] ?? null;
//        $order->np_city_id = $data['city']['Ref'] ?? null;
        $order->postal_office = $data['postal_office'] ?? null;
//        $order->postal_office = $data['postal_office']['Description'] ?? null;
//        $order->np_post_office_id = $data['postal_office']['Ref'] ?? null;
        $order->client_id = $client_id;
        $order->status = 'new';
        $order->promo_code = $promoCode;
        $order->comment = $data['comment'];
        $order->payment_method = $data['payment_method'];

        $totalPrice = 0;
        $totalCount = 0;
        $totalClearPrice = 0;

        foreach ($items as $item) {
            if ($item->product) {
                $totalPrice += ($item->product->discount_price ?: $item->product->price) * $item->count;
                $totalCount += $item->count;
                $totalClearPrice += (($item->product->discount_price ?: $item->product->price) - $item->product->trade_price) * $item->count;
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

        $order->total_count = $totalCount;
        $order->total_price = $totalPrice;
        $order->clear_total_price = $totalClearPrice;

        $order->save();

        return $order;
    }

    public function find(int $id)
    {
        return $this->model::where('id', $id)->with('items', 'items.product')->first();
    }

    /**
     * Обновить данные клиента.
     *
     * @param int $id
     * @param array $data
     * @return Builder|Builder[]|Collection|\Illuminate\Database\Eloquent\Model
     */
    public function update(int $id, array $data)
    {
        $model = $this->getById($id);
        $model->status = $data['status'];
        $model->comment = $data['comment'];
        $model->city = $data['city'];
        $model->waybill = $data['waybill'];
        $model->postal_office = $data['postal_office'];
        $model->manager_id = $data['manager_id'];
        $model->parcel_reminder = $data['parcel_reminder'];

        $model->sale_of_air = $data['sale_of_air'];

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
                if ($discount->discount_in_hryvnia) {
                    $totalPrice -= $discount->discount_in_hryvnia;
                } elseif ($discount->percent_discount) {
                    $totalPrice = $totalPrice * (100 - $discount->percent_discount) / 100;
                }
            } else {
                $totalPrice -= 100;
            }
        }

        if ($data['sale_of_air']) {
            $model->sale_of_air_price = $data['sale_of_air_price'];
            $model->total_price = $totalPrice + $data['sale_of_air_price'];
            $model->clear_total_price = $totalClearPrice + $data['sale_of_air_price'];

        } else {
            $model->sale_of_air_price = null;
            $model->total_price = $totalPrice;
            $model->clear_total_price = $totalClearPrice;
        }

//        $model->prepayment = $data['prepayment'];
//        if ($data['prepayment']) {
//            $model->prepayment_sum = $data['prepayment_sum'];
//        }

        $model->discount = $data['discount'];
        if ($data['discount']) {
            $model->discount_sum = $data['discount_sum'];
            $model->total_price -= $data['discount_sum'];
            $model->clear_total_price -= $data['discount_sum'];
        }

        $model->update();

        $this->clientsRepository->updateAvgAndWholeCheck($model->client_id);

        return $this->sumPrepayment($model->id);

    }

    public function sumPrepayment($order_id)
    {
        $model = $this->model::where('id', $order_id)->with('invoices')->first();

        $total = 0;

        if (count($model->invoices)) {
            foreach ($model->invoices as $invoice) {
                if ($invoice->status == InvoicesStatus::PAID_STATUS) {
                    $total += $invoice->sum;
                }
            }
        }

        if ($model->wfp_payment) {
            $total += $model->prepayment_sum;
        }

        if ($total) {
            $model->prepayment = 1;
            $model->prepayment_sum = $total;
            $model->update();
        }

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
                    ['prepayment', 1],
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
                ->where('prepayment', 1)
//                ->where(function ($query) {
//                    $query->where('status', OrderStatus::STATUS_DONE);
//                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
//                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
//                })
                ->count();
        } elseif ($manager_id) {
            return $this->model::where([
                ['prepayment', 1],
                ['manager_id', $manager_id]
            ])
//                ->where(function ($query) {
//                    $query->where('status', OrderStatus::STATUS_DONE);
//                    $query->orWhere('status', OrderStatus::STATUS_ON_THE_ROAD);
//                    $query->orWhere('status', OrderStatus::STATUS_AT_THE_POST_OFFICE);
//                })
                ->count();
        } else {
            return $this->model::where('prepayment', 1)
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
                    ['sale_of_air', 1],
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
                ->where('sale_of_air', 1)
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
                ['sale_of_air', 1],
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
            return $this->model::where('sale_of_air', 1)
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
                    ['sale_of_air', 1],
                    ['sale_of_air_price', '>', 80],
                    ['manager_id', $manager_id]
                ])
                ->sum('sale_of_air_price');
        } elseif ($date) {
            return $this->model::whereDate('created_at', $date)
                ->where(function ($query) {
                    $query->where('status', OrderStatus::STATUS_DONE);
                })->where([
                    ['sale_of_air', 1],
                    ['sale_of_air_price', '>', 80]
                ])
                ->sum('sale_of_air_price');
        } elseif ($manager_id) {
            return $this->model::where([
                ['sale_of_air', 1],
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
                    ['sale_of_air', 1],
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
        $model = $this->model::whereDate('created_at', $date)
            ->select('prepayment', 'prepayment_sum', 'wfp_payment')
            ->where('prepayment', 1);

        if ($param == 'wfp') {
            $model->where('wfp_payment', 1);
        } elseif ($param == 'card') {
            $model->where('wfp_payment', 0);
        }

        return $model->sum('prepayment_sum');
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
            $model->prepayment = 1;
            $model->wfp_payment = 1;
            $model->prepayment_sum = $data['amount'];
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
                'prepayment',
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
                        $q->select('id', 'h1', 'price', 'discount_price', 'preview');
                    }]);
                }
            ])
            ->first();
    }
}
