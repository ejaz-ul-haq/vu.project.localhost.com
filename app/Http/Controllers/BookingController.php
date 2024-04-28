<?php

namespace App\Http\Controllers;

use App\Helpers\UploadHelper;
use App\Http\Requests\BookingRequest;
use App\Models\Booking;
use App\Traits\ResponseTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

use Laravel\Cashier\Cashier;
use Stripe\Checkout\Session;
use Stripe\Stripe;

class BookingController extends Controller
{
    /**
     * Response trait to handle return responses.
     */
    use ResponseTrait;

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['indexAll']]);
    }

    
    public function index(Request $request): JsonResponse
    {
        Log::warning('ejaz-test : index');
        Log::warning('$request');
        Log::warning($request);

        try {

            $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
            $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
            $order   = isset($request['order']) ? $request['order'] : 'desc';

            $data = Booking::orderBy($orderBy, $order)
                                ->paginate($perPage);

            Log::warning('$data');
            Log::warning($data);

            return $this->responseSuccess($data, 'Booking List Fetch Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function indexAll(Request $request): JsonResponse
    {
        try {

            $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
            $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
            $order   = isset($request['order']) ? $request['order'] : 'desc';

            $data = Booking::orderBy($orderBy, $order)
                                    ->paginate($perPage);

            return $this->responseSuccess($data, 'Booking List Fetched Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function search(Request $request): JsonResponse
    {
        try {

            $perPage = isset($perPage) ? intval($perPage) : 10;

            $data = Booking::where('title', 'like', '%'.$keyword.'%')
                            ->orWhere('description', 'like', '%'.$keyword.'%')
                            ->orWhere('price', 'like', '%'.$keyword.'%')
                            ->orderBy('id', 'desc')
                            ->with('user')
                            ->paginate($perPage);

            return $this->responseSuccess($data, 'Booking List Fetched Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function store(BookingRequest $request): JsonResponse
    {
        Log::warning('ejaz-test : store');
        Log::warning('$request');
        Log::warning($request);

        try {

            $data = $request->all();

            Log::warning('$data');
            Log::warning($data);


            // // Set your Stripe API key
            Stripe::setApiKey('sk_test_51PA6fHDkQjZuj6p2QTwORu2WcgZTStrvVgE8dgIFDiV4XuYGPI8YexmbbLQIgSir2w8x2QzNVYcy0JQk8DYxjOM300HlCmnAJe');

            // Create a new Stripe Checkout session
            $session = Session::create([
                'payment_method_types' => ['card'],
                'line_items' => [[
                    'price_data' => [
                        'currency' => 'usd',
                        'product_data' => [
                            'name' => $data['trip_title'],
                        ],
                        'unit_amount' => ($data['price'] * 100), // Amount in cents
                    ],
                    'quantity' => 1,
                ]],
                'mode' => 'payment',
                'success_url' => url('/booking-success'),
                'cancel_url' => url('/booking-cancel'),
            ]);


        //     // Create a new Checkout session using Laravel Cashier
        // $session = $request->user()->checkout([
        //     'payment_method_types' => ['card'],
        //     'line_items' => [[
        //         'price_data' => [
        //             'currency' => 'usd',
        //             'product_data' => [
        //                 'name' => $data['trip_title'],
        //             ],
        //             'unit_amount' => $data['price'] * 100, // Amount in cents
        //         ],
        //         'quantity' => 1,
        //     ]],
        //     'mode' => 'payment',
        //     'success_url' => url('/booking-success'),
        //     'cancel_url' => url('/booking-cancel'),
        // ]);

        //  // Set your Stripe API key
        //  Stripe::setApiKey(config('services.stripe.secret'));

        //  // Create a subscription or invoice using Laravel Cashier
        //  $subscription = $request->user()->newSubscription('default', $planId)->create();
 
        //  // Alternatively, if you want to create an invoice:
        //  // $invoice = $request->user()->invoiceFor('T-Shirt', $price);
 
        //  // Create a new Stripe Checkout session
        //  $session = Session::create([
        //      'payment_method_types' => ['card'],
        //      'line_items' => [[
        //          'price_data' => [
        //              'currency' => Cashier::usesCurrency(),
        //              'product_data' => [
        //                  'name' => $data['trip_title'],
        //              ],
        //              'unit_amount' => $data['price'] * 100, // Amount in cents
        //          ],
        //          'quantity' => 1,
        //      ]],
        //      'mode' => 'payment',
        //      'success_url' => url('/booking-success'),
        //      'cancel_url' => url('/booking-cancel'),
        //  ]);

    
            // Redirect the user to the Checkout session URL
         //    return redirect()->to($session->url);

         Log::warning('$session');
            Log::warning($session);

         /**
          * Set Stripe Checkout Session ID
          */
          $data['checkout_session_id'] =  $session->id;

          /**
           * Create Booking DB Record
           */
         $boking = Booking::create($data);
            Log::warning('$boking');
            Log::warning($boking);

            $response = [
                'booking' => $boking,
                'stripe_checkout_session' => $session
            ];

            Log::warning('$response');
            Log::warning($response);

            return $this->responseSuccess($response, 'New Booking Created Successfully !');

        } catch (\Exception $exception) {
            return $this->responseError(null, $exception->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function show($id): JsonResponse
    {
        Log::warning('Booking - controller : show');
        Log::warning('$id');
        Log::warning($id);

        try {

            $data = Booking::find($id);

            Log::warning('$data');
            Log::warning($data);

            

            if (is_null($data)) {
                return $this->responseError(null, 'Booking Not Found', Response::HTTP_NOT_FOUND);
            }

            return $this->responseSuccess($data, 'Booking Details Fetch Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function update(BookingRequest $request, $id): JsonResponse
    {
        try {

            $data = $request->all();
            $booking = Booking::find($id);
            
            Log::warning('$data - before update');
            Log::warning($data);

            // If everything is OK, then update.
            $booking->update($data);

            // Finally return the updated Booking.
            return $this->responseSuccess(Booking::find($id), 'Booking Updated Successfully !');

        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function destroy($id): JsonResponse
    {
        try {
            $booking = Booking::find($id);
            if (empty($booking)) {
                return $this->responseError(null, 'Booking Not Found', Response::HTTP_NOT_FOUND);
            }

           
            return $this->responseSuccess($booking, 'Booking Deleted Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
