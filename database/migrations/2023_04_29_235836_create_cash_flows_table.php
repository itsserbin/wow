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
        Schema::create('cash_flows', static function (Blueprint $table) {
            $table->id();
            $table->string('month');
            $table->float('start_month_balance');
            $table->float('end_month_balance');
            $table->float('difference');
            $table->float('approved_income');
            $table->float('approved_consumption');
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
        Schema::dropIfExists('cash_flows');
    }
};
