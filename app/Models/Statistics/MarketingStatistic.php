<?php

namespace App\Models\Statistics;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Statistics\MarketingStatistic
 *
 * @property int $id
 * @property string $date
 * @property int|null $average_application_price
 * @property int|null $average_approve_application_price
 * @property int|null $average_done_application_price
 * @property int|null $average_check
 * @property int|null $average_marginality
 * @property int|null $average_items
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|MarketingStatistic newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MarketingStatistic newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MarketingStatistic query()
 * @method static \Illuminate\Database\Eloquent\Builder|MarketingStatistic whereAverageApplicationPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MarketingStatistic whereAverageApproveApplicationPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MarketingStatistic whereAverageCheck($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MarketingStatistic whereAverageDoneApplicationPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MarketingStatistic whereAverageItems($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MarketingStatistic whereAverageMarginality($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MarketingStatistic whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MarketingStatistic whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MarketingStatistic whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MarketingStatistic whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class MarketingStatistic extends Model
{
    use HasFactory;
}
