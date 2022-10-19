<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\ClientsRepository;
use App\Repositories\OrdersRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminController extends BaseController
{
    private mixed $ordersRepository;

    public function __construct()
    {
        parent::__construct();
        $this->ordersRepository = app(OrdersRepository::class);
    }

    public function dashboard(): JsonResponse
    {
        $countOrders = $this->ordersRepository->countOrdersForDashboard();

        return $this->returnResponse([
            'success' => true,
            'countOrders' => $countOrders,
        ]);
    }
}
