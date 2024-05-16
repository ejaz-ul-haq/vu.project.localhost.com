<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Destination extends Model
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
        'image_url',
        'langtitude',
        'longitute'
    ];


    /**
     * The Attractions that belong to the Destination.
     */
    public function attractions(): BelongsToMany
    {
        return $this->belongsToMany(Attraction::class, 'destination_attraction', 'destination_id', 'attraction_id');
    }

    /**
     * The Attractions that belong to the Destination.
     */
    public function accommodations(): BelongsToMany
    {
        return $this->belongsToMany(Accommodation::class, 'destination_accommodation', 'destination_id', 'accommodation_id');
    }


    /**
     * Get all of the destination's reviews.
     */
    public function reviews(): MorphMany
    {
        return $this->morphMany(Review::class, 'reviewable');
    }

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
