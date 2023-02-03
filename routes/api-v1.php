<?php

use App\Http\Controllers\Api\BannersController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CategoriesController;
use App\Http\Controllers\Api\FaqsController;
use App\Http\Controllers\Api\ProductReviewsController;
use App\Http\Controllers\Api\V1\ProductsController;
use App\Http\Controllers\Api\SocialReviewsController;
use App\Http\Controllers\Api\V1\OrdersController;
use App\Http\Controllers\Api\V1\InvoicesController;
use App\Http\Controllers\Api\V1\CallbacksController;
use App\Http\Controllers\Api\V1\SupportsController;
use App\Http\Controllers\External\NovaPoshtaController;
use Illuminate\Support\Facades\Route;

/** Public API */
Route::prefix('v1')->middleware('api')->group(function () {

    Route::post('callback', [CallbacksController::class, 'create'])
        ->name('api.v1.callback.create');

    /** Route group for reviews */
    Route::prefix('reviews')->group(function () {
        Route::post('create', [ProductReviewsController::class, 'create'])
            ->name('api.v1.public.reviews.list.create');

        Route::get('socials', [SocialReviewsController::class, 'getSocialsReviewsList'])
            ->name('api.v1.reviews.socials.list');

        Route::get('carousel-list', [ProductReviewsController::class, 'carouselList'])
            ->name('api.v1.public.reviews.list.carousel');

        Route::get('paginate-list', [ProductReviewsController::class, 'paginateList'])
            ->name('api.v1.public.reviews.list.paginate');

        Route::get('product/{id}', [ProductReviewsController::class, 'getProductReviews'])
            ->name('api.v1.public.reviews.product');
    });

    /** Route group for products */
    Route::prefix('product')->group(function () {

        Route::get('/', [ProductsController::class, 'getAllToPublic'])
            ->name('api.v1.product.all');

        Route::get('show/{id}', [ProductsController::class, 'getProduct'])
            ->name('api.v1.products.show');

        Route::get('colors/{id}', [ProductsController::class, 'getProductColors'])
            ->name('api.v1.product.colors.show');

        Route::get('get-images/{id}', [ProductsController::class, 'getImages'])
            ->name('api.v1.public.products.images.get');

        Route::get('relative/{id}', [ProductsController::class, 'getRelativeProducts'])
            ->name('api.v1.products.relative.get');

        Route::get('best-selling', [ProductsController::class, 'getBestSellingProductsWithPaginate'])
            ->name('api.v1.products.best-selling');

        Route::get('category/{slug}', [ProductsController::class, 'getByCategorySlug'])
            ->name('api.v1.products.category');

        Route::get('recommend-products', [ProductsController::class, 'getRecommendProducts'])
            ->name('api.v1.products.recommend');

//        Route::get('best-selling-products', [ProductsController::class, 'getBestSellingProducts'])
//            ->name('api.v1.products.best-selling-products');

        Route::get('new-products', [ProductsController::class, 'getNewProducts'])
            ->name('api.v1.products.new-products');
    });

    Route::prefix('cart')->group(function () {

        Route::get('list', [CartController::class, 'list'])
            ->name('api.v1.cart.list');

        Route::post('add', [CartController::class, 'add'])
            ->name('api.v1.cart.add');

        Route::delete('delete/{item}', [CartController::class, 'delete'])
            ->name('api.v1.cart.delete');

        Route::post('update', [CartController::class, 'update'])
            ->name('api.v1.cart.update');

        Route::post('update-decrement/{id}', [CartController::class, 'updateDecrement'])
            ->name('api.v1.cart.update.decrement');

        Route::post('update-increment/{id}', [CartController::class, 'updateIncrement'])
            ->name('api.v1.cart.update.increment');

        Route::prefix('promo-code')->group(function () {
            Route::post('activate', [CartController::class, 'activatePromoCode'])
                ->name('api.v1.cart.promo.code.activate');

            Route::post('deactivate', [CartController::class, 'deactivatePromoCode'])
                ->name('api.v1.cart.promo.code.deactivate');
        });
    });

    Route::prefix('order')->group(function () {

        Route::post('status', [OrdersController::class, 'status'])
            ->name('api.v1.orders.status');

        Route::post('create', [OrdersController::class, 'create'])
            ->name('api.v1.orders.create');

        Route::post('create-1-click', [OrdersController::class, 'create1Click'])
            ->name('api.v1.orders.create.1click');

        Route::get('special/{orderId}', [OrdersController::class, 'getSpecialOffer'])
            ->name('api.v1.orders.special');

        Route::post('add-item/{id}', [OrdersController::class, 'addItemToOrder'])
            ->name('api.v1.orders.add-item');

        Route::post('set-prepayment', [OrdersController::class, 'setPrepayment'])
            ->name('api.v1.orders.set-prepayment');
    });

    /** Группа маршрутов для категорий */
    Route::prefix('category')->group(function () {

        /**
         * Получить категории для вывода на продакшн.
         *
         * GET /api/category/all-on-prod
         */
        Route::get('list', [CategoriesController::class, 'listPublic'])
            ->name('api.v1.category.list');

        /**
         * Получить отдельную категорию.
         *
         * GET /api/category/{slug}
         */
        Route::get('{slug}', [CategoriesController::class, 'getBySlug'])
            ->name('api.v1.category.getCategoryOnProduction');

        /**
         * Получить товары из определенной категории..
         *
         * GET /api/category/products/{slug}
         */
//        Route::get('products/{slug}', [CategoriesController::class, 'getCategoryProducts'])
//            ->name('api.category.getCategoryProductsOnProduction');
    });

    Route::prefix('user')->group(function () {

        Route::get('info', [UsersController::class, 'getUserInfo'])
            ->name('api.v1.user.info');
    });

    Route::prefix('banners')->group(function () {
        Route::get('all', [BannersController::class, 'all'])
            ->name('api.v1.banners.all');

        Route::get('category/{id}', [BannersController::class, 'category'])
            ->name('api.v1.banners.category');
    });

    Route::get('faq/list', [FaqsController::class, 'list'])
        ->name('api.v1.faq.list');

    Route::post('support/create', [SupportsController::class, 'create'])
        ->name('api.v1.support.create');

    Route::prefix('nova-poshta')->group(function () {
        Route::post('search-city', [NovaPoshtaController::class, 'searchCity'])
            ->name('api.nova-poshta.city.search');

        Route::post('search-street', [NovaPoshtaController::class, 'searchStreet'])
            ->name('api.nova-poshta.street.search');

        Route::prefix('post-offices')->group(function () {
            Route::post('search-by-city', [NovaPoshtaController::class, 'searchPostOfficesByCity'])
                ->name('api.nova-poshta.post-offices.search.city');

            Route::post('search-by-id', [NovaPoshtaController::class, 'searchPostOfficesById'])
                ->name('api.nova-poshta.post-offices.search.id');
        });
    });

    Route::post('set-invoice', [InvoicesController::class, 'setInvoiceStatus'])
        ->name('api.v1.invoices.set-status');
});
