<?php

namespace App\Models\Statistics;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Cost extends Model
{
    protected $dates = [
        'date',
        'created_at',
        'updated_at',
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function category(): HasOne
    {
        return $this->hasOne(CostCategory::class, 'id', 'cost_category_id');
    }
}
