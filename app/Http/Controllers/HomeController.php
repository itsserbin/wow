<?php

namespace App\Http\Controllers;

use App\Models\Enums\OrderStatus;
use App\Repositories\AdvantagesRepository;
use App\Repositories\CategoriesRepository;
use App\Repositories\OptionsRepository;
use App\Repositories\PagesRepository;
use App\Repositories\ProductsRepository;
use App\Services\FacebookService;
use App\Services\ShoppingCartService;
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
    private mixed $facebookService;
    private mixed $shoppingCartService;

    public function __construct()
    {
        parent::__construct();
        $this->productRepository = app(ProductsRepository::class);
        $this->categoriesRepository = app(CategoriesRepository::class);
        $this->optionsRepository = app(OptionsRepository::class);
        $this->advantagesRepository = app(AdvantagesRepository::class);
        $this->pagesRepository = app(PagesRepository::class);
        $this->facebookService = app(FacebookService::class);
        $this->shoppingCartService = app(ShoppingCartService::class);
    }

    public function home(): View|Factory|Application
    {
        $this->facebookService->view();
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
            $this->facebookService->view();
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
            $this->facebookService->view();

            $event_id_content = uniqid() . '_viewContent' . '_' . time();
            $event_id_addToCard = uniqid() . '_AddToCart' . '_' . time();
            $event_id_purchase_in_1_click = uniqid() . '_Purchase_in_1_click' . '_' . time();
            $event_id_add_to_cart_in_1_click = uniqid() . '_AddToCard_in_1_click' . '_' . time();

            $this->facebookService->viewContent($result, $event_id_content);
            $this->productRepository->updateProductViewed($id);
            return view('pages.product', [
                'options' => $this->getOptions(),
                'product' => $result,
                'pages' => $this->getPagesList(),
                'advantages' => $this->getAdvantages(),
                'categories' => $this->getCategories(),
                'event_id_content' => $event_id_content,
                'event_id_addToCard' => $event_id_addToCard,
                'event_id_purchase_in_1_click' => $event_id_purchase_in_1_click,
                'event_id_add_to_cart_in_1_click' => $event_id_add_to_cart_in_1_click,
            ]);
        } else {
            return abort(404);
        }
    }


    public function cart(): Factory|View|Application
    {
        $this->facebookService->view();

        return view('pages.cart', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
        ]);
    }

    public function checkout(): Factory|View|Application
    {
        $event_id_initiateCheckout = uniqid() . '_initiateCheckout' . '_' . time();
        $this->facebookService->view();
        $this->facebookService->InitiateCheckout($this->shoppingCartService->cartList(), $event_id_initiateCheckout);
        return view('pages.checkout', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
            'event_id_initiateCheckout' => $event_id_initiateCheckout,
            'event_id_purchase' => uniqid() . '_purchase' . '_' . time()
        ]);
    }

    public function page($slug)
    {
        $result = $this->pagesRepository->getBySlug($slug);
        if ($result) {
            $this->facebookService->view();
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
        $this->facebookService->view();
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
        $this->facebookService->view();
        return view('pages.status', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
            'statuses' => OrderStatus::state
        ]);
    }

    public function support(): View|Factory|Application
    {
        $this->facebookService->view();
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
