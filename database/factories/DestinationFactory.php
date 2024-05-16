<?php

namespace Database\Factories;

use App\Models\Destination;
use Illuminate\Database\Eloquent\Factories\Factory;

class DestinationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Destination::class;

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
            'title' => $this->faker->word,
            'description' => $this->faker->text,
            'image_url' => $this->faker->imageUrl,
            'latitude' => $this->faker->latitude($min = ($lang - (rand(0,20) / 1000)), $max = ($lang + (rand(0,20) / 1000))),
            'longitude' => $this->faker->longitude($min = ($long - (rand(0,20) / 1000)), $max = ($long + (rand(0,20) / 1000))),
        ];
    }
}
