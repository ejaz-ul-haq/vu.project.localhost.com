<?php

namespace Database\Factories;

use App\Models\Accommodation;
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
        return [
            'title'       => $this->faker->word,
            'description' => $this->faker->text,
            'image_url'   => $this->faker->imageUrl,
            'destination_id' => rand(1,10),
        ];
    }

}
