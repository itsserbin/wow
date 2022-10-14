<?php

namespace App\Http\Controllers\Api;

use App\Services\ShoppingCartService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CartController extends BaseController
{
    private mixed $shoppingCartService;

    public function __construct()
    {
        parent::__construct();
        $this->shoppingCartService = app(ShoppingCartService::class);
    }

    public function list(): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->shoppingCartService->cartList()
        ]);
    }

    public function add(Request $request): JsonResponse
    {
        $uuid = $this->shoppingCartService->addItem($request->all());

        if (!$uuid) {
            return $this->returnResponse([
                'success' => true,
            ]);
        } else {
            return $this->returnResponse([
                'success' => true,
            ], 201, [], ['name' => 'cart', 'value' => $uuid]);
        }
    }

    public function update(Request $request): JsonResponse
    {
        $this->shoppingCartService->updateCart($request->all());

        return $this->returnResponse([
            'success' => true,
        ]);
    }

    public function delete(Request $request): JsonResponse
    {
        $this->shoppingCartService->deleteItem($request->route('item'));

        return $this->returnResponse([
            'success' => true,
        ]);
    }

    public function updateDecrement($id): JsonResponse
    {
        $this->shoppingCartService->updateDecrement($id);

        return $this->returnResponse([
            'success' => true,
        ]);
    }

    public function updateIncrement($id): JsonResponse
    {
        $this->shoppingCartService->updateIncrement($id);

        return $this->returnResponse([
            'success' => true,
        ]);
    }

    public function activatePromoCode(Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->shoppingCartService->activatePromoCode($request->get('promo_code'))
        ]);
    }

    public function deactivatePromoCode(): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->shoppingCartService->deactivatePromoCode()
        ]);
    }
}
