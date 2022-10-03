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
        Schema::create('marketing_statistics', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->integer('average_application_price')->nullable();
            $table->integer('average_approve_application_price')->nullable();
            $table->integer('average_done_application_price')->nullable();
            $table->integer('average_check')->nullable();
            $table->integer('average_marginality')->nullable();
            $table->integer('average_items')->nullable();
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
        Schema::dropIfExists('marketing_statistics');
    }
};
