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
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();

            $table->integer('order_id');
            $table->integer('product_id');

            $table->foreignId('provider_id')
                ->nullable()
                ->references('id')
                ->on('providers')
                ->onDelete('set null');

            $table->string('size')->nullable();
            $table->string('color')->nullable();
            $table->integer('trade_price')->nullable();
            $table->integer('sale_price')->nullable();
            $table->integer('profit')->nullable();
            $table->boolean('pay')->nullable();
            $table->integer('count')->default(1);

            $table->boolean('resale')->default(0);
            $table->integer('discount')->nullable();
            $table->integer('total_price');
            $table->integer('clear_total_price')->nullable();

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
        Schema::dropIfExists('order_items');
    }
};
