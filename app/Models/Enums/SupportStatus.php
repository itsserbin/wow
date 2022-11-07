<?php

namespace App\Models\Enums;

class SupportStatus
{
    const state = [
        self::NEW_STATUS => 'Новий',
        self::PROCESS_STATUS => 'В процесі',
        self::DONE_STATUS => 'Завершений',
    ];

    const NEW_STATUS = 'new';
    const PROCESS_STATUS = 'in_process';
    const DONE_STATUS = 'done';
}
