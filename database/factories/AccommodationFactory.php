<?php

namespace Database\Factories;

use App\Models\Accommodation;
use App\Models\Trip;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class AccommodationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Accommodation::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $lang = 33.7490;
        $long = -84.3880;

        return [
            'title'       => $this->faker->word,
            'description' => $this->faker->text,
            'image_url'   => $this->faker->imageUrl,
            'destination_id' => rand(1,10),
            'latitude' => $this->faker->latitude($min = ($lang - (rand(0,20) / 1000)), $max = ($lang + (rand(0,20) / 1000))),
            'longitude' => $this->faker->longitude($min = ($long - (rand(0,20) / 1000)), $max = ($long + (rand(0,20) / 1000))),
        ];
    }

    /**
     * Configure the relationship between trip and user.
     *
     * @return $this
     */
    public function configure()
    {
        return $this->afterCreating(function (Accommodation $accommodation) {
            /**
             * Accommodation Destinations
             */
            // Attach three random users to the trip
            $accommodation->destinations()->attach([
                rand(1, 10), // Assuming you have 10 users in your database
                rand(1, 10),
                rand(1, 10),
            ], ['created_at' => now(), 'updated_at' => now()]);
        });
    }

}
