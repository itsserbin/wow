<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\OrdersRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrdersController extends BaseController
{
    private mixed $ordersRepository;

    public function __construct()
    {
        parent::__construct();
        $this->ordersRepository = app(OrdersRepository::class);
    }

    public function index(Request $request): JsonResponse
    {
        $result = $this->ordersRepository->getAllWithPaginate($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function filter(Request $request): JsonResponse
    {
        $result = $this->ordersRepository->filter($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function search(Request $request): JsonResponse
    {
        $result = $this->ordersRepository->search(
            $request->get('param'),
            $request->get('value'),
            15
        );

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $result = $this->ordersRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function edit($id): JsonResponse
    {
        $result = $this->ordersRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        $result = $this->ordersRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function massActions(Request $request): JsonResponse
    {
        $result = $this->ordersRepository->massActions($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
