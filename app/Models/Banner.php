<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Banner extends Model
{
    protected $casts = [
        'title' => 'array',
        'link' => 'array',
        'image_mobile' => 'array',
        'image_table' => 'array',
        'image_desktop' => 'array',
    ];

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'category_banners', 'banner_id', 'category_id');
    }
}
