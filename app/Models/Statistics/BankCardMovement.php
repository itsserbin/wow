<?php

namespace App\Models\Statistics;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class BankCardMovement extends Model
{
    protected $fillable = [
        'date',
        'sum',
        'balance',
        'category_id',
        'comment',
        'movement_id',
    ];

    final public function category(): HasOne
    {
        return $this->hasOne(CostCategory::class, 'id', 'category_id');
    }
}
