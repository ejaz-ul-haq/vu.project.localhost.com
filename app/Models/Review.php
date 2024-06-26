<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

use Illuminate\Database\Eloquent\Relations\MorphTo;

use App\Models\User;

class Review extends Model
{
    use HasFactory;

    /**
     * Override fillable property data.
     *
     * @var array
     */
    protected $fillable = [
        'rating',
        'status',
        'comment',
        'reviewable_id',
        'reviewable_type'
    ];

    /**
     * Get the parent reviewable model (trip, destination, accommodation, attraction).
     */
    public function reviewable(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * The users that belong to the trip.
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_trip', 'trip_id', 'user_id');
    }


    public function destination(): object
    {
        return $this->belongsTo(Destination::class)->select('*');
    }

    public function accommodation(): object
    {
        return $this->belongsTo(Accommodation::class)->select('*');
    }

    // public function travelMates()
    // {
    //     // Assuming you have a 'User' model
    //     return $this->belongsToMany(User::class, 'trip_user', 'trip_id', 'user_id');
    // }

    // Add New Attribute to get image address
//    protected $appends = ['image_url'];

    /**
     * Get Added Image Attribute URL.
     *
     * @return string|null
     */
//    public function getImageUrlAttribute(): string | null
//    {
//        if (is_null($this->image_url) || $this->image_url === "") {
//            return null;
//        }
//
//        return url('') . "/images/destinations/" . $this->image_url;
//    }
}
