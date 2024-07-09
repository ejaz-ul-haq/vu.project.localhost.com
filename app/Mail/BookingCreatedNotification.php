<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

use Illuminate\Support\Facades\Log;

class BookingCreatedNotification extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct( private $customer_name, private $trip_id )
    {
        //
        Log::warning('BookingCreatedNotification - __construct');
        
        Log::warning('$customer_name');
        Log::warning($customer_name);

        Log::warning('$trip_id');
        Log::warning($trip_id);
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope(): Envelope
    {
        Log::warning('BookingCreatedNotification - envelope');
        return new Envelope(
            // from: new Address('vu.project@wpvisions.com', 'Vu Project Testing'),
            subject: 'Booking Created Notification',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content(): Content
    {
        Log::warning('BookingCreatedNotification - content');
        return new Content(
            view: 'mail.booking-created',
            with: ['customer_name' => $this->customer_name, 'trip_id' => $this->trip_id],
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
