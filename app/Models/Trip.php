<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

use App\Models\User;

class Trip extends Model
{
    use HasFactory;

    /**
     * Override fillable property data.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'destination_id',
        'accommodation_id',
        'start_date_time',
        'end_date_time',
        'price',
        'image_url',
//        'travel_mates'
    ];

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

    // Define the relationship with bookings
    public function bookings()
    {
        return $this->hasMany(Booking::class, 'trip_id');
    }

     // Define the relationship with payments
     public function payments()
     {
         return $this->hasManyThrough(Payment::class, Booking::class, 'trip_id', 'user_id', 'id', 'user_id');
     }

     // Define the relationship with the trip through the booking
    public function payment()
    {
        // return $this->hasOneThrough(
        //     Payment::class,
        //     Booking::class,
        //     'id',  // Foreign key on bookings table referencing payments table
        //     'id',  // Foreign key on trips table referencing bookings table
        //     'booking_id',  // Local key on payments table
        //     'payment_id'  // Local key on bookings table
        // );
        return $this->hasOneThrough(
            Payment::class,
            Booking::class,
            'trip_id',  // Foreign key on bookings table referencing trips table
            'booking_id',  // Foreign key on payments table referencing bookings table
            'id',  // Local key on trips table
            'payment_id'  // Local key on bookings table
        );
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
