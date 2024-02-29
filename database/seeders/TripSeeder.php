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
        $data = [
            [
                'destination_id'   => 2,
                'accommodation_id' => 1,
                'start_date_time'  => Carbon::now()->addHours(1),
                'end_date_time'    => Carbon::now()->addHours(2),
                'travel_mates'     => serialize([2, 3, 4, 5, 6]),
                'created_at'       => Carbon::now(),
                'updated_at'       => Carbon::now()
            ],
            [
                'destination_id'   => 4,
                'accommodation_id' => 3,
                'start_date_time'  => Carbon::now()->addHours(1),
                'end_date_time'    => Carbon::now()->addHours(2),
                'travel_mates'     => serialize([2, 3, 5, 7, 1]),
                'created_at'       => Carbon::now(),
                'updated_at'       => Carbon::now()
            ],
            [
                'destination_id'   => 5,
                'accommodation_id' => 2,
                'start_date_time'  => Carbon::now()->addHours(1),
                'end_date_time'    => Carbon::now()->addHours(2),
                'travel_mates'     => serialize([2, 8, 4, 10, 6]),
                'created_at'       => Carbon::now(),
                'updated_at'       => Carbon::now()
            ],
            [
                'destination_id'   => 9,
                'accommodation_id' => 4,
                'start_date_time'  => Carbon::now()->addHours(1),
                'end_date_time'    => Carbon::now()->addHours(2),
                'travel_mates'     => serialize([2, 9, 4, 1, 6]),
                'created_at'       => Carbon::now(),
                'updated_at'       => Carbon::now()
            ],
            [
                'destination_id'   => 2,
                'accommodation_id' => 1,
                'start_date_time'  => Carbon::now()->addHours(1),
                'end_date_time'    => Carbon::now()->addHours(2),
                'travel_mates'     => serialize([2, 3, 7, 6]),
                'created_at'       => Carbon::now(),
                'updated_at'       => Carbon::now()
            ],
            [
                'destination_id'   => 8,
                'accommodation_id' => 5,
                'start_date_time'  => Carbon::now()->addHours(1),
                'end_date_time'    => Carbon::now()->addHours(2),
                'travel_mates'     => serialize([9, 10, 4, 5, 6]),
                'created_at'       => Carbon::now(),
                'updated_at'       => Carbon::now()
            ],
        ];
        Trip::insert($data);

        // Testing Dummy Products
//        Product::factory(100)->create();
    }
}
