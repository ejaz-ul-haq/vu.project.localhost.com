<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

use Illuminate\Support\Facades\Log;

class SendBookingEmail implements ShouldQueue
{
    use InteractsWithQueue;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(BookingCreated $event)
    {
        Log::warning('SendBookingEmail - handle');

        Log::warning('$event');
        Log::warning($event);

        // Access the booking from the event
        $booking = $event->booking;

        Log::warning('$booking');
        Log::warning($booking);

    }
}
