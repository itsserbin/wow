<?php

namespace App\Repositories;

use App\Models\CartItem;
use App\Models\Enums\OrderStatus;
use App\Models\OrderItem as Model;
use App\Repositories\ProductRepository;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class OrderItemsRepository extends CoreRepository
{
    private $promoCodesRepository;

    private $productRepository;

    private $ordersRepository;

    public function __construct()
    {
        parent::__construct();
        $this->promoCodesRepository = app(PromoCodesRepository::class);
        $this->productRepository = app(ProductsRepository::class);
        $this->ordersRepository = app(OrdersRepository::class);
    }

    /**
     * @return string
     */
    protected function getModelClass()
    {
        return Model::class;
    }

    /**
     * @param $cartItems
     * @param $orderId
     * @return bool
     */
    public function create($cartItems, $orderId, $promoCode)
    {
        foreach ($cartItems as $item) {
            $product = $this->productRepository->getById($item->product_id);

            $orderItem = new $this->model;
            $orderItem->order_id = $orderId;
            $orderItem->product_id = $product->id;
            $orderItem->count = $item->count;
            $orderItem->size = $item->size;
            $orderItem->color = $item->color;
            $orderItem->trade_price = $product->trade_price;
            $orderItem->sale_price = $product->discount_price ?: $product->price;
            $orderItem->pay = false;
            $orderItem->provider_id = $product->provider?->id;

            if ($promoCode) {
                $discount = $this->promoCodesRepository->getDiscount($promoCode);

                if ($discount->discount_in_hryvnia) {
                    $orderItem->sale_price -= $discount->discount_in_hryvnia;
                } elseif ($discount->percent_discount) {
                    $orderItem->sale_price = $orderItem->sale_price * (100 - $discount->percent_discount) / 100;
                }
            }
            $orderItem->profit = $orderItem->sale_price - $product->trade_price;
            $orderItem->total_price = $orderItem->sale_price * $orderItem->count;
            $orderItem->clear_total_price = $orderItem->total_price - $orderItem->sale_price;

            $orderItem->save();
        }

        return true;
    }

    /**
     * Получить элемент заказа по ID.
     *
     * @param $id
     * @return mixed
     */
    public function getById($id)
    {
        return $this->model::where('id', $id)
            ->first();
    }

    /**
     * Получить элемент заказа по ID заказа.
     *
     * @param $id
     * @return Builder[]|Collection
     */
    public function getByOrderId($id)
    {
        return $this->model::with('product.provider')
            ->where('order_id', $id)
            ->get();
    }

    /**
     * Удаление товара в заказе.
     *
     * @param $id
     * @return int
     */
    public function destroy($item_id, $order_id)
    {
        $model = $this->getById($item_id);
        $this->ordersRepository->updateOnDestroyOrderTotalPriceAndCount($order_id, $model->count, $model->total_price);

        return $this->model::destroy($item_id);
    }

    /**
     * Обновить информацию о элементе заказа.
     *
     * @param $id
     * @param $data
     * @return mixed
     */
    public function update($id, $data)
    {
        $model = $this->getById($id);
        $model->count = $data['count'];
        $model->size = $data['size'];
        $model->color = $data['color'];
        $model->total_price = $data['count'] * $model->sale_price;
        $model->update();

        $this->ordersRepository->updateOrderTotalPriceAndCount($model->order_id);
        return $model;

    }

    public function sumOrderTotalPriceAndCount($order_id)
    {
        $model = $this->model::where('order_id', $order_id)->get();

        return [
            'total_price' => $model->sum('total_price'),
            'count' => $model->sum('count'),
        ];
    }

    public function addItemToOrder($id, $data)
    {
        $product = $this->productRepository->getById($data['product_id']['id']);

        $orderItem = new $this->model;
        $orderItem->order_id = $id;
        $orderItem->product_id = $product->id;
        $orderItem->count = $data['count'];
        $orderItem->size = $data['size'] ?? null;
        $orderItem->color = $data['color'] ?? null;
        $orderItem->pay = false;
        $orderItem->provider_id = $product->Providers?->id;

        $orderItem->trade_price = $product->trade_price;
        $orderItem->sale_price = ($product->discount_price ?: $product->price);

        if (isset($data['resale'])) {
            $orderItem->resale = $data['resale'];
            $orderItem->discount = $data['discount'];
            $orderItem->total_price = $orderItem->sale_price * (int)$data['count'] - $data['discount'];
        } else {
            $orderItem->total_price = $orderItem->sale_price * (int)$data['count'];
        }
        $this->ordersRepository->updateOnAddOrderTotalPriceAndCount($id, $data['count'], $orderItem->total_price);
        $orderItem->profit = $orderItem->sale_price - $product->trade_price;
        $orderItem->clear_total_price = $orderItem->total_price - $orderItem->trade_price;

        $orderItem->save();

        return $orderItem;
    }

    public function addSpecialItemToOrder($id, $item)
    {
        $product = $this->productRepository->getById($item['id']);

        $orderItem = new $this->model;
        $orderItem->order_id = $id;
        $orderItem->product_id = $item['id'];
        $orderItem->count = 1;
        $orderItem->size = null;
        $orderItem->color = null;
        $orderItem->pay = false;
        $orderItem->provider_id = $product->Providers?->id;

        $orderItem->trade_price = $product->trade_price;
        $orderItem->sale_price = $item['price'];

        $orderItem->total_price = $orderItem->sale_price * $orderItem->count;

        $this->ordersRepository->updateOnAddOrderTotalPriceAndCount($id, $orderItem->count, $orderItem->total_price);
        $orderItem->profit = $orderItem->sale_price - $product->trade_price;
        $orderItem->clear_total_price = $orderItem->total_price - $orderItem->trade_price;

        $orderItem->save();

        return $orderItem;
    }

    public function countAdditionalSales($date = null, $manager_id = null)
    {
        if ($manager_id and $date) {
            return $this->model::whereDate('created_at', $date)
                ->where('resale', 1)
                ->whereHas('order', function ($q) use ($manager_id) {
                    $q->where('status', OrderStatus::STATUS_DONE);
                    $q->where('manager_id', $manager_id);
                })
                ->count();
        } elseif ($manager_id) {
            return $this->model::whereHas('order', function ($q) use ($manager_id) {
                $q->where('manager_id', $manager_id);
                $q->where('status', OrderStatus::STATUS_DONE);
            })->count();
        } elseif ($date) {
            return $this->model::whereDate('created_at', $date)
                ->whereHas('order', function ($q) use ($manager_id) {
                    $q->where('status', OrderStatus::STATUS_DONE);
                })
                ->where('resale', 1)
                ->count();
        } else {
            return $this->model::where('resale', 1)
                ->whereHas('order', function ($q) use ($manager_id) {
                    $q->where('status', OrderStatus::STATUS_DONE);
                })->count();
        }

    }

    public function sumAdditionalSalesMarginality($date = null, $manager_id = null)
    {
        if ($manager_id and $date) {
            return $this->model::whereDate('created_at', $date)
                ->where('resale', 1)
                ->whereHas('order', function ($q) use ($manager_id) {
                    $q->where('status', OrderStatus::STATUS_DONE);
                    $q->where('manager_id', $manager_id);
                })
                ->sum('profit');
        } elseif ($date) {
            return $this->model::whereDate('created_at', $date)
                ->whereHas('order', function ($q) use ($manager_id) {
                    $q->where('status', OrderStatus::STATUS_DONE);
                })
                ->where('resale', 1)
                ->sum('profit');
        } elseif ($manager_id) {
            return $this->model::where('resale', 1)
                ->whereHas('order', function ($q) use ($manager_id) {
                    $q->where('status', OrderStatus::STATUS_DONE);
                    $q->where('manager_id', $manager_id);
                })
                ->sum('profit');
        } else {
            return $this->model::where('resale', 1)
                ->whereHas('order', function ($q) use ($manager_id) {
                    $q->where('status', OrderStatus::STATUS_DONE);
                    $q->where('manager_id', null);
                })
                ->sum('profit');
        }
    }

    public function sumOrderTotalPriceById($id)
    {
//        $model = $this->model::where('order_id', $id)->get();
//        $sum = $model->sum('total_price');
//        $additional_sales = 0;
//        foreach ($model as $item) {
//            if ($item->resale) {
//                $additional_sales += $item->discount;
//            }
//        }
//        return $sum - $additional_sales;

        return $this->model::where('order_id', $id)->sum('total_price');
    }

    public function sumProfitByDate($date)
    {
        return $this->model::whereDate('created_at', $date)
            ->select('total_price', 'order_id')
            ->with('order')
            ->whereHas('order', function ($q) {
                $q->where('status', OrderStatus::STATUS_DONE);
            })
            ->sum('total_price');
    }

    public function sumMarginalityByDate($date)
    {
        return $this->model::whereDate('created_at', $date)
            ->select('clear_total_price', 'order_id')
            ->with('order')
            ->whereHas('order', function ($q) {
                $q->where('status', OrderStatus::STATUS_DONE);
            })
            ->sum('clear_total_price');
    }

    public function averageMarginalityByDate($date)
    {
        return $this->model::whereDate('created_at', $date)
            ->select('clear_total_price', 'order_id')
            ->with('order')
            ->whereHas('order', function ($q) {
                $q->where('status', OrderStatus::STATUS_DONE);
            })
            ->avg('clear_total_price');
    }

    public function sumRefundsByDate($date)
    {
        $model = $this->model::whereDate('created_at', $date)
            ->whereHas('order', function ($q) {
                $q->where('status', OrderStatus::STATUS_RETURN);
            })
            ->select('product_id')
            ->with(['product' => function ($q) {
                $q->select('id', 'provider_id');
                $q->with(['provider' => function ($q) {
                    $q->select('id', 'refunds', 'refunds_sum');
                }]);
            }])
            ->get();

//        $refundsSum = 0;
//
//        foreach ($model as $item) {
//            if ($item->product->provider) {
//                if ($item->product->provider->refunds) {
//                    $refundsSum += $item->product->provider->refunds_sum;
//                }
//            }
//
//        }

        return $model->sum(function($item) {
            return $item->product->provider->refunds ? $item->product->provider->refunds_sum : 0 ;
        });
    }

    public function sumMarginalityAdditionalSalesByDate($date)
    {
        return $this->model::whereDate('created_at', $date)
            ->whereHas('order', function ($q) {
                $q->where('status', OrderStatus::STATUS_DONE);
            })
            ->select('resale', 'discount', 'clear_total_price')
            ->where('resale', 1)
            ->sum('clear_total_price');
    }

    /**
     * This code is a function that calculates the sum of all additional sales that were made on a specific date.
     * The function starts by querying the orders table using the whereDate() method to filter the results
     * based on the date passed as a parameter. It then uses the whereHas() method to filter the results
     * based on the status of the order being equal to OrderStatus::STATUS_DONE.
     * It then uses the select() method to select specific columns from the table and uses the where()
     * method to filter the results based on the resale column being equal to 1. Finally, it uses the sum()
     * method to calculate the sum of all the total_price values that match the previous filters.
     *
     * @param $date
     * @return mixed
     */
    public function sumAdditionalSalesByDate($date)
    {
        return $this->model::whereDate('created_at', $date)
            ->whereHas('order', function ($q) {
                $q->where('status', OrderStatus::STATUS_DONE);
            })
            ->select('resale', 'discount', 'clear_total_price')
            ->where('resale', 1)
            ->sum('total_price');
    }
}
