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
    public function up(): void
    {
        Schema::create('refunds', static function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->integer('sum_provider_trade_price')->default(0);
            $table->integer('sum_order_price')->default(0);
            $table->integer('sum_provider_refund')->default(0);
            $table->integer('sum_client_refund')->default(0);

            $table->foreignId('order_id')
                ->nullable()
                ->references('id')
                ->on('orders')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('refunds');
    }
};
