<?php

namespace Database\Factories;

use App\Models\Accommodation;
use App\Models\Attraction;
use App\Models\Trip;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class AttractionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Attraction::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title'       => $this->faker->word,
            'description' => $this->faker->text,
            'image_url'   => $this->faker->imageUrl,
            'destination_id' => rand(1,10),
        ];
    }

    /**
     * Configure the relationship between trip and user.
     *
     * @return $this
     */
    public function configure()
    {
        return $this->afterCreating(function (Attraction $attraction) {
            /**
             * Attraction Destinations
             */
            // Attach three random users to the trip
            $attraction->destinations()->attach([
                rand(1, 10), // Assuming you have 10 users in your database
                rand(1, 10),
                rand(1, 10),
            ], ['created_at' => now(), 'updated_at' => now()]);
        });
    }

}
