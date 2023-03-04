<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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

        $duplicateClients = \App\Models\Client::with('orders')
            ->select('phone', DB::raw('count(*) as count'))
            ->groupBy('phone')
            ->orderBy('id', 'desc')
            ->havingRaw('count(*) > 1')
            ->get();

        foreach ($duplicateClients as $duplicateClient) {
            $phone = $duplicateClient->phone;
            $clients = \App\Models\Client::where('phone', $phone)->get();

            $firstClient = $clients->shift();

            foreach ($clients as $client) {
                foreach ($client->orders as $order) {
                    $order->client_id = $firstClient->id;
                }

                $client->orders()->update(['client_id' => $firstClient->id]);

                $client->delete();
            }

            $clientsRepository->updateAvgAndWholeCheck($firstClient->id);
        }

        foreach (\App\Models\Order::where('client_id', null)->get() as $item) {
            $item->delete();
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
