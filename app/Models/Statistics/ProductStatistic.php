<?php

namespace App\Models\Statistics;

use App\Models\Product;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Statistics\ProductStatistic
 *
 * @property int $id
 * @property string $date
 * @property int $total
 * @property int $sales
 * @property int $returns
 * @property int $exchanges
 * @property int $canceled
 * @property int $conversion_rate
 * @property int $cancellation_rate
 * @property int $return_rate
 * @property int $exchanges_rate
 * @property int|null $product_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read Product|null $product
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic whereCanceled($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic whereCancellationRate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic whereConversionRate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic whereExchanges($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic whereExchangesRate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic whereReturnRate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic whereReturns($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic whereSales($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic whereTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProductStatistic whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ProductStatistic extends Model
{
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
