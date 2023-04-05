<?php

namespace App\Services;

use App\Repositories\OrdersRepository;
use App\Repositories\Statistics\RefundsRepository;

class RefundsStatisticsService
{
    private mixed $refundsRepository;
    private mixed $ordersRepository;

    public function __construct()
    {
        $this->refundsRepository = app(RefundsRepository::class);
        $this->ordersRepository = app(OrdersRepository::class);
    }

    final public function setData(): bool
    {
        $items = $this->ordersRepository->getAllRefunds();

        if (empty($items)) {
            return false;
        }

        foreach ($items as $item) {
            if (!$this->refundsRepository->getByOrderId($item->id)) {
                $trade_price = collect($item->items)->sum('trade_price');
                $waybill_sum = $item->prepayment_sum ? $item->total_price - $item->prepayment_sum : $item->total_price;
                $sum_provider_refund = $item->refund_other_waybill && $item->prepayment_sum ? $waybill_sum - $trade_price : 0;
                $sum_client_refund = $item->refund_other_waybill ? $item->total_price : ($item->prepayment_sum ?: 0);

                $this->refundsRepository->create([
                    'date' => $item->created_at,
                    'sum_provider_trade_price' => $trade_price,
                    'sum_order_price' => $waybill_sum,
                    'sum_provider_refund' => $sum_provider_refund,
                    'sum_client_refund' => $sum_client_refund,
                    'order_id' => $item->id,
                ]);
            }
        }
        return true;

    }
}
