<?php

namespace App\Http\Controllers\External;

use App\Http\Controllers\Api\BaseController;
use App\Services\NovaPoshtaService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NovaPoshtaController extends BaseController
{
    private mixed $novaPoshtaService;

    public function __construct()
    {
        parent::__construct();
        $this->novaPoshtaService = app(NovaPoshtaService::class);
    }

    public function createWaybill(Request $request)
    {
        return $this->novaPoshtaService->createWaybill(
            $request->get('sender'),
            $request->get('order')
        );
    }

    public function searchCity(Request $request): JsonResponse
    {
        $result = $this->novaPoshtaService->searchCity($request->get('query'));

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function searchStreet(Request $request): JsonResponse
    {
        $result = $this->novaPoshtaService->searchStreet($request->get('city'), $request->get('query'));

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function searchPostOfficesByCity(Request $request): JsonResponse
    {
        $result = $this->novaPoshtaService->getPostOfficesByCity($request->get('city'));

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function searchPostOfficesById(Request $request): JsonResponse
    {
        $result = $this->novaPoshtaService->getPostOfficesById($request->get('city'), $request->get('query'));

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
