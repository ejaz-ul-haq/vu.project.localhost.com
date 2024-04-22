<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('rating')->comment('Rating Number');
            $table->string('status', 255);
            $table->longText('comment')->nullable()->comment('Review Detail');

            $table->unsignedBigInteger('reviewable_id')->comment('Reviewable ID');
            $table->string('reviewable_type', 255)->comment('Reviewable TYpe');

//            $table->foreign('reviewable_id')->references('id')->on('destinations');
//            $table->foreign('reviewable_id')->references('id')->on('accommodations');
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
        Schema::dropIfExists('reviews');
    }
}
