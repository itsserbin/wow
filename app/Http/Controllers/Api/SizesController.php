<?php

namespace App\Http\Controllers\Api;

use App\Repositories\SizesRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SizesController extends BaseController
{
    private mixed $sizesRepository;

    public function __construct()
    {
        parent::__construct();
        $this->sizesRepository = app(SizesRepository::class);
    }

    public function list(): JsonResponse
    {
        $result = $this->sizesRepository->list();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function index(): JsonResponse
    {
        $result = $this->sizesRepository->getAllWithPaginate();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function create(Request $request): JsonResponse
    {
        $result = $this->sizesRepository->create($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        $result = $this->sizesRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $result = $this->sizesRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function edit($id): JsonResponse
    {
        $result = $this->sizesRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
