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
        $items = \App\Models\Client::all();

        foreach ($items as $item) {
            if ($item->status == 'Раннее закупался') {
                $item->status = \App\Models\Enums\ClientStatus::EXPERIENCED_STATUS;
                $item->update();
            }
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
