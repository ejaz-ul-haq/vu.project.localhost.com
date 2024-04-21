<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    use HasFactory;

    /**
     * Override fillable property data.
     *
     * @var array
     */
    protected $fillable = [
        'destination_id',
        'accommodation_id',
        'start_date_time',
        'end_date_time',
        'travel_mates'
    ];


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
