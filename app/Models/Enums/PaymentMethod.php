<?php

namespace App\Models\Enums;

class PaymentMethod
{
    const state = [
        'cash_on_delivery' => 'Наложенный платеж',
        'minimum_prepayment' => 'Минимальная предоплата',
        'full_prepayment' => 'Полная предоплата',
    ];
}
