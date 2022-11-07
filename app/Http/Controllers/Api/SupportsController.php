<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\SupportsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SupportsController extends BaseController
{
    private mixed $supportsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->supportsRepository = app(SupportsRepository::class);
    }

    public function index(Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->supportsRepository->getAllWithPaginate($request->all()),
        ]);
    }

    public function edit($id): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->supportsRepository->getById($id),
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->supportsRepository->update($id, $request->all()),
        ]);
    }

    public function destroy($id): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->supportsRepository->destroy($id),
        ]);
    }

    public function create(Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->supportsRepository->create($request->all()),
        ]);
    }
}
