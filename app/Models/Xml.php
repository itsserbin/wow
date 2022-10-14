<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Xml extends Model
{
    protected $casts = [
        'products' => 'array',
    ];
}
