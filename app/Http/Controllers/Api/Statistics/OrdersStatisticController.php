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
        return $this->returnResponse([
            'success' => true,
            'result' => $this->ordersStatisticsRepository->getAllWithPaginate($request->all()),
        ]);
    }

    public function chart(Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->ordersStatisticsRepository->getDataForChart($request->all())
        ]);
    }

    public function indicators(Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->ordersStatisticsRepository->generalStatistic($request->all())
        ]);
    }
}
