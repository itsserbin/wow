<?php

namespace App\Models\Statistics;

use App\Models\Order;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Refund extends Model
{
    protected $fillable = [
        'date',
        'sum_provider_trade_price',
        'sum_order_price',
        'sum_provider_refund',
        'sum_client_refund',
        'order_id',
    ];

    final public function order(): HasOne
    {
        return $this->hasOne(Order::class, 'order_id');
    }
}
