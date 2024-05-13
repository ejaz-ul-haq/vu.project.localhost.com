<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Laravel\Cashier\Cashier;
use Laravel\Cashier\Events\WebhookReceived;

use Illuminate\Support\Facades\Log;

class StripeEventListener
{
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
    /**
     * Handle received Stripe webhooks.
     */
    public function handle(WebhookReceived $event): void
    {
        Log::warning('StripeEventListener : handle');
        // Log::warning('$event');
        // Log::warning($event);

        ['type' => $type, 'data' => $data] = $event->payload;

        Log::warning('$type');
        Log::warning($type);

        Log::warning('$data');
        Log::warning($data);

        if ($type === 'invoice.finalized') {
            // Let's send the invoice to the customer

        } else if ($type === 'charge.dispute.created') {
            // Let's notify our admin about a new dispute

        }

        // and so on ...
    }
}
