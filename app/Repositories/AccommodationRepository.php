<?php

namespace App\Repositories;

use Illuminate\Support\Str;
use App\Helpers\UploadHelper;
use App\Interfaces\CrudInterface;
use App\Models\Accommodation;
use App\Models\User;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;

class AccommodationRepository implements CrudInterface
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
     * Get All Accommodations.
     *
     * @return collections Array of Accommodation Collection
     */
    public function getAll($request): Paginator
    {
        $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
        $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
        $order   = isset($request['order']) ? $request['order'] : 'desc';

        return Accommodation::orderBy($orderBy, $order)
                            ->paginate($perPage);
    }

    /**
     * Get Paginated Accommodation Data.
     *
     * @param  int  $pageNo
     *
     * @return collections Array of Accommodation Collection
     */
    public function getPaginatedData($perPage): Paginator
    {
        $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
        $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
        $order   = isset($request['order']) ? $request['order'] : 'desc';

        return Accommodation::orderBy($orderBy, $order)
                            ->paginate($perPage);
    }

    /**
     * Get Searchable Accommodation Data with Pagination.
     *
     * @param  int  $pageNo
     *
     * @return collections Array of Accommodation Collection
     */
    public function searchAccommodation($keyword, $perPage): Paginator
    {
        $perPage = isset($perPage) ? intval($perPage) : 10;

        return Accommodation::where('title', 'like', '%'.$keyword.'%')
                            ->orWhere('description', 'like', '%'.$keyword.'%')
                            ->orWhere('price', 'like', '%'.$keyword.'%')
                            ->orderBy('id', 'desc')
                            ->with('user')
                            ->paginate($perPage);
    }

    /**
     * Create New Accommodation.
     *
     * @param  array  $data
     *
     * @return object Accommodation Object
     */
    public function create(array $data): Accommodation
    {
        $titleShort      = Str::slug(substr($data['title'], 0, 20));
        $data['user_id'] = $this->user->id;

        if ( ! empty($data['image'])) {
            $data['image'] = UploadHelper::upload('image', $data['image'], $titleShort.'-'.time(),
                'images/accommodations');
        }

        return Accommodation::create($data);
    }

    /**
     * Delete Accommodation.
     *
     * @param  int  $id
     *
     * @return boolean true if deleted otherwise false
     */
    public function delete(int $id): bool
    {
        $accommodation = Accommodation::find($id);
        if (empty($accommodation)) {
            return false;
        }

        UploadHelper::deleteFile('images/accommodations/'.$accommodation->image);
        $accommodation->delete($accommodation);

        return true;
    }

    /**
     * Get Accommodation Detail By ID.
     *
     * @param  int  $id
     *
     * @return void
     */
    public function getByID(int $id): Accommodation|null
    {
        return Accommodation::find($id);
    }

    /**
     * Update Accommodation By ID.
     *
     * @param  int  $id
     * @param  array  $data
     *
     * @return object Updated Accommodation Object
     */
    public function update(int $id, array $data): Accommodation|null
    {
        $accommodation = Accommodation::find($id);
        if ( ! empty($data['image'])) {
            $titleShort        = Str::slug(substr($data['title'], 0, 20));
            $data['image_url'] = UploadHelper::update('image', $data['image'], $titleShort.'-'.time(),
                'images/accommodations',
                $accommodation->image);
        } else {
            $data['image_url'] = $accommodation->image;
        }

        if (is_null($accommodation)) {
            return null;
        }

        // If everything is OK, then update.
        $accommodation->update($data);

        // Finally return the updated accommodation.
        return $this->getByID($accommodation->id);
    }
}
