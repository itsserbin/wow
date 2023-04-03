<?php

namespace App\Models\Statistics;

use App\Models\User;
use Eloquent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Carbon;


/**
 * App\Models\Statistics\Cost
 *
 * @property int $id
 * @property string $quantity
 * @property string $sum
 * @property string $total
 * @property string|null $comment
 * @property int|null $user_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $date
 * @property int|null $cost_category_id
 * @property-read CostCategory|null $category
 * @property-read User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder|Cost newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Cost newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Cost query()
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereComment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereCostCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereUserId($value)
 * @mixin Eloquent
 */
class Cost extends Model
{
    protected $dates = [
        'date',
        'created_at',
        'updated_at',
    ];


    final public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    final public function category(): HasOne
    {
        return $this->hasOne(CostCategory::class, 'id', 'cost_category_id');
    }
}
