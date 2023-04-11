<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * App\Models\Banner
 *
 * @property int $id
 * @property int $published
 * @property array|null $title
 * @property array|null $link
 * @property int|null $sort
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property array|null $image_mobile
 * @property array|null $image_table
 * @property array|null $image_desktop
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Category> $categories
 * @property-read int|null $categories_count
 * @method static \Illuminate\Database\Eloquent\Builder|Banner newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Banner newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Banner query()
 * @method static \Illuminate\Database\Eloquent\Builder|Banner whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Banner whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Banner whereImageDesktop($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Banner whereImageMobile($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Banner whereImageTable($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Banner whereLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Banner wherePublished($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Banner whereSort($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Banner whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Banner whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Banner extends Model
{
    protected $fillable = [
        'title',
        'link',
        'image_mobile',
        'image_table',
        'image_desktop',
        'published',
    ];

    protected $casts = [
        'title' => 'array',
        'link' => 'array',
        'image_mobile' => 'array',
        'image_table' => 'array',
        'image_desktop' => 'array',
    ];

    final public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'category_banners', 'banner_id', 'category_id');
    }
}
