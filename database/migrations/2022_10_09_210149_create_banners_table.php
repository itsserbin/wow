<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('banners', function (Blueprint $table) {
            $table->id();
            $table->boolean('published')->default(0);
            $table->json('title');
            $table->json('link')->nullable();
            $table->integer('sort')->nullable()->unsigned();
            $table->json('image_mobile')->nullable();;
            $table->json('image_table')->nullable();;
            $table->json('image_desktop')->nullable();;
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
        Schema::dropIfExists('banners');
    }
};
