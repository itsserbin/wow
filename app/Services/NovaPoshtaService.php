<?php

namespace App\Services;

use Carbon\Carbon;

class NovaPoshtaService
{
    public function sendRequest(string $modelName, string $calledMethod, array $methodProperties, $apiKey = null)
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.novaposhta.ua/v2.0/json/",
            CURLOPT_RETURNTRANSFER => True,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => json_encode([
                'apiKey' => $apiKey ?? env('NOVA_POSHTA_API'),
                'modelName' => $modelName,
                'calledMethod' => $calledMethod,
                'methodProperties' => $methodProperties
            ]),
            CURLOPT_HTTPHEADER => array("content-type: application/json",),
        ));
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            return json_decode($response, true);
        }
    }

    public function createWaybill($sender, $order)
    {
        $counterpartySenderRef = $this->sendRequest('Counterparty', 'getCounterparties', [
            "CounterpartyProperty" => "Sender",
            "Page" => "1"
        ], $sender['api_key'])['data'][0]['Ref'];

        $contactPersonCounterparty = $this->sendRequest('Counterparty', 'getCounterpartyContactPersons', [
            'Ref' => $counterpartySenderRef
        ], $sender['api_key']);

        $counterpartyRecipientRequest = $this->sendRequest(
            'Counterparty',
            'save',
            [
                "FirstName" => $order['client']['name'],
                "LastName" => $order['client']['last_name'],
                "Phone" => $order['client']['phone'],
                "CounterpartyType" => "PrivatePerson",
                "CounterpartyProperty" => "Recipient"
            ],
            $sender['api_key']
        );
        $counterpartyRecipientRef = $counterpartyRecipientRequest['data'][0]['Ref'];
        $counterpartyRecipientContact = $counterpartyRecipientRequest['data'][0]['ContactPerson']['data'][0]['Ref'];

        return $this->sendRequest('InternetDocument',
            'save',
            [
                'PayerType' => 'Recipient',
                'PaymentMethod' => 'Cash',
                'DateTime' => Carbon::now()->format('d.m.Y'),
                'CargoType' => 'Parcel',
                'Weight' => '0,5',
                'ServiceType' => 'WarehouseWarehouse',
                'SeatsAmount' => '1',
                'Description' => '-',
                'Cost' => $order['total_price'],
                'CitySender' => $sender['city_ref'],
                'Sender' => $counterpartySenderRef,
                'SenderAddress' => $sender['post_office_ref'],
                'ContactSender' => $contactPersonCounterparty['data'][0]['Ref'],
                'SendersPhone' => $contactPersonCounterparty['data'][0]['Phones'],
                'CityRecipient' => $order['np_city_id'],
                'Recipient' => $counterpartyRecipientRef,
                'RecipientAddress' => $order['np_post_office_id'],
                'ContactRecipient' => $counterpartyRecipientContact,
                'RecipientsPhone' => $order['client']['phone'],
                'BackwardDeliveryData' => [
                    [
                        'PayerType' => 'Recipient',
                        'CargoType' => 'Money',
                        'RedeliveryString' => $order['prepayment'] ? $order['total_price'] - $order['prepayment_sum'] : $order['total_price']
                    ]
                ],
            ],
            $sender['api_key']
        )['data'][0]['IntDocNumber'];
    }

    public function searchCity($query)
    {
        return $this->sendRequest('Address', 'getCities', [
            'FindByString' => $query,
            'Limit' => 15,
        ])['data'];
    }

    public function searchStreet($city, $query)
    {
        return $this->sendRequest('Address', 'getStreet', [
            'CityRef' => $city,
            'FindByString' => $query,
            'Limit' => 15,
        ])['data'];
    }

    public function getPostOfficesByCity($query)
    {
        return $this->sendRequest('Address', 'getWarehouses', [
            'CityName' => $query,
            'Language' => 'UA',
        ])['data'];
    }

    public function getPostOfficesById($city, $query)
    {
        return $this->sendRequest('Address', 'getWarehouses', [
            'CityName' => $city,
            'WarehouseId' => $query,
            'Language' => 'UA',
            'Limit' => 15,
        ])['data'];
    }
}
