<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\OrderItemsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderItemsController extends BaseController
{
    private mixed $orderItemsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->orderItemsRepository = app(OrderItemsRepository::class);
    }

    public function getByOrderId($id): JsonResponse
    {
        $result = $this->orderItemsRepository->getByOrderId($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function destroy($item_id,$order_id): JsonResponse
    {
        $result = $this->orderItemsRepository->destroy($item_id,$order_id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function edit($id): JsonResponse
    {
        $result = $this->orderItemsRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        $result = $this->orderItemsRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }


    public function addItem($id, Request $request): JsonResponse
    {
        $result = $this->orderItemsRepository->addItemToOrder($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
