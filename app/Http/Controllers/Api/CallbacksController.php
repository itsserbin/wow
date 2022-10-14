<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\CallbacksRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CallbacksController extends BaseController
{
    private mixed $callbacksRepository;

    public function __construct()
    {
        parent::__construct();
        $this->callbacksRepository = app(CallbacksRepository::class);
    }

    public function index(): JsonResponse
    {
        $result = $this->callbacksRepository->getAllWithPaginate();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function edit($id): JsonResponse
    {
        $result = $this->callbacksRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        $result = $this->callbacksRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $result = $this->callbacksRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
