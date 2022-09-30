<?php

use App\Http\Controllers\Api\CategoriesController;
use App\Http\Controllers\Api\ColorsController;
use App\Http\Controllers\Api\OrdersController;
use App\Http\Controllers\Api\ProductReviewsController;
use App\Http\Controllers\Api\ProductsController;
use App\Http\Controllers\Api\ProvidersController;
use App\Http\Controllers\Api\SizesController;
use App\Http\Controllers\Api\SocialReviewsController;
use App\Http\Controllers\Api\Statistics\CostCategoriesController;
use App\Http\Controllers\Api\Statistics\CostsController;
use App\Http\Controllers\Api\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('products')->group(function () {
        Route::get('/', [ProductsController::class, 'index'])
            ->name('api.products.index');

        Route::post('create', [ProductsController::class, 'create'])
            ->name('api.products.create');

        Route::get('edit/{id}', [ProductsController::class, 'edit'])
            ->name('api.products.edit');

        Route::put('update/{id}', [ProductsController::class, 'update'])
            ->name('api.products.update');

        Route::delete('destroy/{id}', [ProductsController::class, 'destroy'])
            ->name('api.products.destroy');

        Route::get('list', [ProductsController::class, 'list'])
            ->name('api.products.list');
    });

    Route::prefix('users')->group(function () {

        Route::get('/', [UsersController::class, 'index'])
            ->name('api.users.index');

        Route::get('edit/{id}', [UsersController::class, 'edit'])
            ->name('api.users.edit');

        Route::post('create', [UsersController::class, 'create'])
            ->name('api.users.create');

        Route::put('update/{id}', [UsersController::class, 'update'])
            ->name('api.users.update');

        Route::get('search={search}', [UsersController::class, 'search'])
            ->name('api.users.search');

        Route::delete('/destroy/{id}', [UsersController::class, 'destroy'])
            ->name('api.users.destroy');

        Route::prefix('list')->group(function () {
            Route::get('managers', [UsersController::class, 'getManagersList'])
                ->name('api.users.list.managers');
        });

        Route::get('get', [UsersController::class, 'getUser'])
            ->name('api.users.get');
    });

    Route::prefix('categories')->group(function () {

        Route::get('/', [CategoriesController::class, 'index'])
            ->name('api.categories.index');

        Route::get('list', [CategoriesController::class, 'list'])
            ->name('api.categories.list');

        Route::post('create', [CategoriesController::class, 'create'])
            ->name('api.categories.create');

        Route::get('edit/{id}', [CategoriesController::class, 'edit'])
            ->name('api.categories.edit');

        Route::put('update/{id}', [CategoriesController::class, 'update'])
            ->name('api.categories.update');

        Route::delete('destroy/{id}', [CategoriesController::class, 'destroy'])
            ->name('api.categories.destroy');

        Route::get('search={search}', [CategoriesController::class, 'search'])
            ->name('api.categories.search');

        Route::post('update-sort/{id}', [CategoriesController::class, 'updateSort'])
            ->name('api.categories.updateSort');

        Route::post('mass', [CategoriesController::class, 'massActions'])
            ->name('api.categories.mass');
    });

    Route::prefix('providers')->group(function () {
        Route::get('list', [ProvidersController::class, 'list'])
            ->name('api.providers.list');

        Route::get('/', [ProvidersController::class, 'index'])
            ->name('api.providers.index');

        Route::post('create', [ProvidersController::class, 'create'])
            ->name('api.providers.create');

        Route::get('edit/{id}', [ProvidersController::class, 'edit'])
            ->name('api.providers.edit');

        Route::put('update/{id}', [ProvidersController::class, 'update'])
            ->name('api.providers.update');

        Route::delete('destroy/{id}', [ProvidersController::class, 'destroy'])
            ->name('api.providers.destroy');
    });

    Route::prefix('colors')->group(function () {
        Route::get('list', [ColorsController::class, 'list'])
            ->name('api.colors.list');

        Route::get('/', [ColorsController::class, 'index'])
            ->name('api.colors.index');

        Route::post('create', [ColorsController::class, 'create'])
            ->name('api.colors.create');

        Route::get('edit/{id}', [ColorsController::class, 'edit'])
            ->name('api.colors.edit');

        Route::put('update/{id}', [ColorsController::class, 'update'])
            ->name('api.colors.update');

        Route::delete('destroy/{id}', [ColorsController::class, 'destroy'])
            ->name('api.colors.destroy');
    });

    Route::prefix('sizes')->group(function () {
        Route::get('list', [SizesController::class, 'list'])
            ->name('api.sizes.list');

        Route::get('/', [SizesController::class, 'index'])
            ->name('api.sizes.index');

        Route::post('create', [SizesController::class, 'create'])
            ->name('api.sizes.create');

        Route::get('edit/{id}', [SizesController::class, 'edit'])
            ->name('api.sizes.edit');

        Route::put('update/{id}', [SizesController::class, 'update'])
            ->name('api.sizes.update');

        Route::delete('destroy/{id}', [SizesController::class, 'destroy'])
            ->name('api.sizes.destroy');
    });

    Route::prefix('reviews')->group(function () {
        Route::prefix('product')->group(function () {
            Route::get('/', [ProductReviewsController::class, 'index'])
                ->name('api.reviews.product.index');

            Route::post('create', [ProductReviewsController::class, 'create'])
                ->name('api.reviews.product.create');

            Route::get('edit/{id}', [ProductReviewsController::class, 'edit'])
                ->name('api.reviews.product.edit');

            Route::put('update/{id}', [ProductReviewsController::class, 'update'])
                ->name('api.reviews.product.update');

            Route::delete('destroy/{id}', [ProductReviewsController::class, 'destroy'])
                ->name('api.reviews.product.destroy');

            Route::post('accept/{id}', [ProductReviewsController::class, 'accept'])
                ->name('api.reviews.product.accept');
        });

        Route::prefix('social')->group(function () {
            Route::get('/', [SocialReviewsController::class, 'index'])
                ->name('api.reviews.social.index');

            Route::post('create', [SocialReviewsController::class, 'create'])
                ->name('api.reviews.social.create');

            Route::get('edit/{id}', [SocialReviewsController::class, 'edit'])
                ->name('api.reviews.social.edit');

            Route::put('update/{id}', [SocialReviewsController::class, 'update'])
                ->name('api.reviews.social.update');

            Route::delete('destroy/{id}', [SocialReviewsController::class, 'destroy'])
                ->name('api.reviews.social.destroy');
        });
    });

    Route::prefix('orders')->group(function () {
        Route::get('/', [OrdersController::class, 'index'])
            ->name('api.orders.index');

        Route::get('edit/{id}', [OrdersController::class, 'edit'])
            ->name('api.orders.edit');

        Route::put('update/{id}', [OrdersController::class, 'update'])
            ->name('api.orders.update');

        Route::delete('destroy/{id}', [OrdersController::class, 'destroy'])
            ->name('api.orders.destroy');

        Route::get('filter', [OrdersController::class, 'filter'])
            ->name('api.orders.filter');

        Route::get('search', [OrdersController::class, 'search'])
            ->name('api.orders.search');
    });

    Route::prefix('statistics')->group(function () {
        Route::prefix('costs')->group(function () {
            Route::get('/', [CostsController::class, 'index'])
                ->name('api.statistics.costs.index');

            Route::post('create', [CostsController::class, 'create'])
                ->name('api.statistics.costs.create');

            Route::get('edit/{id}', [CostsController::class, 'edit'])
                ->name('api.statistics.costs.edit');

            Route::put('update/{id}', [CostsController::class, 'update'])
                ->name('api.statistics.costs.update');

            Route::delete('destroy/{id}', [CostsController::class, 'destroy'])
                ->name('api.statistics.costs.destroy');

            Route::prefix('categories')->group(function () {
                Route::get('/', [CostCategoriesController::class, 'index'])
                    ->name('api.statistics.costs.categories.index');

                Route::post('create', [CostCategoriesController::class, 'create'])
                    ->name('api.statistics.costs.categories.create');

                Route::get('edit/{id}', [CostCategoriesController::class, 'edit'])
                    ->name('api.statistics.costs.categories.edit');

                Route::put('update/{id}', [CostCategoriesController::class, 'update'])
                    ->name('api.statistics.costs.categories.update');

                Route::delete('destroy/{id}', [CostCategoriesController::class, 'destroy'])
                    ->name('api.statistics.costs.categories.destroy');

                Route::get('list', [CostCategoriesController::class, 'list'])
                    ->name('api.statistics.costs.categories.list');
            });
        });
    });
});
