<?php

namespace App\Http\Controllers;

use App\Http\Requests\TripRequest;
use App\Models\Trip;
use App\Repositories\TripRepository;
use App\Traits\ResponseTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use App\Helpers\UploadHelper;

use Illuminate\Support\Facades\Auth;

class TripController extends Controller
{
    /**
     * Response trait to handle return responses.
     */
    use ResponseTrait;

    /**
     * Product Repository class.
     *
     * @var TripRepository
     */
    public $tripRepository;

    public function __construct(TripRepository $tripRepository)
    {
        $this->middleware('auth:api', ['except' => ['indexAll']]);
        $this->tripRepository = $tripRepository;
    }

    /**
     * @OA\GET(
     *     path="/api/trips",
     *     tags={"Trips"},
     *     summary="Get Trip List",
     *     description="Get Trip List as Array",
     *     operationId="trip-index",
     *     security={{"bearer":{}}},
     *     @OA\Response(response=200,description="Get Trip List as Array"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function index(Request $request): JsonResponse
    {
        Log::warning('TripController - ejaz-test : index');
        Log::warning('$request');
        Log::warning($request);

        $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
        $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
        $order   = isset($request['order']) ? $request['order'] : 'desc';

        // Get the authenticated user
        $user = Auth::user();
        Log::warning('$user');
        Log::warning($user);


        try {

            $trips = [];

            if( $user->role == 'user' ){

                // // Retrieve trips for the user
                $trips = Trip::orderBy($orderBy, $order)
                ->whereHas('bookings', function ($query) use ($user) {
                    $query->where('user_id', $user->id);
                })
                // ->with(['bookings' => function ($query) use ($user) {
                //     $query->where('user_id', $user->id);
                //     // Assuming 'payment_id' is the foreign key linking to the payments table
                //     $query->with('payment');
                // }])
                // ->with('payments')
                ->with('payment')
                // ->with('users')
                // ->with('destination')
                // ->with('accommodation')
                // ->with('bookings')
                ->paginate($perPage);


                 // Retrieve trips for the user
        // $query = Trip::whereHas('bookings', function ($query) use ($user) {
        //     $query->where('user_id', $user->id);
        // });

        
                

                Log::warning('TripController - ejaz-test : index - $trips');
                // Debugging: Check the generated SQL query
                // Log::warning(($query->toSql()));

                // $trips = $query->get();

                Log::warning($trips);
                // Debugging: Check the generated SQL query
                // Log::warning($trips->toSql());

            }


            if( $user->role == 'admin' ){
                $trips = $this->tripRepository->getAll($request);
                Log::warning('$trips');
                Log::warning($trips);
            }

            

            return $this->responseSuccess($trips, 'Trip List Fetch Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\GET(
     *     path="/api/trips/view/all",
     *     tags={"Trips"},
     *     summary="All Trips - Publicly Accessible",
     *     description="All Trips - Publicly Accessible",
     *     operationId="trip-indexAll",
     *     @OA\Parameter(name="perPage", description="perPage, eg; 20", example=20, in="query", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="All Trips - Publicly Accessible" ),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function indexAll(Request $request): JsonResponse
    {
        try {
            $data = $this->tripRepository->getPaginatedData($request);

            return $this->responseSuccess($data, 'Trip List Fetched Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\GET(
     *     path="/api/trips/view/search",
     *     tags={"Trips"},
     *     summary="All Trips - Publicly Accessible",
     *     description="All Trips - Publicly Accessible",
     *     operationId="trip-search",
     *     @OA\Parameter(name="perPage", description="perPage, eg; 20", example=20, in="query", @OA\Schema(type="integer")),
     *     @OA\Parameter(name="search", description="search, eg; Test", example="Test", in="query", @OA\Schema(type="string")),
     *     @OA\Response(response=200, description="All Trips - Publicly Accessible" ),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function search(Request $request): JsonResponse
    {
        try {
            $data = $this->tripRepository->searchProduct($request->search, $request->perPage);

            return $this->responseSuccess($data, 'Trip List Fetched Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\POST(
     *     path="/api/trips",
     *     tags={"Trips"},
     *     summary="Create New Trip",
     *     description="Create New Trip",
     *     operationId="trip-store",
     *     @OA\RequestBody(
     *          @OA\JsonContent(
     *              type="object",
     *              @OA\Property(property="title", type="string", example="Trip 1"),
     *              @OA\Property(property="description", type="string", example="Description"),
     *              @OA\Property(property="image_url", type="string", example=""),
     *          ),
     *      ),
     *      security={{"bearer":{}}},
     *      @OA\Response(response=200, description="Create New Trip" ),
     *      @OA\Response(response=400, description="Bad request"),
     *      @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function store(TripRequest $request): JsonResponse
    {
        Log::warning('trip - controller : store');
        Log::warning('$request');
        Log::warning($request);

        try {

            $data = $request->all();

            Log::warning('$trip - $data');
            Log::warning($data);

            $titleShort = Str::slug(substr($data['title'], 0, 100));

            if ( ! empty($data['image'])) {
                $data['image_url'] = UploadHelper::upload( $data['image'], $titleShort, 'images/trips' );
            }

            $trip = Trip::create($data);

            Log::warning('$trip - insert - level - 01');
            Log::warning($trip);

            /**
             * Set Trip Users
             */
            // Retrieve the user IDs from the request (assuming they're in an array)
            $userIds = $request->input('users');

