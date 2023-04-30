<?php

namespace App\Http\Controllers\Api\Statistics;

use App\Http\Controllers\Api\BaseController;
use App\Repositories\Statistics\BankCardMovementsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BankCardMovementsController extends BaseController
{
    private mixed $bankCardMovementsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->bankCardMovementsRepository = app(BankCardMovementsRepository::class);
    }

    final public function index(Request $request): JsonResponse
    {
        $data = $this->bankCardMovementsRepository->getAllWithPaginate($request->all());
        $indicators = $this->bankCardMovementsRepository->indicators($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => [
                'data' => $data,
                'indicators' => $indicators
            ]
        ]);
    }

    final public function getCashFlow(Request $request): JsonResponse
    {
        $result = $this->bankCardMovementsRepository->getProfitAndLossStatistic($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result
        ]);
    }

    final public function edit(int $id): JsonResponse
    {
        $result = $this->bankCardMovementsRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result
        ]);
    }

    final public function update(int $id, Request $request): JsonResponse
    {
        $result = $this->bankCardMovementsRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result
        ]);
    }

    final public function updateCategory(Request $request): JsonResponse
    {
        $result = $this->bankCardMovementsRepository->updateCategory($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result
        ]);
    }

    final public function create(Request $request): JsonResponse
    {
        $result = $this->bankCardMovementsRepository->create($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result
        ]);
    }
}
