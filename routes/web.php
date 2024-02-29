<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Welcome\WelcomeController;

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




Route::get( '/{path?}', function($path = null){
//    return view( 'umi' );
    if ($path === 'welcome') {
        return view('welcome');
    } else {
        return view('umi');
    }
} )->where('path', '.*');

//Route::get('/welcome', [WelcomeController::class, 'welcome']);

