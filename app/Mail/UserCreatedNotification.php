<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class UserCreatedNotification extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct( private $user_name, private $user_id )
    {
        //

        Log::warning('UserCreatedNotification - __construct');
        
        Log::warning('$user_name');
        Log::warning($user_name);

        Log::warning('$user_id');
        Log::warning($user_id);
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope(): Envelope
    {
        Log::warning('UserCreatedNotification - envelope');
        return new Envelope(
            // from: new Address('vu.project@wpvisions.com', 'Vu Project Testing'),
            subject: 'User Created Notification',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content(): Content
    {
        Log::warning('UserCreatedNotification - content');
        return new Content(
            view: 'mail.user-created',
            with: ['user_name' => $this->user_name, 'user_id' => $this->user_id],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
