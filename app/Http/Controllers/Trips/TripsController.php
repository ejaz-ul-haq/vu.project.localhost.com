<?php

namespace App\Http\Controllers\Trips;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\TripRequest;

use App\Repositories\TripRepository;
use App\Traits\ResponseTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

use Illuminate\Support\Str;
use App\Helpers\UploadHelper;
use App\Interfaces\CrudInterface;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;

use App\Models\Trip;
use App\Models\Accommodation;
use App\Models\Destination;
use App\Models\User;

use Illuminate\Support\Facades\Log;

class TripsController extends Controller
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
        Log::warning('ejaz-test : index');
        Log::warning('$request');
        Log::warning($request);

        try {
            $data = $this->tripRepository->getAll($request);

            Log::warning('$data');
            Log::warning($data);

            return $this->responseSuccess($data, 'Trip List Fetch Successfully !');
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
            $trip = $this->tripRepository->create($request->all());

            return $this->responseSuccess($trip, 'New Trip Created Successfully !');

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
//            $data = $this->tripRepository->getByID($id);
            // $data = Trip::find($id)
            // // $data = Trip::where('id', '==', $id);
            // // ->with('destination')
            // ->with('accommodation');

            $data = Trip::with('destination', 'accommodation')->find($id);

            // $data['accommodation'] = Accommodation::find($data['accommodation_id']);
            // $data['destination'] = Destination::find($data['destination_id']);

            Log::warning('trip - controller : show - $data');
            Log::warning($data);

            if (is_null($data)) {
                return $this->responseError(null, 'Trip Not Found', Response::HTTP_NOT_FOUND);
            }

            return $this->responseSuccess($data, 'Trip Details Fetch Successfully !');
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
            $data = $this->tripRepository->update($id, $request->all());
            if (is_null($data)) {
                return $this->responseError(null, 'Trip Not Found', Response::HTTP_NOT_FOUND);
            }

            return $this->responseSuccess($data, 'Trip Updated Successfully !');
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
