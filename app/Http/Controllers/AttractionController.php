<?php

namespace App\Http\Controllers;

use App\Helpers\UploadHelper;
use App\Http\Requests\AttractionRequest;
use App\Models\Attraction;
use App\Traits\ResponseTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class AttractionController extends Controller
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

            $data = Attraction::orderBy($orderBy, $order)
                                ->paginate($perPage);

            Log::warning('$data');
            Log::warning($data);

            return $this->responseSuccess($data, 'Attraction List Fetch Successfully !');
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

            $data = Attraction::orderBy($orderBy, $order)
                                    ->paginate($perPage);

            return $this->responseSuccess($data, 'Attraction List Fetched Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function search(Request $request): JsonResponse
    {
        try {

            $perPage = isset($perPage) ? intval($perPage) : 10;

            $data = Attraction::where('title', 'like', '%'.$keyword.'%')
                            ->orWhere('description', 'like', '%'.$keyword.'%')
                            ->orWhere('price', 'like', '%'.$keyword.'%')
                            ->orderBy('id', 'desc')
                            ->with('user')
                            ->paginate($perPage);

            return $this->responseSuccess($data, 'Attraction List Fetched Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function store(AttractionRequest $request): JsonResponse
    {
        Log::warning('ejaz-test : store');
        Log::warning('$request');
        Log::warning($request);

        try {

            $data = $request->all();

            Log::warning('$data');
            Log::warning($data);

            $titleShort = Str::slug(substr($data['title'], 0, 100));

            if ( ! empty($data['image'])) {

                $data['image_url'] = UploadHelper::upload( $data['image'], $titleShort, 'images/attractions' );

            }

            $response = Attraction::create($data);

            return $this->responseSuccess($response, 'New Attraction Created Successfully !');

        } catch (\Exception $exception) {
            return $this->responseError(null, $exception->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function show($id): JsonResponse
    {
        Log::warning('Attraction - controller : show');
        Log::warning('$id');
        Log::warning($id);

        try {

            $data = Attraction::find($id);

            Log::warning('$data');
            Log::warning($data);

            if (is_null($data)) {
                return $this->responseError(null, 'Attraction Not Found', Response::HTTP_NOT_FOUND);
            }

            return $this->responseSuccess($data, 'Attraction Details Fetch Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function update(AttractionRequest $request, $id): JsonResponse
    {
        try {

            $data = $request->all();
            $attraction = Attraction::find($id);
            if ( ! empty($data['image'])) {
                $titleShort    = Str::slug(substr($data['title'], 0, 100));
                $data['image_url'] = UploadHelper::upload( $data['image'], $titleShort, 'images/attractions' );
            } else {
                $data['image_url'] = $attraction->image;
            }

            Log::warning('$data - before update');
            Log::warning($data);

            // If everything is OK, then update.
            $attraction->update($data);

            // Finally return the updated attraction.
            return $this->responseSuccess(Attraction::find($id), 'Attraction Updated Successfully !');

        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function destroy($id): JsonResponse
    {
        try {
            $attraction = Attraction::find($id);
            if (empty($attraction)) {
                return $this->responseError(null, 'Attraction Not Found', Response::HTTP_NOT_FOUND);
            }

            UploadHelper::deleteFile('images/attractions/'.$attraction->image_url);
            $deleted = $attraction->delete($attraction);

            if ( ! $deleted) {
                return $this->responseError(null, 'Failed to delete the Attraction.',
                    Response::HTTP_INTERNAL_SERVER_ERROR);
            }

            return $this->responseSuccess($attraction, 'Attraction Deleted Successfully !');
        } catch (\Exception $e) {
            return $this->responseError(null, $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
