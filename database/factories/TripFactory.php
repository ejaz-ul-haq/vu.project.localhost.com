<?php

namespace Database\Factories;

use App\Models\Trip;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Carbon\Carbon;

class TripFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Trip::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'destination_id' => rand(1, 10),
            'accommodation_id' => rand(1, 10),
            'start_date_time'  => Carbon::now()->addHours(1),
            'end_date_time'    => Carbon::now()->addHours(2),
        ];
    }


    /**
     * Configure the relationship between trip and user.
     *
     * @return $this
     */
    public function configure()
    {
        return $this->afterCreating(function (Trip $trip) {
            /**
             * Trip Users
             */
            // Attach three random users to the trip
            $trip->users()->attach([
                rand(1, 10), // Assuming you have 10 users in your database
                rand(1, 10),
                rand(1, 10),
            ], ['created_at' => now(), 'updated_at' => now()]);
        });
    }

}
