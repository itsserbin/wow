<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('middle_name')->nullable();
            $table->string('phone');
            $table->integer('number_of_purchases')->nullable();
            $table->integer('whole_check')->nullable();
            $table->integer('average_check')->nullable();
            $table->string('status');
            $table->string('modified_by')->nullable();
            $table->text('comment')->nullable();
            $table->string('last_name')->nullable();
            $table->string('email')->nullable();
            $table->string('sub_status')->nullable();
            $table->integer('purchased_goods')->nullable();
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
        Schema::dropIfExists('clients');
    }
};
