<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

use App\Listeners\StripeEventListener;

use App\Events\BookingCreated;
use App\Listeners\SendBookingEmail;

use Laravel\Cashier\Events\WebhookReceived;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        /**
         * Stripe WebHook Listener
         */
        // WebhookReceived::class => [
        //     StripeEventListener::class,
        // ],
        'Laravel\Cashier\Events\WebhookReceived' => [
            'App\Listeners\StripeEventListener',
        ],
        //  Registered::class => [
        //      SendEmailVerificationNotification::class,
        //      StripeEventListener::class
        //  ],
        // Add This listener
        /**
         * https://www.youtube.com/watch?v=aq2E1oaksag
         * https://medium.com/@riskiilyas03/automate-email-sending-with-event-listener-in-laravel-8631f47b982d
         *
         * https://mailtrap.io/blog/send-email-in-laravel/
         */
        // App\Events\SendBookingEmail::class => [
        //     BookingCreated::class
        // ]
        // BookingCreated::class => [
        //     SendBookingEmail::class
        // ]
        'App\Events\BookingCreated' => [
            'App\Listeners\SendBookingEmail',
        ],
        'App\Events\UserCreated' => [
            'App\Listeners\SendUserCreatedEmail',
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
