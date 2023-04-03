<?php

namespace App\Models\Statistics;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Statistics\ManagerSalary
 *
 * @property int $id
 * @property string $date
 * @property int|null $manager_id
 * @property int|null $count_applications
 * @property int|null $count_additional_sales
 * @property int|null $canceled_applications
 * @property int|null $done_applications
 * @property int|null $returned_applications
 * @property int|null $total_applications
 * @property int|null $in_process_applications
 * @property int|null $sum_additional_sales
 * @property int|null $sum_price_applications
 * @property int|null $sum_price_additional_sales
 * @property int|null $count_sale_of_air
 * @property int|null $price_sale_of_air
 * @property int|null $total_sale_of_air
 * @property int|null $total_price
 * @property int|null $count_prepayments
 * @property int|null $prepayments_amount
 * @property int|null $count_parcel_reminder
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary query()
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereCanceledApplications($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereCountAdditionalSales($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereCountApplications($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereCountParcelReminder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereCountPrepayments($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereCountSaleOfAir($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereDoneApplications($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereInProcessApplications($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereManagerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary wherePrepaymentsAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary wherePriceSaleOfAir($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereReturnedApplications($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereSumAdditionalSales($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereSumPriceAdditionalSales($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereSumPriceApplications($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereTotalApplications($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereTotalPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereTotalSaleOfAir($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ManagerSalary whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ManagerSalary extends Model
{
    use HasFactory;
}
