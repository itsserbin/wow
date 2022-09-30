<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Color extends Model
{
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'product_sizes', 'color_id', 'product_id');
    }
}
