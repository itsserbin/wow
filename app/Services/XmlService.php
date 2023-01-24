<?php

namespace App\Services;


use App\Repositories\CategoriesRepository;
use App\Repositories\ProductsRepository;
use App\Repositories\XmlsRepository;

class XmlService
{
    private mixed $xmlsRepository;
    private mixed $productRepository;
    private mixed $categoriesRepository;

    public function __construct()
    {
        $this->xmlsRepository = app(XmlsRepository::class);
        $this->productRepository = app(ProductsRepository::class);
        $this->categoriesRepository = app(CategoriesRepository::class);

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

    public function getSitemap()
    {
        return [
            'products' => $this->productRepository->getAllProductsToFbFeed(),
            'categories' => $this->categoriesRepository->getAllToFeed()
        ];
    }

    public function getImagesSitemap()
    {
        return $this->productRepository->getAllProductsToFbFeed();
    }
}
