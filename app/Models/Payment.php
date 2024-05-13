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

    public function booking(): object
    {
        return $this->belongsTo(Booking::class)->select('*');
    }

}
