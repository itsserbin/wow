<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Enums\ClientStatus;
use App\Models\Enums\ClientSubStatus;
use App\Repositories\ClientsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ClientsController extends BaseController
{
    private mixed $clientsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->clientsRepository = app(ClientsRepository::class);
    }

    public function index(Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->clientsRepository->getAllWithPaginate($request->all()),
            'indicators' => $this->clientsRepository->indicators($request->all())
        ]);
    }

    public function search($search): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->clientsRepository->search($search),
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $result = $this->clientsRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function edit($id): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->clientsRepository->getById($id),
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->clientsRepository->update($id, $request->all()),
        ]);
    }

    public function statuses(): JsonResponse
    {
        return $this->returnResponse([
            'statuses' => ClientStatus::state,
            'subStatuses' => ClientSubStatus::state
        ]);
    }
}
