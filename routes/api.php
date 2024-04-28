<?php

use App\Http\Controllers\AccommodationController;
use App\Http\Controllers\AttractionController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\TripController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BookingController;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/check-auth', [AuthController::class, 'check_auth']);

//Route::get('/check-auth', function (Request $request) {
//    if ($request->user()) {
//        return response()->json(['user' => $request->user()]);
//    } else {
//        return response()->json(['message' => 'User not logged in', 'user' => $request]);
//    }
//});

Route::group([
    'middleware' => 'api'
], function ($router) {

//    Route::middleware('auth')->get('/check-auth', function (Request $request) {
//        return response()->json(['user' => $request->user()]);
//    });

    /**
     * Authentication Module
     */
    Route::group(['prefix' => 'auth'], function () {
        Route::post('register', [AuthController::class, 'register']);
        Route::post('login', [AuthController::class, 'login']);
        Route::post('logout', [AuthController::class, 'logout']);
        Route::post('refresh', [AuthController::class, 'refresh']);
        Route::get('me', [AuthController::class, 'me']);
    });
//    Route::get('me', [AuthController::class, 'me']);


    /**
     * Products Module
     */
    Route::resource('products', ProductsController::class);
    Route::get('products/view/all', [ProductsController::class, 'indexAll']);
    Route::get('products/view/search', [ProductsController::class, 'search']);

    /**
     * Destinations Module
     */
    Route::resource('destinations', DestinationController::class);

    /**
     * Users Module
     */
    Route::resource('users', UserController::class);

    /**
     * Trips Module
     */
    Route::resource('trips', TripController::class);

    /**
     * Accommodations Module
     */
    Route::resource('accommodations', AccommodationController::class);

    /**
     * Attractions Module
     */
    Route::resource('attractions', AttractionController::class);

    /**
     * Bookings Module
     */
    Route::resource('bookings', BookingController::class);

    /**
     * Notifications Module
     */
    Route::resource('notifications', NotificationController::class);

});


/**
 * Start - Public APIs
 */

/**
 * Destinations Module
 */
Route::get('destinations/view/all', [DestinationController::class, 'indexAll']);

/**
 * Trips Module
 */
Route::get('trips/view/all', [TripController::class, 'indexAll']);

/**
 * End - Public APIs
 */
//  Route::post(
//     'stripe/webhook',
//     '\Laravel\Cashier\Http\Controllers\WebhookController@handleWebhook'
// );

