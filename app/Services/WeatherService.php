<?php
// app/Services/WeatherService.php

namespace App\Services;

use GuzzleHttp\Client;

class WeatherService
{
    protected $client;
    protected $apiKey;

    public function __construct()
    {
        $this->client = new Client();
        $this->apiKey = env('OPENWEATHERMAP_API_KEY', '3523a658aecde77532d7affeaecb9872');
    }

    public function getWeatherByCoordinates($latitude, $longitude)
    {
        $url = 'https://api.openweathermap.org/data/2.5/weather';
        $response = $this->client->get($url, [
            'query' => [
                'lat' => $latitude,
                'lon' => $longitude,
                'appid' => $this->apiKey,
                'units' => 'metric', // or 'imperial'
            ],
        ]);

        return json_decode($response->getBody()->getContents(), true);
    }
}
