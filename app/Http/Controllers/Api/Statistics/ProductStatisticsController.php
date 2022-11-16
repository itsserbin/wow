<?php

namespace App\Http\Controllers\Api\Statistics;

use App\Http\Controllers\Api\BaseController;
use App\Repositories\Statistics\ProductStatisticsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductStatisticsController extends BaseController
{
    private mixed $productStatisticsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->productStatisticsRepository = app(ProductStatisticsRepository::class);
    }

    public function index(Request $request): JsonResponse
    {
        $result = $this->productStatisticsRepository->getAllWithPaginate($request->all());
        $generalStat = $this->productStatisticsRepository->generalStatistic($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
            'generalStat' => $generalStat,
        ]);
    }
}
