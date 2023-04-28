<?php

namespace App\Http\Controllers\Api\Statistics;

use App\Http\Controllers\Api\BaseController;
use App\Repositories\Statistics\RefundsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RefundsController extends BaseController
{
    private mixed $refundsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->refundsRepository = app(RefundsRepository::class);
    }

    final public function index(Request $request): JsonResponse
    {
        $result = $this->refundsRepository->getAllWithPaginate($request->all());
        $indicators = $this->refundsRepository->getIndicators($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => [
                'data' => $result,
                'indicators' => $indicators
            ],
        ]);
    }
}
