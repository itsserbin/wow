<?php

namespace App\Services;

use App\Models\Cart;
use App\Models\CartItem;
use App\Repositories\CartRepository;
use App\Repositories\CartItemsRepository;
use App\Repositories\ProductsRepository;
use App\Repositories\PromoCodesRepository;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cookie;


class ShoppingCartService
{
    private $cartRepository;
    private $cartItemsRepository;
    private $promoCodesRepository;
    private $cookie;
    private $uuid;
    private $facebookService;
    private $productsRepository;

    public function __construct()
    {
        $this->productsRepository = app(ProductsRepository::class);
        $this->cartRepository = app(CartRepository::class);
        $this->cartItemsRepository = app(CartItemsRepository::class);
        $this->promoCodesRepository = app(PromoCodesRepository::class);
        $this->cookie = Cookie::get('cart');
        $this->uuid = (string)Str::uuid();
        $this->facebookService = app(FacebookService::class);
    }

    /**
     * Get cart list
     *
     * @return array
     */
//    public function cartList()
//    {
//        $list = [];
//        $total_price = 0;
//        $total_quantity = 0;
//        $price_without_discount = 0;
//
//        if (!$this->cookie) {
//            return [
//                'list' => [],
//                'totalCount' => 0,
//                'totalPrice' => 0,
//            ];
//        }
//
//        /* @var $cart Cart */
//        $cart = $this->cartRepository->find($this->cookie);
//
//        if (!$cart) {
//            return [
//                'list' => [],
//                'totalCount' => 0,
//                'totalPrice' => 0,
//            ];
//        }
//
//        if (!$cart->items) {
//            return [
//                'list' => [],
//                'totalCount' => 0,
//                'totalPrice' => 0,
//            ];
//        }
//
//
//        foreach ($cart->items as $item) {
//            if ($item->product) {
//                $total_price += ($item->product->discount_price ?: $item->product->price) * $item->count;
//                $total_quantity += $item->count;
//
//                if ($item->product->discount_price) {
//                    $price_without_discount += $item->product->price * $item->count;
//                }
//
//                $list[] = [
//                    'id' => $item->product->id,
//                    'alias' => route('product', ['alias' => $item->product->alias, 'id' => $item->product->id]),
//                    'name' => $item->product->h1,
//                    'image' => $item->product->preview,
//                    'count' => $item->count,
//                    'size' => $item->size,
//                    'color' => $item->color,
//                    'price' => $item->product->price * $item->count,
//                    'discount_price' => $item->product->discount_price * $item->count,
//                    'maxcount' => 50,
//                    'category' => count($item->product->categories) ? $item->product->categories[0]->title : 'Без категорії'
//                ];
//            }
//
//        }
//
//        if ($cart->promo_code) {
//            $discount = $this->promoCodesRepository->getDiscount($cart->promo_code);
//            if ($discount) {
//                if ($discount->discount_in_hryvnia) {
//                    $total_price -= $discount->discount_in_hryvnia;
//                } elseif ($discount->percent_discount) {
//                    $total_price = $total_price * (100 - $discount->percent_discount) / 100;
//                }
//            }
//        }
//
//        return [
//            'list' => $list,
//            'promo_code' => $cart->promo_code,
//            'price_without_discount' => $price_without_discount,
//            'totalCount' => $total_quantity,
//            'totalPrice' => number_format($total_price, 2, '.', ''),
//        ];
//    }
    final public function cartList()
    {
        $list = collect([]);

        $total_price = 0;
        $total_quantity = 0;
        $price_without_discount = 0;

        if (!$this->cookie) {
            return [
                'list' => [],
                'totalCount' => 0,
                'totalPrice' => 0,
            ];
        }

        $cart = $this->cartRepository->find($this->cookie);

        if (!$cart) {
            return [
                'list' => [],
                'totalCount' => 0,
                'totalPrice' => 0,
            ];
        }

        $product_ids = $cart->items->pluck('product_id')->toArray();
        $products = $this->productsRepository->getByIds($product_ids)->keyBy('id');

        foreach ($cart->items as $item) {
            $product = $products->get($item->product_id);

            if ($product) {
                $total_quantity += $item->count;
                $product_price = $product->price;
                $product_discount_price = $product->discount_price;

                if ($product_discount_price) {
                    $price_without_discount += $product_price * $item->count;
                }

                $list->push([
                    'id' => $product->id,
                    'alias' => $product->alias_route,
                    'name' => $product->h1,
                    'image' => $product->preview,
                    'count' => $item->count,
                    'size' => $item->size,
                    'color' => $item->color,
                    'price' => $product_price * $item->count,
                    'discount_price' => $product_discount_price * $item->count,
                    'maxcount' => 50,
                    'category' => count($product->categories) ? $product->categories[0]->title : 'Без категорії'
                ]);

                $total_price += $product_discount_price ? $product_discount_price * $item->count : $product_price * $item->count;
            }
        }

        return [
            'list' => $list,
            'promo_code' => $cart->promo_code,
            'price_without_discount' => $price_without_discount,
            'totalCount' => $total_quantity,
            'totalPrice' => number_format($total_price, 2, '.', ''),
        ];
    }


    /**
     * Add new product to cart or update
     *
     * @param $data
     * @return bool|string
     */
    public function addItem($data)
    {
        /* @var $cart Cart */
        $cart = $this->cartRepository->find($this->cookie);

        if (!$cart) {
            /* @var $cart Cart */
            $cart = $this->cartRepository->create($this->uuid);

            $this->cartItemsRepository->create($data, $cart->id);

            return $this->uuid;
        }

        $item = $this->cartItemsRepository->getItem($data['item_id'], $cart->id);

        if ($item) {
            $data['count'] = $data['count'] + $item->count;

            $cartItem = $this->cartItemsRepository->update($data, $cart->id);
        } else {
            $cartItem = $this->cartItemsRepository->create($data, $cart->id);
        }

        $this->facebookService->addToCard($cartItem, $data['src'], $data['event_id']);

        return false;
    }

    /**
     * Update count current cart
     *
     * @param $data
     * @return bool
     */
    public function updateCart($data)
    {
        /* @var $cart Cart */
        $cart = $this->cartRepository->find($this->cookie);

        if (!$cart) {
            return false;
        }

        $this->cartItemsRepository->update($data, $cart->id);
    }

    /**
     * Delete item from cart
     *
     * @param $item
     */
    public function deleteItem($item)
    {
        /* @var $cart Cart */
        $cart = $this->cartRepository->find($this->cookie);

        return $this->cartItemsRepository->destroy($cart->id, $item);
    }

    public function updateDecrement($id)
    {
        $cart = $this->cartRepository->find($this->cookie);

        return $this->cartItemsRepository->updateDecrement($cart->id, $id);
    }


    public function updateIncrement($id)
    {
        $cart = $this->cartRepository->find($this->cookie);

        return $this->cartItemsRepository->updateIncrement($cart->id, $id);
    }

    public function activatePromoCode($code)
    {
        $result = $this->promoCodesRepository->checkPromoCode($code);

        if ($result !== null) {
            $this->addPromoCode($code);
            return true;
        } else {
            return false;
        }
    }

    public function deactivatePromoCode()
    {
        $cart = $this->cartRepository->find($this->cookie);

        return $this->cartRepository->deactivatePromoCode($cart->id);

    }

    public function addPromoCode($code)
    {
        $cart = $this->cartRepository->find($this->cookie);

        return $this->cartRepository->addPromoCode($cart->id, $code);
    }

    public function getCart()
    {
        return $this->cartRepository->find($this->cookie);

    }
}
