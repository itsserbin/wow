<?php

namespace App\Http\Controllers\Api;

use App\Repositories\PermissionsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PermissionsController extends BaseController
{
    private mixed $permissionsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->permissionsRepository = app(PermissionsRepository::class);
    }

    public function list(): JsonResponse
    {
        $result = $this->permissionsRepository->getAll();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function index(): JsonResponse
    {
        $result = $this->permissionsRepository->getAllWithPaginate();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function create(Request $request): JsonResponse
    {
        $result = $this->permissionsRepository->create($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        $result = $this->permissionsRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }


    public function edit($id): JsonResponse
    {
        $result = $this->permissionsRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $result = $this->permissionsRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
