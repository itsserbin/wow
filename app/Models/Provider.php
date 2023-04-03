<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Provider
 *
 * @property int $id
 * @property string $name
 * @property string|null $catalog
 * @property string|null $availability
 * @property string $refunds_sum
 * @property int $prepayment
 * @property string|null $time_of_dispatch
 * @property string|null $comment
 * @property string|null $contacts
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $prepayment_sum
 * @property int $refunds
 * @method static \Illuminate\Database\Eloquent\Builder|Provider newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Provider newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Provider query()
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereAvailability($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereCatalog($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereComment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereContacts($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider wherePrepayment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider wherePrepaymentSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereRefunds($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereRefundsSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereTimeOfDispatch($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provider whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Provider extends Model
{
    protected $dates = [
        'created_at',
        'updated_at',
    ];
}
