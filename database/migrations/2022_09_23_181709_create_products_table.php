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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->boolean('published')->default('0');
            $table->string('status');

            $table->json('title')->nullable();
            $table->json('h1')->nullable();

            $table->text('size_table')->nullable();

            $table->integer('price');
            $table->integer('discount_price')->nullable();
            $table->integer('trade_price')->nullable();

            $table->json('description')->nullable();
            $table->json('content')->nullable();
            $table->json('characteristics')->nullable();
            $table->string('vendor_code')->nullable();
            $table->string('preview')->nullable();
            $table->integer('sort')->nullable()->unsigned();

            $table->integer('total_sales')->nullable();
            $table->integer('viewed')->nullable();
            $table->integer('returns')->nullable();
            $table->integer('exchange')->nullable();

            $table->foreignId('provider_id')
                ->nullable()
                ->constrained('providers')
                ->references('id')
                ->onDelete('set null');
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
        Schema::dropIfExists('products');
    }
};
