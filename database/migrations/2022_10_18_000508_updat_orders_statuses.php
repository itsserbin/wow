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
        $items = \App\Models\Order::all();

        foreach ($items as $item) {
            foreach (\App\Models\Enums\OrderStatus::state as $key => $value) {
                if ($item->status == $value) {
                    $item->status = $key;
                }
            }
            $item->update();

        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
