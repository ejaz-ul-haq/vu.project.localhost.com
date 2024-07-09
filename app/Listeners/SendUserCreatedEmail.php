<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

use Illuminate\Support\Facades\Log;

use App\Events\UserCreated;
use App\Mail\UserCreatedNotification;

use Illuminate\Support\Facades\Mail;

class SendUserCreatedEmail implements ShouldQueue
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
    public function handle(UserCreated $event)
    {
        Log::warning('SendUserCreatedEmail - handle');

        // Log::warning('$event');
        // Log::warning($event);

        // Access the user_created from the event
        $user = $event->user;

        Log::warning('$user');
        Log::warning($user);


        //
        
        // // Send reservation confirmation email
        // $firstname = $reservation->user->firstname;
        // $room_number = $reservation->room->number;
        // $email = $reservation->user->email;

        // // Add this Code
        Mail::to($user->email)->send(new UserCreatedNotification($user->name, $user->id));

    }
}
