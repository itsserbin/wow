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
//        Schema::create('cost_and_profit_categories', static function (Blueprint $table) {
//            $table->id();
//            $table->string('title');
//            $table->string('slug')->unique();
//            $table->boolean('type');
//            $table->timestamps();
//        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('cost_and_profit_categories');
    }
};
