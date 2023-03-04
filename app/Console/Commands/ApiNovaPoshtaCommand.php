<?php

namespace App\Console\Commands;

use App\Models\Enums\OrderStatus;
use App\Models\Order;
use App\Repositories\ClientsRepository;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class ApiNovaPoshtaCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'api_nova_poshta:order_integration';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    private mixed $clientsRepository;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->clientsRepository = app(ClientsRepository::class);
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $orders = Order::where([
            ['waybill', '!=', null],
            ['status', '!=', 'new'],
            ['status', '!=', 'processed'],
            ['status', '!=', 'requires_clarification'],
            ['status', '!=', 'return'],
            ['status', '!=', 'canceled'],
            ['status', '!=', 'done'],
            ['status', '!=', 'awaiting_prepayment'],
        ])->select('id', 'client_id', 'status', 'waybill')->get();

        foreach ($orders as $item) {
            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => "https://api.novaposhta.ua/v2.0/json/",
                CURLOPT_RETURNTRANSFER => True,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "POST",
                CURLOPT_POSTFIELDS => json_encode([
                    'apiKey' => env('NOVA_POSHTA_API'),
                    'modelName' => 'TrackingDocument',
                    'calledMethod' => 'getStatusDocuments',
                    'methodProperties' => [
                        'Documents' => [
                            ['DocumentNumber' => $item->waybill],
                        ]
                    ]
                ]),
                CURLOPT_HTTPHEADER => array("content-type: application/json",),
            ));
            $response = curl_exec($curl);
            $err = curl_error($curl);
            curl_close($curl);

            if ($err) {
                echo "cURL Error #:" . $err;
            } else {
                $result = json_decode($response, true);
                if (isset($result['data'][0])) {
                    if ($result['data'][0]['StatusCode'] === '1') {
                        $item->status = 'awaiting_dispatch';
                    } elseif (in_array($result['data'][0]['StatusCode'], ['102', '103', '108'], true)) {
                        $item->status = 'return';
                    } elseif (in_array($result['data'][0]['StatusCode'], ['7', '8'], true)) {
                        $item->status = 'at_the_post_office';
                    } elseif (in_array($result['data'][0]['StatusCode'], ['5', '6', '101'], true)) {
                        $item->status = 'on_the_road';
                    } elseif (in_array($result['data'][0]['StatusCode'], ['9', '10', '11'], true)) {
                        $item->status = 'done';
                    }
                } else {
                    Log::error('id: ' . $item->id . "\n" . 'waybill:' . $item->waybill);
                }

                $item->update();
                $this->clientsRepository->updatePurchaseGoods($item->client_id);
            }
        }
    }
}
