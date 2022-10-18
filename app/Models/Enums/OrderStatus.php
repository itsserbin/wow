<?php

namespace App\Models\Enums;

class OrderStatus
{
    const state = [
        'new' => 'Новый',
        'processed' => 'В процессе',
        'transferred_to_supplier' => 'Передан поставщику',
        'at_the_post_office' => 'На почте',
        'canceled' => 'Отменен',
        'return' => 'Возврат',
        'done' => 'Выполнен',
        'awaiting_dispatch' => 'Ожидает отправки',
        'awaiting_prepayment' => 'Ожидает предоплаты',
        'on_the_road' => 'В дороге',
        'requires_clarification' => 'Требует уточнение',
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
