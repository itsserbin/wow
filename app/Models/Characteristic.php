<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Characteristic extends Model
{
    /**
     * This code sets up an array of fields on the model that should be casted as arrays when being accessed or set on the model.
     * It specifies that the fields 'title', 'h1', 'description', 'content', and 'characteristics' should be casted as arrays.
     * This means that when these fields are accessed or set on the model, they will be automatically converted to arrays
     * if they are not already in that format. This can be useful for working with data that is stored in a serialized format
     * in the database, but needs to be used as an array in the application code.
     */
    protected $casts = [
        'title' => 'array'
    ];


    public function values()
    {
        return $this->hasMany(CharacteristicValue::class, 'characteristic_id', 'id');
    }
}
