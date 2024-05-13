<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

use App\Models\User;
use App\Models\Booking;

class Payment extends Model
{
    use HasFactory;

    /**
     * Override fillable property data.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'booking_id',
        'status'
    ];

    // protected $dispatchesEvents = [
    //     'creating' => \App\Events\BookingCreated::class, 
    //     'created' => \App\Events\BookingCreated::class,
    // ];

    public function user(): object
    {
        return $this->belongsTo(User::class)->select('*');
    }

 
    // Define the relationship with the booking
    public function booking()
    {
        return $this->hasOne(Booking::class, 'payment_id', 'id');
    }


    // Define the relationship with the trip through the booking
    public function trip()
    {
        return $this->hasOneThrough(
            Trip::class,
            Booking::class,
            'id',  // Foreign key on bookings table referencing payments table
            'id',  // Foreign key on trips table referencing bookings table
            'booking_id',  // Local key on payments table
            'trip_id'  // Local key on bookings table
        );
    }

}
