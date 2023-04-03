<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * App\Models\OrderItem
 *
 * @property int $id
 * @property int $order_id
 * @property int $product_id
 * @property int|null $provider_id
 * @property array|null $size
 * @property array|null $color
 * @property int|null $trade_price
 * @property int|null $sale_price
 * @property int|null $profit
 * @property int|null $pay
 * @property int $count
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $resale
 * @property int|null $discount
 * @property int $total_price
 * @property int $clear_total_price
 * @property-read \App\Models\Order $order
 * @property-read \App\Models\Product|null $product
 * @property-read \App\Models\Provider|null $provider
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem query()
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereClearTotalPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereDiscount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereOrderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem wherePay($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereProfit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereProviderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereResale($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereSalePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereSize($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereTotalPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereTradePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderItem whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class OrderItem extends Model
{
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'color' => 'array',
        'size' => 'array',
    ];

    public function product(): HasOne
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }

    public function provider(): HasOne
    {
        return $this->hasOne(Provider::class, 'id', 'provider_id');
    }

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class, 'order_id');
    }
}
