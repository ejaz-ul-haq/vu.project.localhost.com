<?php

namespace App\Http\Controllers;

use App\Http\Requests\NotificationRequest;
use App\Repositories\NotificationRepository;
use App\Traits\ResponseTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class NotificationController extends Controller
{
    /**
     * Response trait to handle return responses.
     */
    use ResponseTrait;

    /**
     * Product Repository class.
     *
     * @var NotificationRepository
     */
    public $notificationRepository;

    public function __construct(NotificationRepository $notificationRepository)
    {
        $this->middleware('auth:api', ['except' => ['indexAll']]);
        $this->notificationRepository = $notificationRepository;
    }

    /**
     * @OA\GET(
     *     path="/api/notifications",
     *     tags={"Notifications"},
     *     summary="Get Notification List",
     *     description="Get Notification List as Array",
     *     operationId="notification-index",
     *     security={{"bearer":{}}},
     *     @OA\Response(response=200,description="Get Notification List as Array"),
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
            $data = $this->notificationRepository->getAll($request);

            Log::warning('$data');
            Log::warning($data);

            return $this->responseSuccess($data, 'Notification List Fetch Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\GET(
     *     path="/api/notifications/view/all",
     *     tags={"Notifications"},
     *     summary="All Notifications - Publicly Accessible",
     *     description="All Notifications - Publicly Accessible",
     *     operationId="notification-indexAll",
     *     @OA\Parameter(name="perPage", description="perPage, eg; 20", example=20, in="query", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="All Notifications - Publicly Accessible" ),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function indexAll(Request $request): JsonResponse
    {
        try {
            $data = $this->notificationRepository->getPaginatedData($request);

            return $this->responseSuccess($data, 'Notification List Fetched Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\GET(
     *     path="/api/notifications/view/search",
     *     tags={"Notifications"},
     *     summary="All Notifications - Publicly Accessible",
     *     description="All Notifications - Publicly Accessible",
     *     operationId="notification-search",
     *     @OA\Parameter(name="perPage", description="perPage, eg; 20", example=20, in="query", @OA\Schema(type="integer")),
     *     @OA\Parameter(name="search", description="search, eg; Test", example="Test", in="query", @OA\Schema(type="string")),
     *     @OA\Response(response=200, description="All Notifications - Publicly Accessible" ),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function search(Request $request): JsonResponse
    {
        try {
            $data = $this->notificationRepository->searchProduct($request->search, $request->perPage);

            return $this->responseSuccess($data, 'Notification List Fetched Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\POST(
     *     path="/api/notifications",
     *     tags={"Notifications"},
     *     summary="Create New Notification",
     *     description="Create New Notification",
     *     operationId="notification-store",
     *     @OA\RequestBody(
     *          @OA\JsonContent(
     *              type="object",
     *              @OA\Property(property="title", type="string", example="Notification 1"),
     *              @OA\Property(property="description", type="string", example="Description"),
     *              @OA\Property(property="image_url", type="string", example=""),
     *          ),
     *      ),
     *      security={{"bearer":{}}},
     *      @OA\Response(response=200, description="Create New Notification" ),
     *      @OA\Response(response=400, description="Bad request"),
     *      @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function store(NotificationRequest $request): JsonResponse
    {
        Log::warning('ejaz-test : store');
        Log::warning('$request');
        Log::warning($request);

        try {
            $notification = $this->notificationRepository->create($request->all());

            return $this->responseSuccess($notification, 'New Notification Created Successfully !');

        } catch (\Exception $exception) {
            return $this->responseError(null, $exception->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\GET(
     *     path="/api/notifications/{id}",
     *     tags={"Notifications"},
     *     summary="Show Notification Details",
     *     description="Show Notification Details",
     *     operationId="notification-show",
     *     security={{"bearer":{}}},
     *     @OA\Parameter(name="id", description="id, eg; 1", required=true, in="path", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Show Notification Details"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function show($id): JsonResponse
    {
        Log::warning('Notification - controller : show');
        Log::warning('$id');
        Log::warning($id);

        try {
            $data = $this->notificationRepository->getByID($id);
//            $data = Notification::where('id', '=', $id);
//            $data =  Notification::where('id',$id);
//            $data =  Notification::find( (int) $id );
//            $data = Notification::where('id', '=', (int)$id);
            Log::warning('$data');
            Log::warning($data);

            if (is_null($data)) {
                return $this->responseError(null, 'Notification Not Found', Response::HTTP_NOT_FOUND);
            }

            return $this->responseSuccess($data, 'Notification Details Fetch Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\PUT(
     *     path="/api/notifications/{id}",
     *     tags={"Notifications"},
     *     summary="Update Notification",
     *     description="Update Notification",
     *     @OA\Parameter(name="id", description="id, eg; 1", required=true, in="path", @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *          @OA\JsonContent(
     *              type="object",
     *              @OA\Property(property="title", type="string", example="Product 1"),
     *              @OA\Property(property="description", type="string", example="Description"),
     *              @OA\Property(property="image_url", type="string", example=""),
     *          ),
     *      ),
     *     operationId="notification-update",
     *     security={{"bearer":{}}},
     *     @OA\Response(response=200, description="Update Notification"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function update(NotificationRequest $request, $id): JsonResponse
    {
        try {
            $data = $this->notificationRepository->update($id, $request->all());
            if (is_null($data)) {
                return $this->responseError(null, 'Notification Not Found', Response::HTTP_NOT_FOUND);
            }

            return $this->responseSuccess($data, 'Notification Updated Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\DELETE(
     *     path="/api/notifications/{id}",
     *     tags={"Notifications"},
     *     summary="Delete Notification",
     *     description="Delete Notification",
     *     operationId="notification-destroy",
     *     security={{"bearer":{}}},
     *     @OA\Parameter(name="id", description="id, eg; 1", required=true, in="path", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Delete Notification"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function destroy($id): JsonResponse
    {
        try {
            $product = $this->notificationRepository->getByID($id);
            if (empty($product)) {
                return $this->responseError(null, 'Notification Not Found', Response::HTTP_NOT_FOUND);
            }

            $deleted = $this->notificationRepository->delete($id);
            if ( ! $deleted) {
                return $this->responseError(null, 'Failed to delete the Notification.',
                    Response::HTTP_INTERNAL_SERVER_ERROR);
            }

            return $this->responseSuccess($product, 'Notification Deleted Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
