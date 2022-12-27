<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class CartItem extends Model
{
    protected $casts = [
        'color' => 'array',
        'size' => 'array',
    ];

    public function cart(): HasOne
    {
        return $this->hasOne(Cart::class, 'id', 'cart_id');
    }

    public function product(): HasOne
    {
        return $this->hasOne(Product::class, 'id', 'product_id')
            ->select('id', 'preview_id', 'h1', 'price', 'discount_price')
            ->with('preview');
    }
}
