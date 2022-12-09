<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\InvoicesRepository;
use App\Repositories\ProductsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class InvoicesController extends BaseController
{
    private mixed $invoicesRepository;

    public function __construct()
    {
        parent::__construct();
        $this->invoicesRepository = app(InvoicesRepository::class);
    }

    public function index(): JsonResponse
    {
        $result = $this->invoicesRepository->getAllWithPaginate();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function create(Request $request): JsonResponse
    {
        $result = $this->invoicesRepository->create($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function update(int $id, Request $request): JsonResponse
    {
        $result = $this->invoicesRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function destroy(int $id): JsonResponse
    {
        $result = $this->invoicesRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function edit(int $id): JsonResponse
    {
        $result = $this->invoicesRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
