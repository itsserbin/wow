<?php

namespace App\Models\Enums;

class ClientSubStatus
{

    const state = [
        'experienced' => [
            'satisfied' => 'Залишилися задоволені',
            'asked_for_an_exchange' => 'Попросили обмін',
            'no_response' => 'Не відповіли',
            'not_satisfied' => 'Не задоволені',
            'in_progress' => 'В процесі',
        ],
        'return' => [
            'agreed' => 'Погодилися',
            'refused' => 'Відмовилися',
            'didnt_get_in_touch' => 'Не вийшли на звʼязок',
            'new' => 'Новий',
        ]
    ];

    const EXPERIENCED_STATUS_SATISFIED = 'Остались довольны';
    const EXPERIENCED_STATUS_ASKED_FOR_AN_EXCHANGE = 'Попросили обмен';
    const EXPERIENCED_STATUS_NO_RESPONSE = 'Не ответили';
    const EXPERIENCED_STATUS_NOT_SATISFIED = 'Не довольны';
    const EXPERIENCED_STATUS_IN_PROGRESS = 'В процессе';

    const RETURN_STATUS_AGREED = 'Согласились';
    const RETURN_STATUS_REFUSED = 'Отказались';
    const RETURN_STATUS_DIDNT_GET_IN_TOUCH = 'Не вышли на связь';
    const RETURN_STATUS_NEW = 'Новый';
}
