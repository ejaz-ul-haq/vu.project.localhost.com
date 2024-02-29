<?php

namespace App\Repositories;

use Illuminate\Support\Str;
use App\Helpers\UploadHelper;
use App\Interfaces\CrudInterface;
use App\Models\Destination;
use App\Models\User;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;

class DestinationRepository implements CrudInterface
{
    /**
     * Authenticated User Instance.
     *
     * @var User
     */
    public User|null $user;

    /**
     * Constructor.
     */
    public function __construct()
    {
        $this->user = Auth::guard()->user();
    }

    /**
     * Get All Destinations.
     *
     * @return collections Array of Destination Collection
     */
    public function getAll($request): Paginator
    {
        $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
        $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
        $order   = isset($request['order']) ? $request['order'] : 'desc';

        return Destination::orderBy($orderBy, $order)
                          ->paginate($perPage);
    }

    /**
     * Get Paginated Product Data.
     *
     * @param  int  $pageNo
     *
     * @return collections Array of Destination Collection
     */
    public function getPaginatedData($request): Paginator
    {
        $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
        $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
        $order   = isset($request['order']) ? $request['order'] : 'desc';

        return Destination::orderBy($orderBy, $order)
                          ->paginate($perPage);
    }

    /**
     * Get Searchable Destination Data with Pagination.
     *
     * @param  int  $pageNo
     *
     * @return collections Array of Destination Collection
     */
    public function searchProduct($keyword, $perPage): Paginator
    {
        $perPage = isset($perPage) ? intval($perPage) : 10;

        return Destination::where('title', 'like', '%'.$keyword.'%')
                          ->orWhere('description', 'like', '%'.$keyword.'%')
                          ->orWhere('price', 'like', '%'.$keyword.'%')
                          ->orderBy('id', 'desc')
                          ->with('user')
                          ->paginate($perPage);
    }

    /**
     * Create New Destination.
     *
     * @param  array  $data
     *
     * @return object Destination Object
     */
    public function create(array $data): Destination
    {
        $titleShort      = Str::slug(substr($data['title'], 0, 20));
        $data['user_id'] = $this->user->id;

        if ( ! empty($data['image'])) {
            $data['image'] = UploadHelper::upload('image', $data['image'], $titleShort.'-'.time(), 'images/products');
        }

        return Destination::create($data);
    }

    /**
     * Delete Destination.
     *
     * @param  int  $id
     *
     * @return boolean true if deleted otherwise false
     */
    public function delete(int $id): bool
    {
        $product = Destination::find($id);
        if (empty($product)) {
            return false;
        }

        UploadHelper::deleteFile('images/products/'.$product->image);
        $product->delete($product);

        return true;
    }

    /**
     * Get Destination Detail By ID.
     *
     * @param  int  $id
     *
     * @return void
     */
    public function getByID(int $id): Destination|null
    {
//        return Destination::with('user')->find($id);
//        return Destination::with('user')->find($id);
//        return Destination::where('id', '==', $id);
//        return Destination::find( (int) $id );
        return Destination::find($id);
    }

    /**
     * Update Destination By ID.
     *
     * @param  int  $id
     * @param  array  $data
     *
     * @return object Updated Destination Object
     */
    public function update(int $id, array $data): Destination|null
    {
        $product = Destination::find($id);
        if ( ! empty($data['image'])) {
            $titleShort    = Str::slug(substr($data['title'], 0, 20));
            $data['image'] = UploadHelper::update('image', $data['image'], $titleShort.'-'.time(), 'images/products',
                $product->image);
        } else {
            $data['image'] = $product->image;
        }

        if (is_null($product)) {
            return null;
        }

        // If everything is OK, then update.
        $product->update($data);

        // Finally return the updated product.
        return $this->getByID($product->id);
    }
}
