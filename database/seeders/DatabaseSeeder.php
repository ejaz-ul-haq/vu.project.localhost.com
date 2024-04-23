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
        // Disable foreign key constraints before seeding
//        $this->call(DisableForeignKeyConstraintsSeeder::class);

        // Call ClearDataSeeder before seeding
//        $this->call(ClearDataSeeder::class);

        $this->call(UserSeeder::class);
//        $this->call(ProductSeeder::class);
        $this->call(DestinationSeeder::class);
        $this->call(AccommodationSeeder::class);
        $this->call(NotificationSeeder::class);
        $this->call(TripSeeder::class);

        // Re-enable foreign key constraints after seeding
//        $this->call(EnableForeignKeyConstraintsSeeder::class);

    }
}
