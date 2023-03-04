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
        $clientsRepository = new \App\Repositories\ClientsRepository();
        Schema::table('clients', function (Blueprint $table) {
            $table->integer('number_of_purchases')->default(0)->change();
            $table->integer('whole_check')->default(0)->change();
            $table->integer('average_check')->default(0)->change();
            $table->integer('purchased_goods')->default(0)->change();
        });

        $clients = \App\Models\Client::select('id')->get();

        foreach ($clients as $client) {
            $clientsRepository->updatePurchaseGoods($client->id);
            $clientsRepository->updateAvgAndWholeCheck($client->id);
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
