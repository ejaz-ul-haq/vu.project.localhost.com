<?php

namespace App\Http\Controllers\Accommodations;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Requests\AccommodationRequest;

use App\Repositories\AccommodationRepository;
use App\Traits\ResponseTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

use Illuminate\Support\Str;
use App\Helpers\UploadHelper;
use App\Interfaces\CrudInterface;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;

use App\Models\Accommodation;
use App\Models\User;

use Illuminate\Support\Facades\Log;

class AccommodationsController extends Controller
{
    /**
     * Response trait to handle return responses.
     */
    use ResponseTrait;

    /**
     * Product Repository class.
     *
     * @var AccommodationRepository
     */
    public $AccommodationRepository;

    public function __construct(AccommodationRepository $AccommodationRepository)
    {
        $this->middleware('auth:api', ['except' => ['indexAll']]);
        $this->AccommodationRepository = $AccommodationRepository;
    }

    /**
     * @OA\GET(
     *     path="/api/accommodations",
     *     tags={"Accommodations"},
     *     summary="Get Accommodation List",
     *     description="Get Accommodation List as Array",
     *     operationId="accommodation-index",
     *     security={{"bearer":{}}},
     *     @OA\Response(response=200,description="Get Accommodation List as Array"),
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
            $data = $this->AccommodationRepository->getAll($request);

            Log::warning('$data');
            Log::warning($data);

            return $this->responseSuccess($data, 'Accommodation List Fetch Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\GET(
     *     path="/api/accommodations/view/all",
     *     tags={"Accommodations"},
     *     summary="All Accommodations - Publicly Accessible",
     *     description="All Accommodations - Publicly Accessible",
     *     operationId="accommodation-indexAll",
     *     @OA\Parameter(name="perPage", description="perPage, eg; 20", example=20, in="query", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="All Accommodations - Publicly Accessible" ),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function indexAll(Request $request): JsonResponse
    {
        try {
            $data = $this->AccommodationRepository->getPaginatedData($request->perPage);

            return $this->responseSuccess($data, 'Accommodation List Fetched Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\GET(
     *     path="/api/accommodations/view/search",
     *     tags={"Accommodations"},
     *     summary="All Accommodations - Publicly Accessible",
     *     description="All Accommodations - Publicly Accessible",
     *     operationId="accommodation-search",
     *     @OA\Parameter(name="perPage", description="perPage, eg; 20", example=20, in="query", @OA\Schema(type="integer")),
     *     @OA\Parameter(name="search", description="search, eg; Test", example="Test", in="query", @OA\Schema(type="string")),
     *     @OA\Response(response=200, description="All Accommodations - Publicly Accessible" ),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function search(Request $request): JsonResponse
    {
        try {
            $data = $this->AccommodationRepository->searchProduct($request->search, $request->perPage);

            return $this->responseSuccess($data, 'Accommodation List Fetched Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\POST(
     *     path="/api/accommodations",
     *     tags={"Accommodations"},
     *     summary="Create New Accommodation",
     *     description="Create New Accommodation",
     *     operationId="accommodation-store",
     *     @OA\RequestBody(
     *          @OA\JsonContent(
     *              type="object",
     *              @OA\Property(property="title", type="string", example="Accommodation 1"),
     *              @OA\Property(property="description", type="string", example="Description"),
     *              @OA\Property(property="image_url", type="string", example=""),
     *          ),
     *      ),
     *      security={{"bearer":{}}},
     *      @OA\Response(response=200, description="Create New Accommodation" ),
     *      @OA\Response(response=400, description="Bad request"),
     *      @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function store(AccommodationRequest $request): JsonResponse
    {
        Log::warning('ejaz-test : store');
        Log::warning('$request');
        Log::warning($request);

        try {
//            $product = $this->AccommodationRepository->create($request->all());
//            return $this->responseSuccess($product, 'New Accommodation Created Successfully !');

//            $product = $this->productRepository->create($request->all());
            $data = $request->all();

            Log::warning('$data');
            Log::warning($data);

            $titleShort = Str::slug(substr($data['title'], 0, 20));
//            $data['user_id'] = $this->user->id;

            if ( ! empty($data['image'])) {
                $data['image_url'] = url('')."/images/accommodations/".UploadHelper::upload('image', $data['image'],
                        $titleShort, 'images/accommodations');
            }

            $response = Accommodation::create($data);

            return $this->responseSuccess($response, 'New Accommodation Created Successfully !');

        } catch (\Exception $exception) {
            return $this->responseError(null, $exception->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\GET(
     *     path="/api/accommodations/{id}",
     *     tags={"Accommodations"},
     *     summary="Show Accommodation Details",
     *     description="Show Accommodation Details",
     *     operationId="accommodation-show",
     *     security={{"bearer":{}}},
     *     @OA\Parameter(name="id", description="id, eg; 1", required=true, in="path", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Show Accommodation Details"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function show($id): JsonResponse
    {
        Log::warning('Accommodation - controller : show');
        Log::warning('$id');
        Log::warning($id);

        try {
            $data = $this->AccommodationRepository->getByID($id);
//            $data = Accommodation::where('id', '=', $id);
//            $data =  Accommodation::where('id',$id);
//            $data =  Accommodation::find( (int) $id );
//            $data = Accommodation::where('id', '=', (int)$id);
            Log::warning('$data');
            Log::warning($data);

            if (is_null($data)) {
                return $this->responseError(null, 'Accommodation Not Found', Response::HTTP_NOT_FOUND);
            }

            return $this->responseSuccess($data, 'Accommodation Details Fetch Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\PUT(
     *     path="/api/accommodations/{id}",
     *     tags={"Accommodations"},
     *     summary="Update Accommodation",
     *     description="Update Accommodation",
     *     @OA\Parameter(name="id", description="id, eg; 1", required=true, in="path", @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *          @OA\JsonContent(
     *              type="object",
     *              @OA\Property(property="title", type="string", example="Product 1"),
     *              @OA\Property(property="description", type="string", example="Description"),
     *              @OA\Property(property="image_url", type="string", example=""),
     *          ),
     *      ),
     *     operationId="accommodation-update",
     *     security={{"bearer":{}}},
     *     @OA\Response(response=200, description="Update Accommodation"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function update(AccommodationRequest $request, $id): JsonResponse
    {
        try {
            $data = $this->AccommodationRepository->update($id, $request->all());
            if (is_null($data)) {
                return $this->responseError(null, 'Accommodation Not Found', Response::HTTP_NOT_FOUND);
            }

            return $this->responseSuccess($data, 'Accommodation Updated Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\DELETE(
     *     path="/api/accommodations/{id}",
     *     tags={"Accommodations"},
     *     summary="Delete Accommodation",
     *     description="Delete Accommodation",
     *     operationId="accommodation-destroy",
     *     security={{"bearer":{}}},
     *     @OA\Parameter(name="id", description="id, eg; 1", required=true, in="path", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Delete Accommodation"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function destroy($id): JsonResponse
    {
        try {
            $product = $this->AccommodationRepository->getByID($id);
            if (empty($product)) {
                return $this->responseError(null, 'Accommodation Not Found', Response::HTTP_NOT_FOUND);
            }

            $deleted = $this->AccommodationRepository->delete($id);
            if ( ! $deleted) {
                return $this->responseError(null, 'Failed to delete the Accommodation.',
                    Response::HTTP_INTERNAL_SERVER_ERROR);
            }

            return $this->responseSuccess($product, 'Accommodation Deleted Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
