<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\OrdersRepository;
use App\Services\SmsService;
use Illuminate\Http\Request;

class SmsController extends BaseController
{
    private mixed $smsService;

    public function __construct()
    {
        parent::__construct();
        $this->smsService = app(SmsService::class);
    }

    public function sendInvoice($id)
    {
        return $this->smsService->sendInvoice($id);
    }
}
