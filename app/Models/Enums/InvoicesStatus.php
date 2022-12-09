<?php

namespace App\Models\Enums;

class InvoicesStatus
{
    const state = [
        self::PAID_STATUS => 'Оплачений',
        self::NOT_PAID_STATUS => 'Не оплачений',
    ];

    const PAID_STATUS = 'paid';
    const NOT_PAID_STATUS = 'not_paid';
}
