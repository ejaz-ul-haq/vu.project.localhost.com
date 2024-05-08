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
        $user_created = $event->user_created;

        Log::warning('$user_created');
        Log::warning($user_created);


        //
        
        // // Send reservation confirmation email
        // $firstname = $reservation->user->firstname;
        // $room_number = $reservation->room->number;
        // $email = $reservation->user->email;

        // // Add this Code
        Mail::to($user_created->email)->send(new UserCreatedNotification($user_created->name, $user_created->id));

    }
}
