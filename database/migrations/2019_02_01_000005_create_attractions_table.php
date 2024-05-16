<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAttractionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attractions', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->text('description')->nullable();
            $table->string('image_url')->nullable();
            $table->unsignedBigInteger('destination_id')->comment('Destination ID');
            $table->string('latitude', 255)->nullable()->comment('Google Map latitude');
            $table->string('longitude', 255)->nullable()->comment('Google Map longitude');

            $table->foreign('destination_id')->references('id')->on('destinations')->onDelete('cascade');
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
        Schema::table('attractions', function (Blueprint $table) {
            // Drop foreign key constraints
            $table->dropForeign(['destination_id']);
        });

        Schema::dropIfExists('attractions');
    }
}

;
