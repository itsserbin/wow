<?php

namespace App\Http\Controllers\Api\Statistics;

use App\Http\Controllers\Api\BaseController;
use App\Repositories\Statistics\CashFlowRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CashFlowController extends BaseController
{
    private mixed $cashFlowRepository;

    public function __construct()
    {
        parent::__construct();
        $this->cashFlowRepository = app(CashFlowRepository::class);
    }

    final public function getCashFlow(Request $request): JsonResponse
    {
        $result = $this->cashFlowRepository->getViewPage($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result
        ]);
    }

//    final public function index(Request $request): JsonResponse
//    {
//        $result = $this->cashFlowRepository->getAllS($request->all());
//
//        return $this->returnResponse([
//            'success' => true,
//            'result' => $result
//        ]);
//    }
}
