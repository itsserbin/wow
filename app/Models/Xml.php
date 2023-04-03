<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Xml
 *
 * @property int $id
 * @property string $slug
 * @property string $title
 * @property string $description
 * @property string $category
 * @property array|null $products
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Xml newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Xml newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Xml query()
 * @method static \Illuminate\Database\Eloquent\Builder|Xml whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Xml whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Xml whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Xml whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Xml whereProducts($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Xml whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Xml whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Xml whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Xml extends Model
{
    protected $casts = [
        'products' => 'array',
    ];
}