            // Associate users with the trip by inserting records into the pivot table
            $trip->users()->attach($userIds);

            $response_data = Trip::with('destination', 'accommodation', 'users')->find($trip->id);

            Log::warning('$response_data');
            Log::warning($response_data);

            return $this->responseSuccess($response_data, 'New Trip Created Successfully !');

        } catch (\Exception $exception) {
            return $this->responseError(null, $exception->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\GET(
     *     path="/api/trips/{id}",
     *     tags={"Trips"},
     *     summary="Show Trip Details",
     *     description="Show Trip Details",
     *     operationId="trip-show",
     *     security={{"bearer":{}}},
     *     @OA\Parameter(name="id", description="id, eg; 1", required=true, in="path", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Show Trip Details"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function show($id): JsonResponse
    {
        Log::warning('trip - controller : show');
        Log::warning('$id');
        Log::warning($id);

        try {

//            $trip = Trip::find($id);
            $trip = Trip::with('destination', 'accommodation', 'users')->find($id);

            Log::warning('trip - controller : show - $trip');
            Log::warning($trip);

            if (is_null($trip)) {
                return $this->responseError(null, 'Trip Not Found', Response::HTTP_NOT_FOUND);
            }

            return $this->responseSuccess($trip, 'Trip Details Fetch Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\PUT(
     *     path="/api/trips/{id}",
     *     tags={"Trips"},
     *     summary="Update Trip",
     *     description="Update Trip",
     *     @OA\Parameter(name="id", description="id, eg; 1", required=true, in="path", @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *          @OA\JsonContent(
     *              type="object",
     *              @OA\Property(property="title", type="string", example="Product 1"),
     *              @OA\Property(property="description", type="string", example="Description"),
     *              @OA\Property(property="image_url", type="string", example=""),
     *          ),
     *      ),
     *     operationId="trip-update",
     *     security={{"bearer":{}}},
     *     @OA\Response(response=200, description="Update Trip"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function update(TripRequest $request, $id): JsonResponse
    {
        try {

            $data = $request->all();

            Log::warning('$trip - $data');
            Log::warning($data);

            $trip = Trip::find($id);

            if (is_null($trip)) {
                return null;
            }

            if ( ! empty($data['image'])) {
                $titleShort    = Str::slug(substr($data['title'], 0, 100));
                $data['image_url'] = UploadHelper::upload( $data['image'], $titleShort, 'images/trips' );
            } else {
                $data['image_url'] = $trip->image;
            }

            // If everything is OK, then update.
            $trip->update($data);

            /**
             * Set Trip Users
             */
            // Retrieve the user IDs from the request (assuming they're in an array)
            $userIds = $request->input('users');

            // Associate users with the trip by inserting records into the pivot table
            $trip->users()->sync($userIds, true);

            $response_data = Trip::with('destination', 'accommodation', 'users')->find($id);

            Log::warning('$response_data');
            Log::warning($response_data);

            if (is_null($response_data)) {
                return $this->responseError(null, 'Trip Not Found', Response::HTTP_NOT_FOUND);
            }

            return $this->responseSuccess($response_data, 'Trip Updated Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\DELETE(
     *     path="/api/trips/{id}",
     *     tags={"Trips"},
     *     summary="Delete Trip",
     *     description="Delete Trip",
     *     operationId="trip-destroy",
     *     security={{"bearer":{}}},
     *     @OA\Parameter(name="id", description="id, eg; 1", required=true, in="path", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Delete Trip"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function destroy($id): JsonResponse
    {
        try {
            $product = $this->tripRepository->getByID($id);
            if (empty($product)) {
                return $this->responseError(null, 'Trip Not Found', Response::HTTP_NOT_FOUND);
            }

            $deleted = $this->tripRepository->delete($id);
            if ( ! $deleted) {
                return $this->responseError(null, 'Failed to delete the trip.',
                    Response::HTTP_INTERNAL_SERVER_ERROR);
            }

            return $this->responseSuccess($product, 'Trip Deleted Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
