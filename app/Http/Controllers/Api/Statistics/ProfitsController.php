<?php

namespace App\Http\Controllers\Api\Statistics;

use App\Http\Controllers\Api\BaseController;
use App\Repositories\Statistics\ProfitsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProfitsController extends BaseController
{
    private mixed $profitsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->profitsRepository = app(ProfitsRepository::class);
    }

    public function index(Request $request): JsonResponse
    {
        $result = $this->profitsRepository->getAllWithPaginate($request->all());
        $generalStat = $this->profitsRepository->generalStatistic($request->all());
        $chart = $this->profitsRepository->getDataForChart($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
            'generalStat' => $generalStat,
            'chart' => $chart,
        ]);
    }
}
