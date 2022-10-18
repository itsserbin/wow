<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderCreateRequest;
use App\Repositories\OrdersRepository;
use App\Services\OrderCheckoutService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrdersController extends BaseController
{
    private mixed $ordersRepository;
    private mixed $orderCheckoutService;

    public function __construct()
    {
        parent::__construct();
        $this->ordersRepository = app(OrdersRepository::class);
        $this->orderCheckoutService = app(OrderCheckoutService::class);
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

    public function search($search): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->ordersRepository->search($search),
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

    public function create(Request $request): JsonResponse
    {
        $order = $this->orderCheckoutService->createOrder($request->all());

        return $this->returnResponse([
            'success' => true,
            'order' => $order
        ]);
    }

    public function getSpecialOffer($orderId): JsonResponse
    {
        $result = $this->orderCheckoutService->getSpecialOffer($orderId);

        return $this->returnResponse([
            'success' => true,
            'result' => $result
        ]);
    }

    public function addItemToOrder($id, Request $request): JsonResponse
    {
        $result = $this->orderCheckoutService->addSpecialItemToOrder($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result
        ]);
    }
}
