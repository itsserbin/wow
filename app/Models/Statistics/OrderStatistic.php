<?php

namespace App\Models\Statistics;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Statistics\OrderStatistic
 *
 * @property int $id
 * @property string $date
 * @property int|null $applications
 * @property int|null $unprocessed
 * @property int|null $completed
 * @property int|null $refunds
 * @property int|null $cancel
 * @property int|null $at_the_post_office
 * @property int|null $in_process
 * @property int|null $transferred_to_supplier
 * @property int|null $awaiting_dispatch
 * @property int|null $awaiting_prepayment
 * @property int|null $on_the_road
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $canceled_orders_rate
 * @property int|null $received_parcel_ratio
 * @property int|null $returned_orders_ratio
 * @property int|null $requires_clarification
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic query()
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereApplications($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereAtThePostOffice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereAwaitingDispatch($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereAwaitingPrepayment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereCancel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereCanceledOrdersRate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereCompleted($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereInProcess($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereOnTheRoad($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereReceivedParcelRatio($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereRefunds($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereRequiresClarification($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereReturnedOrdersRatio($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereTransferredToSupplier($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereUnprocessed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrderStatistic whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class OrderStatistic extends Model
{
    use HasFactory;
}
