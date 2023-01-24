<?php

namespace App\Http\Controllers;

use App\Models\Enums\OrderStatus;
use App\Repositories\AdvantagesRepository;
use App\Repositories\CategoriesRepository;
use App\Repositories\OptionsRepository;
use App\Repositories\PagesRepository;
use App\Repositories\ProductsRepository;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;

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
            'categories' => $this->getCategories(),
            'advantages' => $this->advantagesRepository->getAllToPublic(),
        ]);
    }

    public function category($slug)
    {
        $result = $this->categoriesRepository->findFySlug($slug);

        if ($result) {
            return view('pages.category', [
                'category' => $result,
                'categories' => $this->getCategories(),
                'options' => $this->getOptions(),
                'pages' => $this->getPagesList(),
            ]);
        } else {
            return abort(404);
        }
    }

    public function product($id)
    {
        $result = $this->productRepository->getByIdToPublic($id);

        if ($result) {
            $this->productRepository->updateProductViewed($id);
            return view('pages.product', [
                'options' => $this->getOptions(),
                'product' => $result,
                'pages' => $this->getPagesList(),
                'advantages' => $this->getAdvantages(),
                'categories' => $this->getCategories(),
            ]);
        } else {
            return abort(404);
        }
    }


    public function cart(): Factory|View|Application
    {
        return view('pages.cart', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
        ]);
    }

    public function checkout(): Factory|View|Application
    {
        return view('pages.checkout', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
        ]);
    }

    public function page($slug): Factory|View|Application
    {
        $result = $this->pagesRepository->getBySlug($slug);
        if ($result) {
            return view('pages.page', [
                'page' => $result,
                'options' => $this->getOptions(),
                'pages' => $this->getPagesList(),
                'categories' => $this->getCategories(),
            ]);
        } else {
            return abort(404);
        }

    }

    public function reviews(): View|Factory|Application
    {
        return view('pages.reviews', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
        ]);
    }

    public function thanks(): View|Factory|Application
    {
        return view('pages.thanks', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
        ]);
    }

    public function status(): View|Factory|Application
    {
        return view('pages.status', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
            'statuses' => OrderStatus::state
        ]);
    }

    public function support(): View|Factory|Application
    {
        return view('pages.support', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
        ]);
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
        return $this->categoriesRepository->listPublic();
    }
}
