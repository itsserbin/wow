<?php

namespace App\Http\Controllers;

use App\Models\Enums\OrderStatus;
use App\Repositories\AdvantagesRepository;
use App\Repositories\BannersRepository;
use App\Repositories\CategoriesRepository;
use App\Repositories\CharacteristicsRepository;
use App\Repositories\ColorsRepository;
use App\Repositories\FaqsRepository;
use App\Repositories\OptionsRepository;
use App\Repositories\PagesRepository;
use App\Repositories\ProductReviewsRepository;
use App\Repositories\ProductsRepository;
use App\Repositories\SizesRepository;
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
    private mixed $characteristicsRepository;
    private mixed $sizesRepository;
    private mixed $colorsRepository;
    private mixed $bannersRepository;
    private mixed $productReviewsRepository;
    private mixed $faqsRepository;
    private $event_id_page_view;

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
        $this->characteristicsRepository = app(CharacteristicsRepository::class);
        $this->sizesRepository = app(SizesRepository::class);
        $this->colorsRepository = app(ColorsRepository::class);
        $this->bannersRepository = app(BannersRepository::class);
        $this->productReviewsRepository = app(ProductReviewsRepository::class);
        $this->faqsRepository = app(FaqsRepository::class);
        $this->event_id_page_view = uniqid(null, true) . '_PageView' . '_' . time();
    }

    final public function home(): View|Factory|Application
    {
        $this->facebookService->view($this->event_id_page_view);

        return view('pages.home', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
            'banners' => $this->bannersRepository->getForPublic(),
            'advantages' => $this->advantagesRepository->getAllToPublic(),
            'reviews' => $this->productReviewsRepository->carouselList(10),
            'faqs' => $this->faqsRepository->getAllToPublic(),
            'event_id_page_view' => $this->event_id_page_view
        ]);
    }

    final public function category(string $slug)
    {
        $result = $this->categoriesRepository->findBySlug($slug);

        if ($result) {
            $this->facebookService->view($this->event_id_page_view);
            $characteristics = [
                'list' => $this->characteristicsRepository->getForPublic($slug),
                'price' => $this->productRepository->getMinMaxProductPrice($slug),
                'sizes' => $this->sizesRepository->getListForPublic($slug),
                'colors' => $this->colorsRepository->getListForPublic($slug)
            ];
            return view('pages.category', [
                'banners' => $this->bannersRepository->getForPublic($slug),
                'category' => $result,
                'categories' => $this->getCategories(),
                'options' => $this->getOptions(),
                'pages' => $this->getPagesList(),
                'characteristics' => $characteristics,
                'event_id_page_view' => $this->event_id_page_view
            ]);
        } else {
            return abort(404);
        }
    }

    final public function product($id)
    {
        $result = $this->productRepository->getByIdToPublic($id);

        if ($result) {
            $this->facebookService->view($this->event_id_page_view);

            $event_id_content = uniqid(null, true) . '_viewContent' . '_' . time();
            $event_id_addToCard = uniqid(null, true) . '_AddToCart' . '_' . time();
            $event_id_purchase_in_1_click = uniqid(null, true) . '_Purchase_in_1_click' . '_' . time();
            $event_id_add_to_cart_in_1_click = uniqid(null, true) . '_AddToCard_in_1_click' . '_' . time();

            $this->facebookService->viewContent($result, $event_id_content);
            $this->productRepository->updateProductViewed($id);

            return view('pages.product', [
                'characteristics' => $this->productRepository->getCharacteristicsForPublic($id),
                'options' => $this->getOptions(),
                'product' => $result,
                'pages' => $this->getPagesList(),
                'advantages' => $this->getAdvantages(),
                'categories' => $this->getCategories(),
                'reviews' => $this->productReviewsRepository->carouselList(10),
                'recommend_products' => $this->productRepository->getRecommendProductsForPublicWithLimit($id, 'total_sales'),
                'new_products' => $this->productRepository->getRecommendProductsForPublicWithLimit($id, 'id'),
                'best_products' => $this->productRepository->getRecommendProductsForPublicWithLimit(null, 'total_sales'),
                'faqs' => $this->faqsRepository->getAllToPublic(),
                'event_id_content' => $event_id_content,
                'event_id_addToCard' => $event_id_addToCard,
                'event_id_purchase_in_1_click' => $event_id_purchase_in_1_click,
                'event_id_add_to_cart_in_1_click' => $event_id_add_to_cart_in_1_click,
                'event_id_page_view' => $this->event_id_page_view
            ]);
        } else {
            return abort(404);
        }
    }


    public function cart(): Factory|View|Application
    {
        $this->facebookService->view($this->event_id_page_view);

        return view('pages.cart', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
            'recommend_products' => $this->productRepository->getRecommendProductsForPublicCart(),
            'event_id_page_view' => $this->event_id_page_view
        ]);
    }

    public function checkout(): Factory|View|Application
    {
        $event_id_initiateCheckout = uniqid(null, true) . '_initiateCheckout' . '_' . time();
        $this->facebookService->view($this->event_id_page_view);
        $this->facebookService->InitiateCheckout($this->shoppingCartService->cartList(), $event_id_initiateCheckout);
        return view('pages.checkout', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
            'event_id_initiateCheckout' => $event_id_initiateCheckout,
            'event_id_purchase' => uniqid(null, true) . '_purchase' . '_' . time(),
            'event_id_page_view' => $this->event_id_page_view
        ]);
    }

    public function page($slug)
    {
        $result = $this->pagesRepository->getBySlug($slug);
        if ($result) {
            $this->facebookService->view($this->event_id_page_view);
            return view('pages.page', [
                'page' => $result,
                'options' => $this->getOptions(),
                'pages' => $this->getPagesList(),
                'categories' => $this->getCategories(),
                'event_id_page_view' => $this->event_id_page_view
            ]);
        } else {
            return abort(404);
        }

    }

    public function reviews(): View|Factory|Application
    {
        $this->facebookService->view($this->event_id_page_view);
        return view('pages.reviews', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
            'event_id_page_view' => $this->event_id_page_view
        ]);
    }

    public function thanks(): View|Factory|Application
    {
        $this->facebookService->view($this->event_id_page_view);
        return view('pages.thanks', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
            'event_id_page_view' => $this->event_id_page_view
        ]);
    }

    public function status(): View|Factory|Application
    {
        $this->facebookService->view($this->event_id_page_view);
        return view('pages.status', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
            'statuses' => OrderStatus::state,
            'event_id_page_view' => $this->event_id_page_view
        ]);
    }

    public function support(): View|Factory|Application
    {
        $this->facebookService->view($this->event_id_page_view);
        return view('pages.support', [
            'options' => $this->getOptions(),
            'pages' => $this->getPagesList(),
            'categories' => $this->getCategories(),
            'event_id_page_view' => $this->event_id_page_view
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
