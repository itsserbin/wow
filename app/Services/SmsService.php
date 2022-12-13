<?php

namespace App\Services;

use App\Repositories\InvoicesRepository;
use Daaner\TurboSMS\Facades\TurboSMS;

class SmsService
{
    private mixed $invoicesRepository;

    public function __construct()
    {
        $this->invoicesRepository = app(InvoicesRepository::class);
    }

    public function notifyWaybill($phone, $waybill)
    {
        return TurboSMS::sendMessages($phone,
            'Номер Вашої накладної: ' . $waybill . "\n\n" . 'З любовʼю, dabango.store ❤️',
            'sms'
        );
    }

    public function newOrder($phone, $order_id)
    {
        return TurboSMS::sendMessages($phone,
            'Замовлення ' . $order_id . ' прийнято' . "\n" . 'Найближчим часом з Вами звʼяжеться оператор' . "\n\n" . 'З любовʼю, dabango.store ❤️',
            'sms'
        );
    }

    public function sendInvoice($id)
    {
        $item = $this->invoicesRepository->getById($id);

        if (TurboSMS::sendMessages($item->order->client->phone,
            'Ваш рахунок на оплату:' . "\n" . $item->invoice_url
        )) {
            return $this->invoicesRepository->updateSmsCount($id);
        } else {
            return false;
        }
    }
}
