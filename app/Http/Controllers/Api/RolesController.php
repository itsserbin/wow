<?php

namespace App\Http\Controllers\Api;

use App\Repositories\RolesRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RolesController extends BaseController
{
    private mixed $rolesRepository;

    public function __construct()
    {
        parent::__construct();
        $this->rolesRepository = app(RolesRepository::class);
    }

    public function list(): JsonResponse
    {
        $result = $this->rolesRepository->getAll();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function index(): JsonResponse
    {
        $result = $this->rolesRepository->getAllWithPaginate();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function create(Request $request): JsonResponse
    {
        $result = $this->rolesRepository->create($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        $result = $this->rolesRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }


    public function edit($id): JsonResponse
    {
        $result = $this->rolesRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $result = $this->rolesRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
