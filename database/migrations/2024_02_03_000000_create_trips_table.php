<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trips', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('destination_id')->comment('Destination ID');
            $table->unsignedBigInteger('accommodation_id')->comment('Accommodation ID');
            $table->timestamp('start_date_time')->nullable()->comment('Trip Start Date & Time');
            $table->timestamp('end_date_time')->nullable()->comment('Trip End Date & Time');
//            $table->longText('travel_mates')->nullable()->comment('Travel Mates IDs');

            $table->foreign('destination_id')->references('id')->on('destinations');
            $table->foreign('accommodation_id')->references('id')->on('accommodations');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trips');
    }
}
