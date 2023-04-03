<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\SocialReview
 *
 * @property int $id
 * @property int $published
 * @property string $social_network
 * @property string $image
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|SocialReview newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SocialReview newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SocialReview query()
 * @method static \Illuminate\Database\Eloquent\Builder|SocialReview whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialReview whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialReview whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialReview wherePublished($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialReview whereSocialNetwork($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialReview whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class SocialReview extends Model
{
    protected $dates = [
        'created_at',
        'updated_at',
    ];
}
