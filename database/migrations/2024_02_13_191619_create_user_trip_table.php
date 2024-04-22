<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserTripTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_trip', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('trip_id')->comment('Trip ID');
            $table->unsignedBigInteger('user_id')->comment('User ID');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('trip_id')->references('id')->on('trips');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_trip');
    }
}
