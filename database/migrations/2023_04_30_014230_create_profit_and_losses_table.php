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
        Schema::create('profit_and_losses', static function (Blueprint $table) {
            $table->id();
            $table->string('month');
            $table->float('purchase_cost');
            $table->float('business_profitability');
            $table->float('total_revenues');
            $table->float('net_profit');
            $table->float('costs');
            $table->float('investments');
            $table->float('returned_investments');
            $table->float('dividends');
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
        Schema::dropIfExists('profit_and_losses');
    }
};
