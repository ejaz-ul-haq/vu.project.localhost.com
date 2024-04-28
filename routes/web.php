<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::get( '/{path?}', function(Request $request, $path = null){
//    return view( 'umi' );
    
// if ($path === 'charge-checkout') {
//     return $request->user()->checkoutCharge(1200, 'T-Shirt', 5);
// }
    if ($path === 'welcome') {
        return view('welcome');
    } else {
        return view('umi');
    }
} )->where('path', '.*');

//Route::get('/welcome', [WelcomeController::class, 'welcome']);

// Route::get('/charge-checkout', function (Request $request) {
//     return $request->user()->checkoutCharge(1200, 'T-Shirt', 5);
// });




// Route::post(
//     'stripe/webhook',
//     '\App\Http\Controllers\WebhookController@handleWebhook'
// );
