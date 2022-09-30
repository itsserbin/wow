<?php

namespace App\Http\Controllers\Api\Statistics;

use App\Http\Controllers\Api\BaseController;
use App\Repositories\Statistics\CostsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CostsController extends BaseController
{
    private mixed $costsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->costsRepository = app(CostsRepository::class);
    }

    public function index(Request $request): JsonResponse
    {
        $result = $this->costsRepository->getAllWithPaginate($request->all());
        $generalStat = $this->costsRepository->generalStatistic($request->all());
        $all = $this->costsRepository->getAllForChart($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
            'generalStat' => $generalStat,
            'all' => $all,
        ]);
    }

    public function create(Request $request): JsonResponse
    {
        $result = $this->costsRepository->create($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function edit($id): JsonResponse
    {
        $result = $this->costsRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $result = $this->costsRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        $result = $this->costsRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
