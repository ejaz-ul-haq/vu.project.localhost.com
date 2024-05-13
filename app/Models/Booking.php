<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

use App\Models\User;
use App\Models\Trip;
use App\Models\Payment;

class Booking extends Model
{
    use HasFactory;

    /**
     * Override fillable property data.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'trip_id',
        'checkout_session_id',
        'payment_id'
    ];

    // protected $dispatchesEvents = [
    //     'creating' => \App\Events\BookingCreated::class, 
    //     'created' => \App\Events\BookingCreated::class,
    // ];

    public function user(): object
    {
        return $this->belongsTo(User::class)->select('*');
    }

    public function trip(): object
    {
        return $this->belongsTo(Trip::class)->select('*');
    }

    public function payment(): object
    {
        return $this->belongsTo(Payment::class)->select('*');
    }

}
