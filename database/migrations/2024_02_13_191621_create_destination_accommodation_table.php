<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDestinationAccommodationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('destination_accommodation', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('destination_id')->comment('Destination ID');
            $table->unsignedBigInteger('accommodation_id')->comment('Accommodation ID');
            $table->timestamps();

            $table->foreign('destination_id')->references('id')->on('destinations');
            $table->foreign('accommodation_id')->references('id')->on('accommodations');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('destination_accommodation');
    }
}
