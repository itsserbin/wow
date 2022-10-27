<?php

namespace App\Repositories;

use DateTime;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Application;

abstract class CoreRepository
{
    /**
     * @var Model
     */
    protected $model;

    /**
     * CoreRepository constructor
     */
    public function __construct()
    {
        $this->model = app($this->getModelClass());
    }

    /**
     * @return mixed
     */
    abstract protected function getModelClass();

    public function dateFormatFromTimepicker($value, $format = 'iso')
    {
        if ($format == 'iso') {
            return DateTime::createFromFormat("Y-m-d\TH:i:s.uO", $value)->format('Y-m-d');
        }
        if ($format == 'date') {
            return DateTime::createFromFormat("d.m.Y", $value)->format('Y-m-d');
        }

    }
}
