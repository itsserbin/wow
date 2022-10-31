<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\OrderCreateRequest;
use App\Http\Requests\OrderStatusRequest;
use App\Models\Enums\OrderStatus;
use App\Repositories\OrdersRepository;
use App\Services\OrderCheckoutService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;

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

    public function create(OrderCreateRequest $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'order' => $this->orderCheckoutService->createOrder($request->all())
        ]);
    }

    public function getSpecialOffer($orderId): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->orderCheckoutService->getSpecialOffer($orderId)
        ]);
    }

    public function addItemToOrder($id, Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->orderCheckoutService->addSpecialItemToOrder($id, $request->all())
        ]);
    }

    public function setPrepayment(Request $request): Redirector|Application|RedirectResponse
    {
        $result = $this->ordersRepository->setPrepayment($request->all());

        if ($result) {
            return redirect(route('thanks', $result->id));
        } else {
            return redirect(route('checkout'));

        }
    }

    public function status(OrderStatusRequest $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->ordersRepository->getStatus($request->all()),
        ]);
    }
}
