<?php

namespace App\Models\Enums;

class ClientStatus
{
    const state = [
        'new' => 'Новый',
        'experienced' => 'Раннее закупался',
        'top' => 'ТОПчик',
        'return' => 'Возврат',
        'black_list' => 'ЧС',
    ];

    const NEW_STATUS = 'Новый';
    const EXPERIENCED_STATUS = 'Раннее закупался';
    const TOP_STATUS = 'ТОПчик';
    const RETURN_STATUS = 'Возврат';
    const BLACK_LIST_STATUS = 'ЧС';
}
