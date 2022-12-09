<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Repositories\InvoicesRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class InvoicesController extends BaseController
{
    private mixed $invoicesRepository;

    public function __construct()
    {
        parent::__construct();
        $this->invoicesRepository = app(InvoicesRepository::class);
    }

    public function setInvoiceStatus(Request $request): JsonResponse
    {
        $result = $this->invoicesRepository->setInvoiceStatus($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
