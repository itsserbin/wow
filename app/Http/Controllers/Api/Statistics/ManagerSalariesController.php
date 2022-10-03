<?php

namespace App\Http\Controllers\Api\Statistics;

use App\Http\Controllers\Api\BaseController;
use App\Repositories\Statistics\ManagerSalariesRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ManagerSalariesController extends BaseController
{
    private mixed $managerSalariesRepository;

    public function __construct()
    {
        parent::__construct();
        $this->managerSalariesRepository = app(ManagerSalariesRepository::class);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $generalStat = $this->managerSalariesRepository->generalStatistics($request->all());
        $result = $this->managerSalariesRepository->getAllStatistics($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
            'generalStat' => $generalStat,
        ]);
    }
}
