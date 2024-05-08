<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

use Illuminate\Support\Facades\Log;

class UserCreated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user_created;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($user_created)
    {
        $this->user_created = $user_created;

        Log::warning('UserCreated - __construct');

        Log::warning('$user_created');
        Log::warning($user_created);

    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
