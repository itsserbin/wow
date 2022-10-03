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
        Schema::create('manager_salaries', function (Blueprint $table) {
            $table->id();

            $table->date('date');

            $table->foreignId('manager_id')
                ->nullable()
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->integer('count_applications')->nullable();
            $table->integer('count_additional_sales')->nullable();

            $table->integer('canceled_applications')->nullable();
            $table->integer('done_applications')->nullable();
            $table->integer('returned_applications')->nullable();
            $table->integer('total_applications')->nullable();
            $table->integer('in_process_applications')->nullable();

            $table->integer('sum_additional_sales')->nullable();
            $table->integer('sum_price_applications')->nullable();
            $table->integer('sum_price_additional_sales')->nullable();

            $table->integer('count_prepayments')->nullable();
            $table->integer('prepayments_amount')->nullable();

            $table->integer('count_sale_of_air')->nullable();
            $table->integer('price_sale_of_air')->nullable();
            $table->integer('total_sale_of_air')->nullable();

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
        Schema::dropIfExists('manager_salaries');
    }
};
