<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;

class WelcomeController extends Controller
{
    public function welcome(): Renderable
    {
        return view('welcome');
    }
}
