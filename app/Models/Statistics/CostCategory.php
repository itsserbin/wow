<?php

namespace App\Models\Statistics;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Statistics\CostCategory
 *
 * @property int $id
 * @property string $title
 * @property string $slug
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $code
 * @method static \Illuminate\Database\Eloquent\Builder|CostCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CostCategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CostCategory query()
 * @method static \Illuminate\Database\Eloquent\Builder|CostCategory whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CostCategory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CostCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CostCategory whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CostCategory whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CostCategory whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class CostCategory extends Model
{
    use HasFactory;
}
