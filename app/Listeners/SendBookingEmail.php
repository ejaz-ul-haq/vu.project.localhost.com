<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

use Illuminate\Support\Facades\Log;

use App\Events\BookingCreated;
use App\Mail\BookingCreatedNotification;

use Illuminate\Support\Facades\Mail;

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

        // Log::warning('$event');
        // Log::warning($event);

        // Access the booking from the event
        $booking = $event->booking;

        Log::warning('$booking');
        Log::warning($booking);


        //
        
        // // Send reservation confirmation email
        // $firstname = $reservation->user->firstname;
        // $room_number = $reservation->room->number;
        // $email = $reservation->user->email;

        // // Add this Code
        Mail::to($booking->user->email)->send(new BookingCreatedNotification($booking->user->name, $booking->trip_id));

    }
}
