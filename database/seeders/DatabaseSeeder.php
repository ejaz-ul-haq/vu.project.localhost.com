<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(DestinationSeeder::class);
        $this->call(AccommodationSeeder::class);
        $this->call(NotificationSeeder::class);
        $this->call(TripSeeder::class);
    }
}
