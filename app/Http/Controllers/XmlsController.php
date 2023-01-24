<?php

namespace App\Http\Controllers;

use App\Models\Enums\ProductAvailability;
use App\Models\Product;
use App\Services\XmlService;
use Illuminate\Http\Response;

class XmlsController extends Controller
{
    private mixed $xmlService;

    public function __construct()
    {
        parent::__construct();
        $this->xmlService = app(XmlService::class);
    }

    public function getFbFeedBySlug($slug)
    {
        $result = $this->xmlService->getFbFeed($slug);

        return response()->view('xml.fb-product-feed', [
            'products' => $result['products'],
            'xml' => $result['xml'],
        ])->header('Content-Type', 'application/xml');
    }

    public function getAllProductsToFbFeed()
    {
        $result = $this->xmlService->getAllProductsToFbFeed();

        return response()->view('xml.fb-product-feed', [
            'products' => $result['products'],
            'xml' => $result['xml'],
        ])->header('Content-Type', 'application/xml');
    }

    public function getProductsFromCategoryToFbFeed($slugs): Response
    {
        $result = $this->xmlService->getProductsFromCategoryToFbFeed($slugs);

        return response()->view('xml.fb-product-feed', [
            'products' => $result['products'],
            'xml' => $result['xml'],
        ])->header('Content-Type', 'application/xml');
    }

    public function xmlFbSwimwearAndTunics()
    {
        $products = Product::whereHas('categories', function ($q) {
            $q->where('id', 6);
            $q->orWhere('id', 5);
            $q->orWhere('id', 3);
        })
            ->where('published', 1)
            ->where(function ($query) {
                $query->where('status', ProductAvailability::IN_STOCK);
                $query->orWhere('status', ProductAvailability::ENDS);
            })
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->view('xml.fb-product-feed', [
            'products' => $products
        ])->header('Content-Type', 'application/xml');
    }

    public function xmlFbSwimwear()
    {
        $products = Product::whereHas('categories', function ($q) {
            $q->where('id', 5);
            $q->orWhere('id', 3);
        })
            ->where('published', 1)
            ->where(function ($query) {
                $query->where('status', ProductAvailability::IN_STOCK);
                $query->orWhere('status', ProductAvailability::ENDS);
            })
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->view('xml.fb-product-feed', [
            'products' => $products
        ])->header('Content-Type', 'application/xml');
    }

    public function xmlFbTopSwimwearAndTunics()
    {
        $products = Product::where('published', 1)
            ->where(function ($query) {
                $query->where('status', ProductAvailability::IN_STOCK);
                $query->orWhere('status', ProductAvailability::ENDS);
            })->where(function ($q) {
                $q->where('id', 119);
                $q->orWhere('id', 118);
                $q->orWhere('id', 116);
                $q->orWhere('id', 109);
                $q->orWhere('id', 103);
                $q->orWhere('id', 101);
                $q->orWhere('id', 104);
                $q->orWhere('id', 105);
                $q->orWhere('id', 98);
                $q->orWhere('id', 97);
                $q->orWhere('id', 96);
                $q->orWhere('id', 95);
                $q->orWhere('id', 80);
                $q->orWhere('id', 78);
                $q->orWhere('id', 74);
                $q->orWhere('id', 73);
                $q->orWhere('id', 70);
                $q->orWhere('id', 72);
                $q->orWhere('id', 71);
                $q->orWhere('id', 48);
                $q->orWhere('id', 39);
                $q->orWhere('id', 37);
                $q->orWhere('id', 29);
                $q->orWhere('id', 28);
                $q->orWhere('id', 25);
                $q->orWhere('id', 20);
                $q->orWhere('id', 12);
            })
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->view('xml.fb-product-feed', [
            'products' => $products
        ])->header('Content-Type', 'application/xml');
    }

    public function xmlFbTopUnderwear()
    {
        $products = Product::where('published', 1)
            ->where(function ($query) {
                $query->where('status', ProductAvailability::IN_STOCK);
                $query->orWhere('status', ProductAvailability::ENDS);
            })->where(function ($q) {
                $q->where('id', 161);
                $q->orWhere('id', 159);
                $q->orWhere('id', 142);
                $q->orWhere('id', 139);
                $q->orWhere('id', 134);
                $q->orWhere('id', 131);
                $q->orWhere('id', 130);
                $q->orWhere('id', 125);
                $q->orWhere('id', 124);
                $q->orWhere('id', 121);
            })
            ->orderBy('created_at', 'desc')
            ->get();;

        return response()->view('xml.fb-product-feed', [
            'products' => $products
        ])->header('Content-Type', 'application/xml');
    }

    public function sitemap(): Response
    {
       $result = $this->xmlService->getSitemap();

        return response()->view('xml.sitemap', [
            'products' => $result['products'],
            'categories' => $result['categories'],
        ])->header('Content-Type', 'application/xml');
    }

    public function imagesSitemap(): Response
    {
        $result = $this->xmlService->getImagesSitemap();

        return response()->view('xml.images-sitemap', [
            'products' => $result,
        ])->header('Content-Type', 'application/xml');
    }
//
//    /**
//     * Открыть товарный фид для prom.ua.
//     *
//     * @return Response
//     */
//    public function promProductFeed(): Response
//    {
//        $products = $this->productRepository->getAll();
//        $categories = $this->categoriesRepository->getAllToFeed();
//
//        return response()->view('xml.prom-product-feed', [
//            'products' => $products,
//            'categories' => $categories,
//        ])->header('Content-Type', 'application/xml');
//    }
}
