<?php

namespace App\Services;

//use App\Mail\NewOrder;
//use App\Mail\Order;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Order;
use App\Repositories\CartItemsRepository;
use App\Repositories\CartRepository;
use App\Repositories\ClientsRepository;
use App\Repositories\OrderItemsRepository;
use App\Repositories\OrdersRepository;
use App\Repositories\ProductsRepository;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class OrderCheckoutService
{
    private $cartRepository;
    private $cartItemsRepository;
    private $ordersRepository;
    private $orderItemsRepository;
    private $productRepository;
    private $clientsRepository;
    private $cookie;
    private $telegramNotificationService;

    public function __construct()
    {
//        $this->telegramNotificationService = app(TelegramNotificationService::class);
        $this->cartRepository = app(CartRepository::class);
        $this->productRepository = app(ProductsRepository::class);
        $this->clientsRepository = app(ClientsRepository::class);
        $this->cartItemsRepository = app(CartItemsRepository::class);
        $this->ordersRepository = app(OrdersRepository::class);
        $this->orderItemsRepository = app(OrderItemsRepository::class);
        $this->cookie = Cookie::get('cart');
    }

    public function createOrder(array $data)
    {
        $cart = $this->findCart();

        $phone = preg_replace('/[^0-9]/', '', $data['phone']);

        $client = $this->clientsRepository->checkByPhone($phone);

        if ($cart) {
            $items = $this->findCartItems($cart->id);
            if (!isset($client)) {
                $client = $this->clientsRepository->createClient(
                    $data,
                    $phone,
                    $cart->items,
                    $cart->promo_code
                );
            } else {
                $client = $this->clientsRepository->updateClient($client->id);
            }

            $order = $this->ordersRepository->create(
                $data,
                $client->id,
                $cart->promo_code,
                $cart->items
            );


            if ($this->orderItemsRepository->create($items, $order->id, $cart->promo_code)) {
                foreach ($items as $item) {
                    $this->productRepository->updateProductTotalSales($item->product_id);
                }
                $this->clientsRepository->updateAvgAndWholeCheck($client->id);
                $this->deleteCartItems($cart->id);
//                $this->telegramNotificationService->order($order, $name, $phone);
            }

//            try {
//                Mail::to(['serbin.ssd@gmail.com',
//                    'youbrand_top@ukr.net',
//                    'karina.youbrand@gmail.com'
//                ])->send(new Order($name, $phone));
//            } catch (\Throwable $exception) {
//                Log::error($exception->getMessage());
//            }

            return $this->ordersRepository->getById($order->id);
        }

    }


    public function findCart()
    {
        return $this->cartRepository->find($this->cookie);
    }

    public function findCartItems(int $cartId)
    {
        return $this->cartItemsRepository->find($cartId);
    }

    public function deleteCartItems(int $cartId)
    {
        return $this->cartItemsRepository->destroyCartItems($cartId);
    }

    public function getSpecialOffer($orderId)
    {
        $items = $this->orderItemsRepository->getByOrderId($orderId);
        $order = $this->ordersRepository->getById($orderId);
        if (Carbon::now()->format('Y.m.d H:i') < $order->created_at->addMinutes(10)->format('Y.m.d H:i')) {
            $result['end_time'] = $order->created_at->addMinutes(10);
            $result['products'] = $this->productRepository->getSpecialOffers($items);
            return $result;
        }
    }

    public function addSpecialItemToOrder($id, $item)
    {
        return $this->orderItemsRepository->addSpecialItemToOrder($id, $item);

    }
}
