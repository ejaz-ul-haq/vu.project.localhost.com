<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        $data = [
            'first_name' => 'Ejaz',
            'last_name' => 'Ul Haq',
            'name' => 'Ejaz Ul Haq',
            'role' => 'admin',
            'email' => 'admin@yopmail.com',
            'password' => Hash::make('123456'),
            'image_url' => 'https://usuploads.s3.amazonaws.com/itlearn360/uploads/2018/12/dummy-profile-pic-300x300.jpg',
        ];
        User::create($data);

        // Testing Dummy User
        User::factory(20)->create();
    }
}
