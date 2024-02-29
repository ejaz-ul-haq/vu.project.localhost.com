<?php

namespace App\Repositories;

use Illuminate\Support\Str;
use App\Helpers\UploadHelper;
use App\Interfaces\CrudInterface;
use App\Models\User;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserRepository implements CrudInterface
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
     * Get All Users.
     *
     * @return collections Array of User Collection
     */
    public function getAll($request): Paginator
    {
        $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
        $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
        $order   = isset($request['order']) ? $request['order'] : 'desc';

        return User::orderBy($orderBy, $order)
                   ->paginate($perPage);

    }

    /**
     * Get Paginated User Data.
     *
     * @param  int  $pageNo
     *
     * @return collections Array of User Collection
     */
    public function getPaginatedData($request): Paginator
    {

        $perPage = isset($request['per_page']) ? intval($request['per_page']) : 10;
        $orderBy = isset($request['order_by']) ? $request['order_by'] : 'id';
        $order   = isset($request['order']) ? $request['order'] : 'desc';

        return User::orderBy($orderBy, $order)
                   ->paginate($perPage);
    }

    /**
     * Get Searchable User Data with Pagination.
     *
     * @param  int  $pageNo
     *
     * @return collections Array of User Collection
     */
    public function searchUser($keyword, $perPage): Paginator
    {
        $perPage = isset($perPage) ? intval($perPage) : 10;

        return User::where('title', 'like', '%'.$keyword.'%')
                   ->orWhere('description', 'like', '%'.$keyword.'%')
                   ->orWhere('price', 'like', '%'.$keyword.'%')
                   ->orderBy('id', 'desc')
                   ->with('user')
                   ->paginate($perPage);
    }

    /**
     * Create New User.
     *
     * @param  array  $data
     *
     * @return object User Object
     */
    public function create(array $data): User
    {
        $nameShort = Str::slug(substr($data['name'], 0, 20));

        $data['password'] = Hash::make($data['password']);

        if ( ! empty($data['image'])) {
            $data['image_url'] = UploadHelper::upload('image', $data['image'], $nameShort.'-profile', 'images/users');
        }

        return User::create($data);
    }

    /**
     * Delete User.
     *
     * @param  int  $id
     *
     * @return boolean true if deleted otherwise false
     */
    public function delete(int $id): bool
    {
        $user = User::find($id);
        if (empty($user)) {
            return false;
        }

        UploadHelper::deleteFile('images/users/'.$user->image_url);
        $user->delete($user);

        return true;
    }

    /**
     * Get User Detail By ID.
     *
     * @param  int  $id
     *
     * @return void
     */
    public function getByID(int $id): User|null
    {
        return User::find($id);
    }

    /**
     * Update User By ID.
     *
     * @param  int  $id
     * @param  array  $data
     *
     * @return object Updated User Object
     */
    public function update(int $id, array $data): User|null
    {
        $user = User::find($id);
        if ( ! empty($data['image'])) {
            $nameShort         = Str::slug(substr($data['name'], 0, 20));
            $data['image_url'] = UploadHelper::update('image', $data['image'], $nameShort.'-profile', 'images/users',
                $user->image_url);
        } else {
            $data['image_url'] = $user->image_url;
        }

        if (is_null($user)) {
            return null;
        }

        // If everything is OK, then update.
        $user->update($data);

        // Finally return the updated User.
        return $this->getByID($user->id);
    }
}
