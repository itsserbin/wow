<?php

namespace App\Models\Enums;

class CostCategories
{
    public const state = [
        ['title' => 'Кол-центр', 'slug' => 'call-center'],
        ['title' => 'Зарплата', 'slug' => 'salary'],
        ['title' => 'Закупка', 'slug' => 'purchase'],
        ['title' => 'Технічні витрати', 'slug' => 'technical-costs'],
        ['title' => 'СМС', 'slug' => 'sms'],
        ['title' => 'Реклама', 'slug' => 'advertising'],
        ['title' => 'Інше', 'slug' => 'other'],
    ];
}
