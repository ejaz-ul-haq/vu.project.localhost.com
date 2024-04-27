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
            $table->string('title', 255);
            $table->text('description')->nullable();
            $table->unsignedBigInteger('destination_id')->comment('Destination ID');
            $table->unsignedBigInteger('accommodation_id')->comment('Accommodation ID');
            $table->timestamp('start_date_time')->nullable()->comment('Trip Start Date & Time');
            $table->timestamp('end_date_time')->nullable()->comment('Trip End Date & Time');
            $table->unsignedBigInteger('price')->comment('Trip Price');
            $table->string('image_url')->nullable()->comment('Trip Image URL');
//            $table->longText('travel_mates')->nullable()->comment('Travel Mates IDs');

            $table->foreign('destination_id')->references('id')->on('destinations')->onDelete('cascade');
            $table->foreign('accommodation_id')->references('id')->on('accommodations')->onDelete('cascade');
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
        Schema::table('trips', function (Blueprint $table) {
            // Drop foreign key constraints
            $table->dropForeign(['destination_id']);
            $table->dropForeign(['accommodation_id']);
        });

        Schema::dropIfExists('trips');
    }
}
