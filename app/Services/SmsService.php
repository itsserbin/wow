<?php

namespace App\Services;

use Daaner\TurboSMS\Facades\TurboSMS;

class SmsService
{
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
            'Замовлення ' . $order_id . ' прийнято' . "\n" . 'Найближчим часом з Вами зв`яжеться оператор' . "\n\n" . 'З любовʼю, dabango.store ❤️',
            'sms'
        );
    }
}
