<?php

namespace App\Http\Controllers\Api\Statistics;

use App\Http\Controllers\Api\BaseController;
use App\Repositories\Statistics\MarketingStatisticRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MarketingStatisticController extends BaseController
{
    private mixed $marketingStatisticRepository;

    public function __construct()
    {
        parent::__construct();
        $this->marketingStatisticRepository = app(MarketingStatisticRepository::class);
    }

    public function index(Request $request): JsonResponse
    {
        $result = $this->marketingStatisticRepository->getAllWithPaginate($request->all());
        $generalStat = $this->marketingStatisticRepository->generalStatistic($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
            'generalStat' => $generalStat,
        ]);
    }

    public function chart(Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->marketingStatisticRepository->getDataForChart($request->all())
        ]);
    }
}
