<?php

namespace App\Models\Enums;

class CallbackStatus
{
    const state = [
        'new' => 'Новий',
        'in_process' => 'В процесі',
        'done' => 'Виконано'
    ];
    
    const NEW_STATUS = 'new';
    const IN_PROCESS_STATUS = 'in_process';
    const DONE_STATUS = 'done';
}
