<?php

namespace App\Models\Statistics;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Statistics\CostCategory
 *
 * @property int $id
 * @property string $title
 * @property string $slug
 * @property boolean $type
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $code
 * @method static \Illuminate\Database\Eloquent\Builder|CostAndProfitCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CostAndProfitCategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CostAndProfitCategory query()
 * @method static \Illuminate\Database\Eloquent\Builder|CostAndProfitCategory whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CostAndProfitCategory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CostAndProfitCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CostAndProfitCategory whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CostAndProfitCategory whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CostAndProfitCategory whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class CostAndProfitCategory extends Model
{
}
