<?php

namespace App\Models\Enums;

class ClientStatus
{
    const state = [
        self::NEW_STATUS => 'Новий',
        self::EXPERIENCED_STATUS => 'Раніше закуплявся',
        self::TOP_STATUS => 'ТОПчик',
        self::RETURN_STATUS => 'Повернення',
        self::BLACK_LIST_STATUS => 'ЧС',
    ];

    const NEW_STATUS = 'new';
    const EXPERIENCED_STATUS = 'experienced';
    const TOP_STATUS = 'top';
    const RETURN_STATUS = 'return';
    const BLACK_LIST_STATUS = 'black_list';
}
