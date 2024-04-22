<?php

namespace App\Http\Controllers\Users;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;

use App\Repositories\UserRepository;
use App\Traits\ResponseTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

/* Start Code By M */

use Illuminate\Support\Str;
use App\Helpers\UploadHelper;
use App\Models\User;

use Illuminate\Support\Facades\Log;

/* End Code By M */

class UsersController extends Controller
{
    /**
     * Response trait to handle return responses.
     */
    use ResponseTrait;

    /**
     * User Repository class.
     *
     * @var UserRepository
     */
    public $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->middleware('auth:api', ['except' => ['indexAll']]);
        $this->userRepository = $userRepository;
    }

    /**
     * @OA\GET(
     *     path="/api/users",
     *     tags={"Users"},
     *     summary="Get User List",
     *     description="Get User List as Array",
     *     operationId="user-index",
     *     security={{"bearer":{}}},
     *     @OA\Response(response=200,description="Get User List as Array"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $data = $this->userRepository->getAll($request);

            return $this->responseSuccess($data, 'User List Fetch Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\GET(
     *     path="/api/users/view/all",
     *     tags={"Users"},
     *     summary="All Users - Publicly Accessible",
     *     description="All Users - Publicly Accessible",
     *     operationId="user-indexAll",
     *     @OA\Parameter(name="perPage", description="perPage, eg; 20", example=20, in="query", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="All Users - Publicly Accessible" ),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function indexAll(Request $request): JsonResponse
    {
        try {
            $data = $this->userRepository->getPaginatedData($request);

            return $this->responseSuccess($data, 'User List Fetched Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\GET(
     *     path="/api/users/view/search",
     *     tags={"Users"},
     *     summary="All Users - Publicly Accessible",
     *     description="All Users - Publicly Accessible",
     *     operationId="user-search",
     *     @OA\Parameter(name="perPage", description="perPage, eg; 20", example=20, in="query", @OA\Schema(type="integer")),
     *     @OA\Parameter(name="search", description="search, eg; Test", example="Test", in="query", @OA\Schema(type="string")),
     *     @OA\Response(response=200, description="All Users - Publicly Accessible" ),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function search(Request $request): JsonResponse
    {
        try {
            $data = $this->userRepository->searchUser($request->search, $request->perPage);

            return $this->responseSuccess($data, 'User List Fetched Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\POST(
     *     path="/api/users",
     *     tags={"Users"},
     *     summary="Create New User",
     *     description="Create New User",
     *     operationId="user-store",
     *     @OA\RequestBody(
     *          @OA\JsonContent(
     *              type="object",
     *              @OA\Property(property="title", type="string", example="User 1"),
     *              @OA\Property(property="description", type="string", example="Description"),
     *              @OA\Property(property="price", type="integer", example=10120),
     *              @OA\Property(property="image", type="string", example=""),
     *          ),
     *      ),
     *      security={{"bearer":{}}},
     *      @OA\Response(response=200, description="Create New User" ),
     *      @OA\Response(response=400, description="Bad request"),
     *      @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function store(UserRequest $request): JsonResponse
    {
        try {

            /* Start Comment By M */

            // $user = $this->userRepository->create($request->all());

            /* End Comment By M */

            /* Start Code By M */

            $data = $request->all();

            $titleShort = Str::slug(substr($data['name'], 0, 20));

            if ( ! empty($data['image'])) {

                $data['image_url'] = UploadHelper::upload( $data['image'], $titleShort, 'images/users' );

            }

            $response = User::create($data);

            return $this->responseSuccess($response, 'New User Created Successfully !');

            /* End Code By M */

            /* Start Comment By M */

            // return $this->responseSuccess($user, 'New User Created Successfully !');

            /* End Comment By M */

        } catch (\Exception $exception) {
            return $this->responseError(null, $exception->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\GET(
     *     path="/api/users/{id}",
     *     tags={"Users"},
     *     summary="Show User Details",
     *     description="Show User Details",
     *     operationId="user-show",
     *     security={{"bearer":{}}},
     *     @OA\Parameter(name="id", description="id, eg; 1", required=true, in="path", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Show User Details"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function show($id): JsonResponse
    {
        try {
            $data = $this->userRepository->getByID($id);
            if (is_null($data)) {
                return $this->responseError(null, 'User Not Found', Response::HTTP_NOT_FOUND);
            }

            return $this->responseSuccess($data, 'User Details Fetch Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\PUT(
     *     path="/api/users/{id}",
     *     tags={"Users"},
     *     summary="Update User",
     *     description="Update User",
     *     @OA\Parameter(name="id", description="id, eg; 1", required=true, in="path", @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *          @OA\JsonContent(
     *              type="object",
     *              @OA\Property(property="title", type="string", example="User 1"),
     *              @OA\Property(property="description", type="string", example="Description"),
     *              @OA\Property(property="price", type="integer", example=10120),
     *              @OA\Property(property="image", type="string", example=""),
     *          ),
     *      ),
     *     operationId="user-update",
     *     security={{"bearer":{}}},
     *     @OA\Response(response=200, description="Update User"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function update(UserRequest $request, $id): JsonResponse
    {
        try {
            // $data = $this->userRepository->update($id, $request->all());

            $user = User::find($id);
            $data = $request->all();

        if ( ! empty($data['image'])) {

            $titleShort = Str::slug(substr($data['name'], 0, 20));
            if ( ! empty($data['image'])) {
                $data['image_url'] = UploadHelper::upload( $data['image'], $titleShort, 'images/users' );
            }
        } else {
            $data['image_url'] = $user->image_url;
        }

        if (is_null($user)) {
            return null;
        }

        // If everything is OK, then update.
        $user->update($data);

        // Finally return the updated User.
        $data = User::find($id);

            if (is_null($data)) {
                return $this->responseError(null, 'User Not Found', Response::HTTP_NOT_FOUND);
            }

            return $this->responseSuccess($data, 'User Updated Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @OA\DELETE(
     *     path="/api/users/{id}",
     *     tags={"Users"},
     *     summary="Delete User",
     *     description="Delete User",
     *     operationId="user-destroy",
     *     security={{"bearer":{}}},
     *     @OA\Parameter(name="id", description="id, eg; 1", required=true, in="path", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Delete User"),
     *     @OA\Response(response=400, description="Bad request"),
     *     @OA\Response(response=404, description="Resource Not Found"),
     * )
     */
    public function destroy($id): JsonResponse
    {
        try {
            $user = $this->userRepository->getByID($id);
            if (empty($user)) {
                return $this->responseError(null, 'User Not Found', Response::HTTP_NOT_FOUND);
            }

            $deleted = $this->userRepository->delete($id);
            if ( ! $deleted) {
                return $this->responseError(null, 'Failed to delete the User.',
                    Response::HTTP_INTERNAL_SERVER_ERROR);
            }

            return $this->responseSuccess($user, 'User Deleted Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
