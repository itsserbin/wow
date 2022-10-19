<?php

namespace App\Models\Enums;

class ClientStatus
{
    const state = [
        'new' => 'Новий',
        'experienced' => 'Раніше закуплявся',
        'top' => 'ТОПчик',
        'return' => 'Повернення',
        'black_list' => 'ЧС',
    ];

    const NEW_STATUS = 'Новый';
    const EXPERIENCED_STATUS = 'Раннее закупался';
    const TOP_STATUS = 'ТОПчик';
    const RETURN_STATUS = 'Возврат';
    const BLACK_LIST_STATUS = 'ЧС';
}
