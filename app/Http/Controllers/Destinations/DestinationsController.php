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
            $data = $this->destinationRepository->getAll($request);

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
            $data = $this->destinationRepository->getPaginatedData($request);

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
            $data = $this->destinationRepository->searchProduct($request->search, $request->perPage);

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
//            $product = $this->destinationRepository->create($request->all());
//            return $this->responseSuccess($product, 'New Destination Created Successfully !');

//            $product = $this->productRepository->create($request->all());
            $data = $request->all();

            Log::warning('$data');
            Log::warning($data);

            $titleShort = Str::slug(substr($data['title'], 0, 20));
//            $data['user_id'] = $this->user->id;

            if ( ! empty($data['image'])) {
                $data['image_url'] = url('')."/images/destinations/".UploadHelper::upload('image', $data['image'],
                        $titleShort, 'images/destinations');
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
            $data = $this->destinationRepository->getByID($id);
//            $data = Destination::where('id', '=', $id);
//            $data =  Destination::where('id',$id);
//            $data =  Destination::find( (int) $id );
//            $data = Destination::where('id', '=', (int)$id);
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
        try {
            $data = $this->destinationRepository->update($id, $request->all());
            if (is_null($data)) {
                return $this->responseError(null, 'Destination Not Found', Response::HTTP_NOT_FOUND);
            }

            return $this->responseSuccess($data, 'Destination Updated Successfully !');
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
            $product = $this->destinationRepository->getByID($id);
            if (empty($product)) {
                return $this->responseError(null, 'Destination Not Found', Response::HTTP_NOT_FOUND);
            }

            $deleted = $this->destinationRepository->delete($id);
            if ( ! $deleted) {
                return $this->responseError(null, 'Failed to delete the destination.',
                    Response::HTTP_INTERNAL_SERVER_ERROR);
            }

            return $this->responseSuccess($product, 'Destination Deleted Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
