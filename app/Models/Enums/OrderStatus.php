<?php

namespace App\Models\Enums;

class OrderStatus
{
    const state = [
        'STATUS_NEW' => 'Новый',
        'STATUS_PROCESSED' => 'В процессе',
        'STATUS_TRANSFERRED_TO_SUPPLIER' => 'Передан поставщику',
        'STATUS_AT_THE_POST_OFFICE' => 'На почте',
        'STATUS_CANCELED' => 'Отменен',
        'STATUS_RETURN' => 'Возврат',
        'STATUS_DONE' => 'Выполнен',
        'STATUS_AWAITING_DISPATCH' => 'Ожидает отправки',
        'STATUS_AWAITING_PREPAYMENT' => 'Ожидает предоплаты',
        'STATUS_ON_THE_ROAD' => 'В дороге',
        'STATUS_REQUIRES_CLARIFICATION' => 'Требует уточнение',
    ];

    const STATUS_NEW = 'Новый';
    const STATUS_PROCESSED = 'В процессе';
    const STATUS_TRANSFERRED_TO_SUPPLIER = 'Передан поставщику';
    const STATUS_AT_THE_POST_OFFICE = 'На почте';
    const STATUS_CANCELED = 'Отменен';
    const STATUS_RETURN = 'Возврат';
    const STATUS_DONE = 'Выполнен';
    const STATUS_AWAITING_DISPATCH = 'Ожидает отправки';
    const STATUS_AWAITING_PREPAYMENT = 'Ожидает предоплаты';
    const STATUS_ON_THE_ROAD = 'В дороге';
    const STATUS_REQUIRES_CLARIFICATION = 'Требует уточнение';


}
