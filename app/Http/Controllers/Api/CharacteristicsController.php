<?php

namespace App\Http\Controllers\Api;

use App\Repositories\CharacteristicsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CharacteristicsController extends BaseController
{
    private mixed $characteristicsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->characteristicsRepository = app(CharacteristicsRepository::class);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $result = $this->characteristicsRepository->getAllWithPaginate();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function list(): JsonResponse
    {
        $result = $this->characteristicsRepository->list();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function create(Request $request): JsonResponse
    {
        $result = $this->characteristicsRepository->create($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function edit($id): JsonResponse
    {
        $result = $this->characteristicsRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * @param $id
     * @param Request $request
     * @return JsonResponse
     */
    public function update($id, Request $request): JsonResponse
    {
        $result = $this->characteristicsRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        $result = $this->characteristicsRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
