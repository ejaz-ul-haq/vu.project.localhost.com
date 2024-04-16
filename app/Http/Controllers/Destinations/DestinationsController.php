<?php

namespace App\Http\Controllers\Destinations;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Requests\DestinationRequest;

use App\Repositories\DestinationRepository;
use App\Traits\ResponseTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

use Illuminate\Support\Str;
use App\Helpers\UploadHelper;
use App\Interfaces\CrudInterface;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;

use App\Models\Destination;
use App\Models\User;

use Illuminate\Support\Facades\Log;

class DestinationsController extends Controller
{
    /**
     * Response trait to handle return responses.
     */
    use ResponseTrait;

    /**
     * Product Repository class.
     *
     * @var DestinationRepository
     */
    public $destinationRepository;

    public function __construct(DestinationRepository $destinationRepository)
    {
        $this->middleware('auth:api', ['except' => ['indexAll']]);
        $this->destinationRepository = $destinationRepository;
    }

    /**
     * @OA\GET(
     *     path="/api/destinations",
     *     tags={"Destinations"},
     *     summary="Get Destination List",
     *     description="Get Destination List as Array",
     *     operationId="destination-index",
     *     security={{"bearer":{}}},
     *     @OA\Response(response=200,description="Get Destination List as Array"),
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

            $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
            $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
            $order   = isset($request['order']) ? $request['order'] : 'desc';

            $data = Destination::orderBy($orderBy, $order)
                              ->paginate($perPage);

            Log::warning('$data');
            Log::warning($data);

            return $this->responseSuccess($data, 'Destination List Fetch Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\GET(
     *     path="/api/destinations/view/all",
     *     tags={"Destinations"},
     *     summary="All Destinations - Publicly Accessible",
     *     description="All Destinations - Publicly Accessible",
     *     operationId="destination-indexAll",
     *     @OA\Parameter(name="perPage", description="perPage, eg; 20", example=20, in="query", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="All Destinations - Publicly Accessible" ),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function indexAll(Request $request): JsonResponse
    {
        try {

            $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
            $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
            $order   = isset($request['order']) ? $request['order'] : 'desc';

            $data = Destination::orderBy($orderBy, $order)
                              ->paginate($perPage);

            return $this->responseSuccess($data, 'Destination List Fetched Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\GET(
     *     path="/api/destinations/view/search",
     *     tags={"Destinations"},
     *     summary="All Destinations - Publicly Accessible",
     *     description="All Destinations - Publicly Accessible",
     *     operationId="destination-search",
     *     @OA\Parameter(name="perPage", description="perPage, eg; 20", example=20, in="query", @OA\Schema(type="integer")),
     *     @OA\Parameter(name="search", description="search, eg; Test", example="Test", in="query", @OA\Schema(type="string")),
     *     @OA\Response(response=200, description="All Destinations - Publicly Accessible" ),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function search(Request $request): JsonResponse
    {
        try {
            $perPage = isset($request->perPage) ? intval($request->perPage) : 10;

            $data = Destination::where('title', 'like', '%'.$request->search.'%')
                              ->orWhere('description', 'like', '%'.$request->search.'%')
                              ->orWhere('price', 'like', '%'.$request->search.'%')
                              ->orderBy('id', 'desc')
                              ->with('user')
                              ->paginate($perPage);

            return $this->responseSuccess($data, 'Destination List Fetched Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\POST(
     *     path="/api/destinations",
     *     tags={"Destinations"},
     *     summary="Create New Destination",
     *     description="Create New Destination",
     *     operationId="destination-store",
     *     @OA\RequestBody(
     *          @OA\JsonContent(
     *              type="object",
     *              @OA\Property(property="title", type="string", example="Destination 1"),
     *              @OA\Property(property="description", type="string", example="Description"),
     *              @OA\Property(property="image_url", type="string", example=""),
     *          ),
     *      ),
     *      security={{"bearer":{}}},
     *      @OA\Response(response=200, description="Create New Destination" ),
     *      @OA\Response(response=400, description="Bad request"),
     *      @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function store(DestinationRequest $request): JsonResponse
    {
        Log::warning('ejaz-test : store');
        Log::warning('$request');
        Log::warning($request);

        try {

            $data = $request->all();

            Log::warning('$data');
            Log::warning($data);

            $titleShort = Str::slug(substr($data['title'], 0, 20));
//            $data['user_id'] = $this->user->id;

            if ( ! empty($data['image'])) {
                $data['image_url'] = UploadHelper::upload( $data['image'], $titleShort, 'images/destinations' );
            }

            $response = Destination::create($data);

            return $this->responseSuccess($response, 'New Destination Created Successfully !');

        } catch (\Exception $exception) {
            return $this->responseError(null, $exception->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\GET(
     *     path="/api/destinations/{id}",
     *     tags={"Destinations"},
     *     summary="Show Destination Details",
     *     description="Show Destination Details",
     *     operationId="destination-show",
     *     security={{"bearer":{}}},
     *     @OA\Parameter(name="id", description="id, eg; 1", required=true, in="path", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Show Destination Details"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function show($id): JsonResponse
    {
        Log::warning('destination - controller : show');
        Log::warning('$id');
        Log::warning($id);

        try {

            $data = Destination::find($id);

            Log::warning('$data');
            Log::warning($data);

            if (is_null($data)) {
                return $this->responseError(null, 'Destination Not Found', Response::HTTP_NOT_FOUND);
            }

            return $this->responseSuccess($data, 'Destination Details Fetch Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\PUT(
     *     path="/api/destinations/{id}",
     *     tags={"Destinations"},
     *     summary="Update Destination",
     *     description="Update Destination",
     *     @OA\Parameter(name="id", description="id, eg; 1", required=true, in="path", @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *          @OA\JsonContent(
     *              type="object",
     *              @OA\Property(property="title", type="string", example="Product 1"),
     *              @OA\Property(property="description", type="string", example="Description"),
     *              @OA\Property(property="image_url", type="string", example=""),
     *          ),
     *      ),
     *     operationId="destination-update",
     *     security={{"bearer":{}}},
     *     @OA\Response(response=200, description="Update Destination"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function update(DestinationRequest $request, $id): JsonResponse
    {
        Log::warning('destination - controller : update');
        Log::warning('$id');
        Log::warning($id);

        Log::warning('$request');
        Log::warning($request);

        try {

            $destination = Destination::find($id);
            $data = $request->all();
            if ( ! empty($data['image'])) {
                $titleShort    = Str::slug(substr($data['title'], 0, 20));
                $data['image_url'] = UploadHelper::upload( $data['image'], $titleShort, 'images/destinations' );
            } else {
                $data['image_url'] = $destination->image;
            }

            Log::warning('$data - before update');
            Log::warning($data);

            // If everything is OK, then update.
            $destination->update($data);

            // Finally return the updated Destination.
            return $this->responseSuccess(Destination::find($id), 'Destination Updated Successfully !');

        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }

    /**
     * @OA\DELETE(
     *     path="/api/destinations/{id}",
     *     tags={"Destinations"},
     *     summary="Delete Destination",
     *     description="Delete Destination",
     *     operationId="destination-destroy",
     *     security={{"bearer":{}}},
     *     @OA\Parameter(name="id", description="id, eg; 1", required=true, in="path", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Delete Destination"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function destroy($id): JsonResponse
    {
        try {
            $destination = Destination::find($id);
            if (empty($destination)) {
                return $this->responseError(null, 'Destination Not Found', Response::HTTP_NOT_FOUND);
            }

            UploadHelper::deleteFile('images/destinations/'.$destination->image_url);
            $deleted = $destination->delete($destination);

            if ( ! $deleted) {
                return $this->responseError(null, 'Failed to delete the destination.',
                    Response::HTTP_INTERNAL_SERVER_ERROR);
            }

            return $this->responseSuccess($destination, 'Destination Deleted Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
