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
        return $this->returnResponse([
            'success' => true,
            'result' => $this->callbacksRepository->getAllWithPaginate(),
        ]);
    }

    public function edit($id): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->callbacksRepository->getById($id),
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->callbacksRepository->update($id, $request->all()),
        ]);
    }

    public function destroy($id): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->callbacksRepository->destroy($id),
        ]);
    }

    public function create(Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->callbacksRepository->create($request->all()),
        ]);
    }
}
