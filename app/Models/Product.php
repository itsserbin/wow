<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

/**
 * App\Models\Product
 *
 * @property int $id
 * @property string $status
 * @property array|null $title
 * @property array|null $description
 * @property array|null $h1
 * @property array|null $content
 * @property array|null $characteristics
 * @property int|null $price
 * @property int|null $discount_price
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $published
 * @property int|null $trade_price
 * @property string|null $vendor_code
 * @property int|null $total_sales
 * @property string|null $size_table
 * @property int|null $viewed
 * @property int|null $provider_id
 * @property int|null $sort
 * @property int|null $returns
 * @property int|null $exchange
 * @property string|null $youtube
 * @property int|null $preview_id
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Category> $categories
 * @property-read int|null $categories_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\CharacteristicValue> $characteristicsNew
 * @property-read int|null $characteristics_new_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Color> $colors
 * @property-read int|null $colors_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Image> $images
 * @property-read int|null $images_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\OrderItem> $orderItems
 * @property-read int|null $order_items_count
 * @property-read \App\Models\Image|null $preview
 * @property-read \App\Models\Provider|null $provider
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ProductReview> $reviews
 * @property-read int|null $reviews_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Size> $sizes
 * @property-read int|null $sizes_count
 * @method static \Illuminate\Database\Eloquent\Builder|Product newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Product newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Product query()
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereCharacteristics($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereDiscountPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereExchange($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereH1($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product wherePreviewId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereProviderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product wherePublished($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereReturns($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereSizeTable($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereSort($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereTotalSales($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereTradePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereVendorCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereViewed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereYoutube($value)
 * @mixin \Eloquent
 */
class Product extends Model
{
    /**
     * This code defines an array of fields that are allowed to be mass-assigned when creating or updating a Product model.
     * The fields listed in this $fillable array are the only ones that will be saved to the database when using
     * the create or update method on the model. This is a security feature to prevent malicious users
     * from injecting unwanted data into the database.
     */
    protected $fillable = [
        'id',
        'published',
        'status',
        'h1',
        'title',
        'description',
        'content',
        'characteristics',
        'size_table',
        'price',
        'discount_price',
        'provider_id',
        'trade_price',
        'vendor_code',
        'preview_id',
        'youtube',
    ];

    /**
     * This code defines an array of dates that should be cast as Carbon instances when returned from the database.
     * The created_at and updated_at properties of the model will automatically be converted to instances of the Carbon class
     * when queried from the database. This allows for more convenient date manipulation and formatting in the application.
     */
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    /**
     * This code sets up an array of fields on the model that should be casted as arrays when being accessed or set on the model.
     * It specifies that the fields 'title', 'h1', 'description', 'content', and 'characteristics' should be casted as arrays.
     * This means that when these fields are accessed or set on the model, they will be automatically converted to arrays
     * if they are not already in that format. This can be useful for working with data that is stored in a serialized format
     * in the database, but needs to be used as an array in the application code.
     */
    protected $casts = [
        'title' => 'array',
        'h1' => 'array',
        'description' => 'array',
        'content' => 'array',
        'characteristics' => 'array',
    ];

    /**
     * This function creates a relationship between the Product model and the Provider model using the Eloquent ORM.
     * The function specifies that the Product model belongs to a Provider model using the 'provider_id' foreign key.
     * This relationship allows us to retrieve the Provider associated with a
     * specific Product by calling the 'provider' function on an instance of the Product model.
     *
     * @return BelongsTo relationship
     */
    public function provider(): BelongsTo
    {
        return $this->belongsTo(Provider::class, 'provider_id');
    }

    /**
     * The categories() function returns a morphToMany relationship between the Product model and the Category model.
     * This relationship allows the Product model to belong to multiple categories through the categoryables table.
     * The 'categoryables' table is used as a pivot table to store the relationship between the Product model and the Category model.
     *
     * @return MorphToMany relationship
     */
    public function categories(): MorphToMany
    {
        return $this->morphToMany(Category::class, 'categoryables',);
    }

    /**
     * Define a many-to-many relationship between Product and Color models.
     * product_colors table is used as a pivot table with 'product_id' and 'color_id' as foreign keys.
     *
     * @return BelongsToMany relationship
     */
    public function colors(): BelongsToMany
    {
        return $this->belongsToMany(Color::class, 'product_colors', 'product_id', 'color_id');
    }

    /**
     * This function creates a relationship between the Product model and the Size model.
     * It uses the Eloquent ORM's BelongsToMany method, specifying that a product can have multiple sizes,
     * and a size can belong to multiple products.
     * The relationship is defined by the pivot table 'product_sizes', with the foreign key 'product_id'
     * linking to the 'id' column of the Product model, and the foreign key 'size_id' linking to the 'id' column of the Size model.
     *
     * @return BelongsToMany relationship
     */
    public function sizes(): BelongsToMany
    {
        return $this->belongsToMany(Size::class, 'product_sizes', 'product_id', 'size_id');
    }

    /**
     * This function is used to define a one-to-many relationship between the Product model and the ProductReview model.
     * The Product model is the parent of the relationship and the ProductReview model is the child.
     * The 'product_id' column in the ProductReview model is used to connect the two models.
     *
     * @return HasMany relationship
     */
    public function reviews(): HasMany
    {
        return $this->hasMany(ProductReview::class, 'product_id');
    }

    /**
     * Define a many-to-many relationship with the Image model.
     * This relationship represents the images that are associated with a product.
     * The pivot table used for this relationship is 'product_images'.
     * The foreign key on the product_images table for the product model is 'product_id'.
     * The foreign key on the product_images table for the image model is 'image_id'.
     *
     * @return BelongsToMany relationship
     */
    public function images(): BelongsToMany
    {
        return $this->belongsToMany(Image::class, 'product_images', 'product_id', 'image_id');
    }

    /**
     * This function returns a HasMany relationship with the OrderItem model.
     * It specifies that a product has many order items and the foreign key on the order_items table is 'product_id'.
     * This allows us to easily retrieve all the order items associated with a specific product.
     *
     * @return HasMany relationship
     */
    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class, 'product_id');
    }

    /**
     * Define the relationship between the Product model and the Image model.
     * The Product model belongs to an Image model.
     * This relationship is defined by the "preview_id" column on the products table and the id column on the images table.
     *
     * @return BelongsTo relationship
     */
    public function preview(): BelongsTo
    {
        return $this->belongsTo(Image::class, 'preview_id');
    }

    public function characteristicsNew(): BelongsToMany
    {
        return $this->belongsToMany(CharacteristicValue::class, 'product_characteristics', 'product_id', 'characteristic_id');
    }
}
