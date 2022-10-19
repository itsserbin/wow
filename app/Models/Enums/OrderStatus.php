<?php

namespace App\Models\Enums;

class OrderStatus
{
    const state = [
        'new' => 'Новий',
        'processed' => 'В процесі',
        'transferred_to_supplier' => 'Передано постачальнику',
        'at_the_post_office' => 'На пошті',
        'canceled' => 'Скасовано',
        'return' => 'Повернення',
        'done' => 'Виконаний',
        'awaiting_dispatch' => 'Чекає на відправку',
        'awaiting_prepayment' => 'Чекає на передоплату',
        'on_the_road' => 'В дорозі',
        'requires_clarification' => 'Потребує уточнення',
    ];

    const STATUS_NEW = 'new';
    const STATUS_PROCESSED = 'processed';
    const STATUS_TRANSFERRED_TO_SUPPLIER = 'transferred_to_supplier';
    const STATUS_AT_THE_POST_OFFICE = 'at_the_post_office';
    const STATUS_CANCELED = 'canceled';
    const STATUS_RETURN = 'return';
    const STATUS_DONE = 'done';
    const STATUS_AWAITING_DISPATCH = 'awaiting_dispatch';
    const STATUS_AWAITING_PREPAYMENT = 'awaiting_prepayment';
    const STATUS_ON_THE_ROAD = 'on_the_road';
    const STATUS_REQUIRES_CLARIFICATION = 'requires_clarification';


}
