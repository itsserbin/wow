<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Order
 *
 * @property int $id
 * @property string $status
 * @property string|null $city
 * @property string|null $waybill
 * @property string|null $comment
 * @property int|null $client_id
 * @property string|null $modified_by
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $postal_office
 * @property int $total_count
 * @property int $total_price
 * @property int $sms_waybill_status
 * @property string|null $promo_code
 * @property int|null $manager_id
 * @property int $parcel_reminder
 * @property int $sale_of_air
 * @property int|null $sale_of_air_price
 * @property int|null $prepayment_sum
 * @property int|null $clear_total_price
 * @property string|null $payment_method
 * @property string|null $np_city_id
 * @property string|null $np_post_office_id
 * @property int $discount
 * @property int|null $discount_sum
 * @property int|null $wfp_payment_sum
 * @property-read \App\Models\Client|null $client
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Invoice> $invoices
 * @property-read int|null $invoices_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\OrderItem> $items
 * @property-read int|null $items_count
 * @property-read \App\Models\User|null $manager
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder|Order newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Order newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Order query()
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereClearTotalPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereComment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereDiscount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereDiscountSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereManagerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereModifiedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereNpCityId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereNpPostOfficeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereParcelReminder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order wherePaymentMethod($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order wherePostalOffice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order wherePrepaymentSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order wherePromoCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereSaleOfAir($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereSaleOfAirPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereSmsWaybillStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereTotalCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereTotalPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereWaybill($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereWfpPaymentSum($value)
 * @mixin \Eloquent
 */
class Order extends Model
{
    /**
     * This code defines an array of fields that are allowed to be mass-assigned when creating or updating a Product model.
     * The fields listed in this $fillable array are the only ones that will be saved to the database when using
     * the create or update method on the model. This is a security feature to prevent malicious users
     * from injecting unwanted data into the database.
     */
    protected $fillable = [
        'client_id',
        'prepayment_sum',
        'sale_of_air',
        'sale_of_air_price',
        'status',
        'comment',
        'city',
        'waybill',
        'postal_office',
        'manager_id',
        'parcel_reminder',
        'discount',
        'discount_sum',
        'total_count',
        'total_price',
        'clear_total_price',
        'payment_method'
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
     * This code defines a relationship between the current model and the User model.
     * It specifies that the current model has a "belongs to" relationship with the User model.
     * The "user_id" column in the current model's table is used to connect to the "id" column of the User model's table.
     * The user() method returns an instance of BelongsTo, which is an Eloquent relationship.
     * This relationship allows us to retrieve the user associated with the current model by calling $model->user.
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * This method creates a one-to-many relationship between the Order model and the OrderItem model,
     * where one order has many items. The items() method returns an instance of the HasMany relationship,
     * linking the order_id column in the OrderItem table to the id column in the Order table.
     * This allows us to retrieve all items related to a specific order by calling $order->items on an instance
     * of the Order model.
     *
     * @return HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class, 'order_id');
    }

    /**
     * This method is defining a relationship between the Order model and the User model,
     * specifically the manager of the order. It is using the Eloquent ORM's 'belongsTo' relationship
     * to indicate that the manager_id on the Order model belongs to a User model.
     * This will allow us to easily retrieve the manager of an order by calling the 'manager' relationship
     * on an Order instance.
     *
     * @return BelongsTo
     */
    public function manager(): BelongsTo
    {
        return $this->belongsTo(User::class, 'manager_id');
    }

    /**
     * This function creates a relationship between the Order model and the Client model,
     * where the Order belongs to a Client.
     * The "client_id" attribute in the Order model is use to establish the relationship.
     * This relationship allows for easy access to the related client data for a specific order.
     *
     * @return BelongsTo
     */
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    /**
     * This method is defining a relationship between the Order model and the Invoice model.
     * It is saying that an order can have many invoices,
     * and it specifies the foreign key on the invoices table as 'order_id'.
     * This relationship can be used to retrieve all invoices related to a specific order,
     * for example, by calling $order->invoices.
     *
     * @return HasMany
     */
    public function invoices(): HasMany
    {
        return $this->hasMany(Invoice::class, 'order_id');
    }
}
