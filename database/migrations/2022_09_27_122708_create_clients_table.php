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
            $table->string('status');
            $table->string('sub_status')->nullable();

            $table->string('name');
            $table->string('last_name')->nullable();
            $table->string('middle_name')->nullable();
            $table->string('phone');
            $table->string('email')->nullable();
            $table->text('comment')->nullable();


            $table->integer('number_of_purchases')->default(0);
            $table->integer('whole_check')->default(0);
            $table->integer('average_check')->default(0);
            $table->integer('purchased_goods')->default(0);
            $table->string('modified_by')->nullable();
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
