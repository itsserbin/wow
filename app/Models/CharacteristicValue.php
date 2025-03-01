<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * App\Models\CharacteristicValue
 *
 * @property int $id
 * @property int|null $characteristic_id
 * @property array $title
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Characteristic|null $characteristic
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Product> $products
 * @property-read int|null $products_count
 * @method static \Illuminate\Database\Eloquent\Builder|CharacteristicValue newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CharacteristicValue newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CharacteristicValue query()
 * @method static \Illuminate\Database\Eloquent\Builder|CharacteristicValue whereCharacteristicId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CharacteristicValue whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CharacteristicValue whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CharacteristicValue whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CharacteristicValue whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class CharacteristicValue extends Model
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

    public function characteristic(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Characteristic::class, 'id', 'characteristic_id');
    }

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'product_characteristics', 'characteristic_id', 'product_id');
    }
}
