<?php

namespace App\Http\Controllers;

use App\Repositories\AdvantagesRepository;
use App\Repositories\CategoriesRepository;
use App\Repositories\OptionsRepository;
use App\Repositories\PagesRepository;
use App\Repositories\ProductsRepository;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    private mixed $productRepository;

    private mixed $categoriesRepository;

    private mixed $optionsRepository;

    private mixed $advantagesRepository;

    private mixed $pagesRepository;

    public function __construct()
    {
        parent::__construct();
        $this->productRepository = app(ProductsRepository::class);
        $this->categoriesRepository = app(CategoriesRepository::class);
        $this->optionsRepository = app(OptionsRepository::class);
        $this->advantagesRepository = app(AdvantagesRepository::class);
        $this->pagesRepository = app(PagesRepository::class);
    }

    public function home(): View|Factory|Application
    {
        return view('pages.home', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'advantages' => $this->advantagesRepository->getAllToPublic(),
        ]);
    }

    public function category($slug): View|Factory|Application
    {
        return view('pages.category', [
            'category' => $this->categoriesRepository->findFySlug($slug),
            'categories' => $this->getCategories(),
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
        ]);
    }

    public function product($id): Factory|View|Application
    {
        $this->productRepository->updateProductViewed($id);

        return view('pages.product', [
            'options' => $this->getOptions(),
            'product' => $this->productRepository->getById($id),
            'pages' => $this->getPagesList(),
            'advantages' => $this->getAdvantages(),
            'categories' => $this->getCategories(),
        ]);
    }

    public function cart(): Factory|View|Application
    {
        return view('pages.cart', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
        ]);
    }

    public function checkout(): Factory|View|Application
    {
        return view('pages.checkout', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
        ]);
    }

    public function images($path)
    {
        return Storage::disk('s3')->response('/storage/banners/mobile/' . $path);
    }

    public function getOptions()
    {
        return $this->optionsRepository->getToProd();
    }

    public function getPagesList()
    {
        return $this->pagesRepository->getPagesListToPublic();
    }

    public function getAdvantages()
    {
        return $this->advantagesRepository->getAllToPublic();
    }

    public function getCategories()
    {
        return $this->categoriesRepository->getAllOnProd();
    }
}
