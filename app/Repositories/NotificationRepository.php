<?php

namespace App\Repositories;

use Illuminate\Support\Str;
use App\Helpers\UploadHelper;
use App\Interfaces\CrudInterface;
use App\Models\Notification;
use App\Models\User;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;

class NotificationRepository implements CrudInterface
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
     * Get All Notifications.
     *
     * @return collections Array of Notification Collection
     */
    public function getAll($request): Paginator
    {
        $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
        $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
        $order   = isset($request['order']) ? $request['order'] : 'desc';

        return Notification::orderBy($orderBy, $order)
                           ->paginate($perPage);
    }

    /**
     * Get Paginated Notification Data.
     *
     * @param  int  $pageNo
     *
     * @return collections Array of Notification Collection
     */
    public function getPaginatedData($request): Paginator
    {
        $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
        $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
        $order   = isset($request['order']) ? $request['order'] : 'desc';

        return Notification::orderBy($orderBy, $order)
                           ->paginate($perPage);
    }

    /**
     * Get Searchable Notification Data with Pagination.
     *
     * @param  int  $pageNo
     *
     * @return collections Array of Notification Collection
     */
    public function searchNotification($keyword, $perPage): Paginator
    {
        $perPage = isset($perPage) ? intval($perPage) : 10;

        return Notification::where('title', 'like', '%'.$keyword.'%')
                           ->orWhere('description', 'like', '%'.$keyword.'%')
                           ->orWhere('price', 'like', '%'.$keyword.'%')
                           ->orderBy('id', 'desc')
                           ->with('user')
                           ->paginate($perPage);
    }

    /**
     * Create New Notification.
     *
     * @param  array  $data
     *
     * @return object Notification Object
     */
    public function create(array $data): Notification
    {
        return Notification::create($data);
    }

    /**
     * Delete Notification.
     *
     * @param  int  $id
     *
     * @return boolean true if deleted otherwise false
     */
    public function delete(int $id): bool
    {
        $notification = Notification::find($id);
        if (empty($notification)) {
            return false;
        }

        UploadHelper::deleteFile('images/notifications/'.$notification->image);
        $notification->delete($notification);

        return true;
    }

    /**
     * Get Notification Detail By ID.
     *
     * @param  int  $id
     *
     * @return void
     */
    public function getByID(int $id): Notification|null
    {
        return Notification::find($id);
    }

    /**
     * Update Notification By ID.
     *
     * @param  int  $id
     * @param  array  $data
     *
     * @return object Updated Notification Object
     */
    public function update(int $id, array $data): Notification|null
    {
        $notification = Notification::find($id);

        if (is_null($notification)) {
            return null;
        }

        // If everything is OK, then update.
        $notification->update($data);

        // Finally return the updated Notification.
        return $this->getByID($notification->id);
    }
}
