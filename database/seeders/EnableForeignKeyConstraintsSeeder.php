<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class EnableForeignKeyConstraintsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Re-enable foreign key constraints
//        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
