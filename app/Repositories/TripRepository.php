<?php

namespace App\Repositories;

use Illuminate\Support\Str;
use App\Helpers\UploadHelper;
use App\Interfaces\CrudInterface;
use App\Models\Trip;
use App\Models\User;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class TripRepository implements CrudInterface
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
     * Get All Trips.
     *
     * @return collections Array of Trip Collection
     */
    public function getAll($request): Paginator
    {
        $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
        $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
        $order   = isset($request['order']) ? $request['order'] : 'desc';

        return Trip::orderBy($orderBy, $order)
                  ->with('destination')
                  ->with('accommodation')
                   ->paginate($perPage);

    }

    /**
     * Get Paginated Product Data.
     *
     * @param  int  $pageNo
     *
     * @return collections Array of Trip Collection
     */
    public function getPaginatedData($request): Paginator
    {
        $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
        $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
        $order   = isset($request['order']) ? $request['order'] : 'desc';

        return Trip::orderBy($orderBy, $order)
                    ->with('destination')
                    ->with('accommodation')
                   ->paginate($perPage);

    }

    /**
     * Get Searchable Trip Data with Pagination.
     *
     * @param  int  $pageNo
     *
     * @return collections Array of Trip Collection
     */
    public function searchProduct($keyword, $perPage): Paginator
    {
        $perPage = isset($perPage) ? intval($perPage) : 10;

        return Trip::where('title', 'like', '%'.$keyword.'%')
                   ->orWhere('description', 'like', '%'.$keyword.'%')
                   ->orWhere('price', 'like', '%'.$keyword.'%')
                   ->orderBy('id', 'desc')
                   ->with('user')
                   ->paginate($perPage);
    }

    /**
     * Create New Trip.
     *
     * @param  array  $data
     *
     * @return object Trip Object
     */
    public function create(array $data): Trip
    {
        $data['travel_mates'] = (isset($data['travel_mates']) && is_array($data['travel_mates'])) ? serialize($data['travel_mates']) : '';

        return Trip::create($data);
    }

    /**
     * Delete Trip.
     *
     * @param  int  $id
     *
     * @return boolean true if deleted otherwise false
     */
    public function delete(int $id): bool
    {
        $trip = Trip::find($id);
        if (empty($trip)) {
            return false;
        }

        UploadHelper::deleteFile('images/products/'.$trip->image);
        $trip->delete($trip);

        return true;
    }

    /**
     * Get Trip Detail By ID.
     *
     * @param  int  $id
     *
     * @return void
     */
    public function getByID(int $id): Trip|null
    {
        return Trip::find($id);
    }

    /**
     * Update Trip By ID.
     *
     * @param  int  $id
     * @param  array  $data
     *
     * @return object Updated Trip Object
     */
    public function update(int $id, array $data): Trip|null
    {
        $trip = Trip::find($id);

        $data['travel_mates'] = (isset($data['travel_mates']) && is_array($data['travel_mates'])) ? serialize($data['travel_mates']) : '';

        if (is_null($trip)) {
            return null;
        }

        // If everything is OK, then update.
        $trip->update($data);

        // Finally return the updated product.
        return $this->getByID($trip->id);
    }
}
