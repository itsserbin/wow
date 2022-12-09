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

        $clientsRepository = new \App\Repositories\ClientsRepository();

        foreach ($items as $item) {
            $clientsRepository->updateAvgAndWholeCheck($item->id);
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
