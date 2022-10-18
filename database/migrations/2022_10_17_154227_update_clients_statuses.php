<?php

use App\Models\Enums\ClientStatus;
use App\Models\Enums\ClientSubStatus;
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
        $clients = \App\Models\Client::all();

        foreach ($clients as $client) {
            if ($client->status == 'cancel') {
                $client->status = 'experienced';
            }
            if ($client->status == 'done') {
                $client->status = 'experienced';
            }
            if ($client->status == 'process') {
                $client->status = 'experienced';
            }
            if ($client->status == 'process') {
                $client->status = 'experienced';
            }
            if ($client->status == 'Раннее закупался') {
                $client->status = 'experienced';
            }
            if ($client->status == 'ЧС') {
                $client->status = 'black_list';
            }
            if ($client->number_of_purchases > 1 && $client->status == 'Новый') {
                $client->status = 'experienced';
            }
            if ($client->number_of_purchases == 1 && $client->status == 'Новый') {
                $client->status = 'new';
            }
            if ($client->sub_status === 'Попросили обмен') {
                $client->sub_status = 'asked_for_an_exchange';
            }
            if ($client->sub_status === 'Остались довольны') {
                $client->sub_status = 'satisfied';
            }
            if ($client->sub_status === 'В процессе') {
                $client->sub_status = 'in_progress';
            }
            $client->update();
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
