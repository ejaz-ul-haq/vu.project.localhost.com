<?php

namespace Database\Seeders;

use App\Models\Notification;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NotificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('notifications')->delete();
        $data = [
            [
                'subject'    => 'Your payment has been received.',
                'body'       => 'We have successfully received your payment we will get in touch with further details very soon. Best Regards',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'subject'    => 'Your Booking has been confirmed.',
                'body'       => "We have confirmed your booking we will share trip details in the next 3 hours. Best Regards.",
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'subject'    => 'Your trip is ready',
                'body'       => "We hope this message will find you well. your trip has been ready so kindly visit the shared location at the specified time and join your travel mates. Happy journey. Best Regards.",
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
        ];
        Notification::insert($data);

        // Testing Dummy Products
        Notification::factory(5)->create();
    }
}
