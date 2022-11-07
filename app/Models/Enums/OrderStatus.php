<?php

namespace App\Models\Enums;

class OrderStatus
{
    const state = [
        self::STATUS_NEW => 'Новий',
        self::STATUS_PROCESSED => 'В процесі',
        self::STATUS_TRANSFERRED_TO_SUPPLIER => 'Передано постачальнику',
        self::STATUS_AT_THE_POST_OFFICE => 'На пошті',
        self::STATUS_CANCELED => 'Скасовано',
        self::STATUS_RETURN => 'Повернення',
        self::STATUS_EXCHANGE => 'Обмін',
        self::STATUS_DONE => 'Виконаний',
        self::STATUS_AWAITING_DISPATCH => 'Чекає на відправку',
        self::STATUS_AWAITING_PREPAYMENT => 'Чекає на передоплату',
        self::STATUS_ON_THE_ROAD => 'В дорозі',
        self::STATUS_REQUIRES_CLARIFICATION => 'Потребує уточнення',
    ];

    const STATUS_EXCHANGE = 'exchange';
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
