<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Trip;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TripSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('trips')->delete();
        Trip::factory(10)->create();
    }
}
