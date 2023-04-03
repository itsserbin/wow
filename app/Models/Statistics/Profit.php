<?php

namespace App\Models\Statistics;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Statistics\Profit
 *
 * @property int $id
 * @property int|null $cost
 * @property int|null $clear_profit
 * @property int|null $turnover
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $date
 * @property int|null $refunds_sum
 * @property int|null $sale_of_air_sum
 * @property int|null $average_marginality
 * @property int|null $additional_sales_sum
 * @property int|null $prepayment_sum
 * @property int|null $marginality
 * @property int|null $additional_sales_marginality_sum
 * @property int|null $debt_supplier
 * @property int|null $prepayment_wfp_sum
 * @property int|null $prepayment_card_sum
 * @method static \Illuminate\Database\Eloquent\Builder|Profit newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Profit newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Profit query()
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereAdditionalSalesMarginalitySum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereAdditionalSalesSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereAverageMarginality($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereClearProfit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereDebtSupplier($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereMarginality($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit wherePrepaymentCardSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit wherePrepaymentSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit wherePrepaymentWfpSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereRefundsSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereSaleOfAirSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereTurnover($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Profit extends Model
{
    use HasFactory;
}
