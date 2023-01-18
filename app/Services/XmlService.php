<?php

namespace App\Services;


use App\Repositories\ProductsRepository;
use App\Repositories\XmlsRepository;

class XmlService
{
    private mixed $xmlsRepository;
    private mixed $productRepository;

    public function __construct()
    {
        $this->xmlsRepository = app(XmlsRepository::class);
        $this->productRepository = app(ProductsRepository::class);

    }

    public function getFbFeed($slug)
    {
        $xml = $this->xmlsRepository->getBySlug($slug);
        return ['xml' => $xml, 'products' => $this->productRepository->getProductsToFeedById($xml->products)];
    }

    public function getAllProductsToFbFeed()
    {
        $xml = [
            'title' => env('APP_NAME') . ' ' . 'Products Feed',
            'description' => env('APP_NAME') . ' ' . 'All Products Feed',
            'category' => 'fb',
        ];

        return ['xml' => $xml, 'products' => $this->productRepository->getAllProductsToFbFeed()];
    }

    public function getProductsFromCategoryToFbFeed($categorySlug)
    {
        $xml = [
            'title' => env('APP_NAME') . ' ' . $categorySlug . ' ' . 'Products Feed',
            'description' => env('APP_NAME') . ' ' . $categorySlug . ' ' . 'Products Feed',
            'category' => 'fb',
        ];

        return ['xml' => $xml, 'products' => $this->productRepository->getProductsFromCategoryToFbFeed($categorySlug)];
    }
}
