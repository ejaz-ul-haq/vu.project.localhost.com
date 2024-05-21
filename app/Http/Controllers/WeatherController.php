<?php
// app/Http/Controllers/WeatherController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\WeatherService;

class WeatherController extends Controller
{
    protected $weatherService;

    public function __construct(WeatherService $weatherService)
    {
        $this->middleware('auth:api', ['except' => []]);
        $this->weatherService = $weatherService;
    }

    public function getWeather(Request $request)
    {
        $latitude = $request->input('latitude');
        $longitude = $request->input('longitude');

        $weather = $this->weatherService->getWeatherByCoordinates($latitude, $longitude);

        return response()->json($weather);
    }
}
