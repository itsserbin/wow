<?php

namespace App\Http\Controllers\Api\Statistics;

use App\Http\Controllers\Api\BaseController;
use App\Repositories\Statistics\OrdersStatisticsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrdersStatisticController extends BaseController
{
    private mixed $ordersStatisticsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->ordersStatisticsRepository = app(OrdersStatisticsRepository::class);
    }

    public function index(Request $request): JsonResponse
    {
        $result = $this->ordersStatisticsRepository->getAllWithPaginate($request->all());
        $generalStatistics = $this->ordersStatisticsRepository->generalStatistic($request->all());
        $generalIndicatorsStatistic = $this->ordersStatisticsRepository->generalIndicatorsStatistic($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
            'generalStatistics' => $generalStatistics,
            'generalIndicatorsStatistic' => $generalIndicatorsStatistic
        ]);
    }

    public function chart(Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->ordersStatisticsRepository->getDataForChart($request->all())
        ]);
    }
}
