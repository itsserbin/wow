<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Category extends Model
{
    protected $casts = [
        'title' => 'array',
        'meta_title' => 'array',
        'meta_description' => 'array',
        'meta_keyword' => 'array',
        'seo_text' => 'array',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
    ];

    /**
     * @return HasMany
     */
    public function children(): HasMany
    {
        return $this->hasMany(self::class, 'parent_id');
    }

    /**
     * @return MorphToMany
     */
    public function products(): MorphToMany
    {
        return $this->morphedbyMany(Product::class, 'categoryables');
    }

}
