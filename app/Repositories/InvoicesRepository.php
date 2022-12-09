<?php

namespace App\Repositories;

use App\Models\Enums\InvoicesStatus;
use App\Models\Invoice as Model;

class InvoicesRepository extends CoreRepository
{

    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::where('id', $id)->first();
    }

    public function getAllWithPaginate()
    {
        return $this
            ->model::select(
                'id',
                'order_id',
                'status',
                'sum',
                'invoice_url',
                'created_at',
                'updated_at',
            )
            ->orderBy('id', 'desc')
            ->paginate(15);
    }

    public function create(array $data)
    {
        $model = new $this->model;

        $model->order_id = $data['order_id'];
        $model->status = InvoicesStatus::NOT_PAID_STATUS;
        $model->sum = $data['sum'];
        $model->save();

        $item = $this->model::where('id', $model->id)->with('order.client', 'order.items.product')->first();

        $names = [];
        $prices = [];
        $counts = [];

        foreach ($item->order->items as $orderItem) {
            array_push($names, $orderItem->product->h1['ua']);
            array_push($counts, $orderItem->count);
            array_push($prices, $orderItem->sale_price);
        }

        $hmac = hash_hmac(
            'md5',
            implode(';',
                [
                    'merchantAccount' => env('WFP_MERCHANT_LOGIN'),
                    'merchantDomainName' => env('APP_DOMAIN'),
                    'orderReference' => (string)$item->id,
                    'orderDate' => strtotime($item->created_at),
                    'amount' => $item->sum,
                    'currency' => "UAH",
                    'productName' => implode(';', $names),
                    'productCount' => implode(';', $counts),
                    'productPrice' => implode(';', $prices),
                ]
            ),
            env('WFP_MERCHANT_SECRET_KEY')
        );

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.wayforpay.com/api",
            CURLOPT_RETURNTRANSFER => True,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => json_encode([
                'transactionType' => 'CREATE_INVOICE',
                'serviceUrl' => route('api.v1.invoices.set-status'),
                'merchantAuthType' => 'SimpleSignature',
                'merchantAccount' => env('WFP_MERCHANT_LOGIN'),
                'merchantDomainName' => env('APP_DOMAIN'),
                'merchantSignature' => $hmac,
                'apiVersion' => 1,
                'orderReference' => (string)$item->id,
                'orderDate' => strtotime($item->created_at),
                'amount' => $item->sum,
                'currency' => "UAH",
                'language' => "UA",
                'productName' => $names,
                'productPrice' => $prices,
                'productCount' => $counts
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
            if ($result['reasonCode'] == 1100) {
                $item->invoice_url = $result['invoiceUrl'];
                return ['success' => 1, 'data' => $item->update()];
            } else {
                return ['success' => 0, 'data' => $result];
            }
        }
    }

    public function update(int $id, array $data)
    {
        $model = $this->getById($id);

        $model->order_id = $data['order_id'];
        $model->status = $data['status'];
        $model->sum = $data['sum'];
        $model->invoice_url = $data['invoice_url'];

        return $model->update();
    }

    public function destroy($id)
    {
        return $this->model::destroy($id);
    }

    public function setInvoiceStatus($data)
    {
        \Illuminate\Support\Facades\Log::info($data->transactionStatus);
        \Illuminate\Support\Facades\Log::info($data['transactionStatus']);
        if ($data['transactionStatus'] == 'Approved') {
            $model = $this->getById($data['orderReference']);
            $model->status = InvoicesStatus::PAID_STATUS;
            $model->update();
        }
    }
}