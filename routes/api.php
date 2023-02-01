<?php

use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\AdvantagesController;
use App\Http\Controllers\Api\BannersController;
use App\Http\Controllers\Api\CallbacksController;
use App\Http\Controllers\Api\CategoriesController;
use App\Http\Controllers\Api\CharacteristicsController;
use App\Http\Controllers\Api\ClientsController;
use App\Http\Controllers\Api\ColorsController;
use App\Http\Controllers\Api\FaqsController;
use App\Http\Controllers\Api\ImagesController;
use App\Http\Controllers\Api\InvoicesController;
use App\Http\Controllers\Api\OptionsController;
use App\Http\Controllers\Api\OrderItemsController;
use App\Http\Controllers\Api\OrdersController;
use App\Http\Controllers\Api\PagesController;
use App\Http\Controllers\Api\PermissionsController;
use App\Http\Controllers\Api\PromoCodesController;
use App\Http\Controllers\Api\RolesController;
use App\Http\Controllers\Api\SmsController;
use App\Http\Controllers\Api\Statistics\ManagerSalariesController;
use App\Http\Controllers\Api\Statistics\MarketingStatisticController;
use App\Http\Controllers\Api\Statistics\OrdersStatisticController;
use App\Http\Controllers\Api\ProductReviewsController;
use App\Http\Controllers\Api\ProductsController;
use App\Http\Controllers\Api\Statistics\ProductStatisticsController;
use App\Http\Controllers\Api\Statistics\ProfitsController;
use App\Http\Controllers\Api\ProvidersController;
use App\Http\Controllers\Api\SizesController;
use App\Http\Controllers\Api\SocialReviewsController;
use App\Http\Controllers\Api\Statistics\CostCategoriesController;
use App\Http\Controllers\Api\Statistics\CostsController;
use App\Http\Controllers\Api\SupportsController;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\XmlsController;
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

Route::middleware('auth:sanctum')->group(function () {

    Route::get('dashboard', [AdminController::class, 'dashboard'])
        ->name('api.dashboard');

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

        Route::get('search={search}', [ProductsController::class, 'search'])
            ->name('api.products.search');

        Route::post('update-sort/{id}', [ProductsController::class, 'updateSort'])
            ->name('api.products.sort.update');
    });

    Route::prefix('invoices')->group(function () {
        Route::get('/', [InvoicesController::class, 'index'])
            ->name('api.invoices.index');

        Route::post('create', [InvoicesController::class, 'create'])
            ->name('api.invoices.create');

        Route::get('edit/{id}', [InvoicesController::class, 'edit'])
            ->name('api.invoices.edit');

        Route::put('update/{id}', [InvoicesController::class, 'update'])
            ->name('api.invoices.update');

        Route::delete('destroy/{id}', [InvoicesController::class, 'destroy'])
            ->name('api.invoices.destroy');
    });

    Route::prefix('images')->group(function () {
        Route::get('/', [ImagesController::class, 'index'])
            ->name('api.images.index');

        Route::post('upload', [ImagesController::class, 'upload'])
            ->name('api.images.upload');

        Route::put('update/{id}', [ImagesController::class, 'update'])
            ->name('api.images.update');

        Route::delete('destroy/{id}', [ImagesController::class, 'destroy'])
            ->name('api.images.destroy');
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

    Route::prefix('permissions')->group(function () {
        Route::get('list', [PermissionsController::class, 'list'])
            ->name('api.permissions.list');

        Route::get('/', [PermissionsController::class, 'index'])
            ->name('api.permissions.index');

        Route::post('create', [PermissionsController::class, 'create'])
            ->name('api.permissions.create');

        Route::get('edit/{id}', [PermissionsController::class, 'edit'])
            ->name('api.permissions.edit');

        Route::put('update/{id}', [PermissionsController::class, 'update'])
            ->name('api.permissions.update');

        Route::delete('destroy/{id}', [PermissionsController::class, 'destroy'])
            ->name('api.permissions.destroy');
    });

    Route::prefix('roles')->group(function () {
        Route::get('list', [RolesController::class, 'list'])
            ->name('api.roles.list');

        Route::get('/', [RolesController::class, 'index'])
            ->name('api.roles.index');

        Route::post('create', [RolesController::class, 'create'])
            ->name('api.roles.create');

        Route::get('edit/{id}', [RolesController::class, 'edit'])
            ->name('api.roles.edit');

        Route::put('update/{id}', [RolesController::class, 'update'])
            ->name('api.roles.update');

        Route::delete('destroy/{id}', [RolesController::class, 'destroy'])
            ->name('api.roles.destroy');
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

        Route::get('search={search}', [OrdersController::class, 'search'])
            ->name('api.orders.search');
    });

    Route::prefix('order-items')->group(function () {

        Route::get('{id}', [OrderItemsController::class, 'getByOrderId'])
            ->name('api.order-items.getByOrderId');

        Route::delete('destroy/{item_id}/{order_id}', [OrderItemsController::class, 'destroy'])
            ->name('api.order-items.destroy');

        Route::put('/update/{id}', [OrderItemsController::class, 'update'])
            ->name('api.order-items.update');

        Route::get('/edit/{id}', [OrderItemsController::class, 'edit'])
            ->name('api.order-items.edit');

        Route::post('add/{id}', [OrderItemsController::class, 'addItem'])
            ->name('api.order-items.add');
    });

    Route::prefix('clients')->group(function () {

        Route::get('statuses', [ClientsController::class, 'statuses'])
            ->name('api.clients.statuses');

        Route::get('/', [ClientsController::class, 'index'])
            ->name('api.clients.index');

        Route::get('edit/{id}', [ClientsController::class, 'edit'])
            ->name('api.clients.edit');

        Route::put('update/{id}', [ClientsController::class, 'update'])
            ->name('api.clients.update');

        Route::get('search={search}', [ClientsController::class, 'search'])
            ->name('api.clients.search');

        Route::delete('/destroy/{id}', [ClientsController::class, 'destroy'])
            ->name('api.clients.destroy');
    });

    Route::prefix('banners')->group(function () {

        Route::post('upload', [BannersController::class, 'upload'])
            ->name('api.banners.upload');

        Route::get('/', [BannersController::class, 'index'])
            ->name('api.banners.index');

        Route::post('create', [BannersController::class, 'create'])
            ->name('api.banners.create');


        Route::get('edit/{id}', [BannersController::class, 'edit'])
            ->name('api.banners.edit');

        Route::put('update/{id}', [BannersController::class, 'update'])
            ->name('api.banners.update');

        Route::delete('destroy/{id}', [BannersController::class, 'destroy'])
            ->name('api.banners.destroy');
    });

    Route::prefix('advantages')->group(function () {
        Route::get('/', [AdvantagesController::class, 'index'])
            ->name('api.advantages.index');

        Route::get('edit/{id}', [AdvantagesController::class, 'edit'])
            ->name('api.advantages.edit');

        Route::post('create', [AdvantagesController::class, 'create'])
            ->name('api.advantages.create');

        Route::put('update/{id}', [AdvantagesController::class, 'update'])
            ->name('api.advantages.update');

        Route::delete('destroy/{id}', [AdvantagesController::class, 'destroy'])
            ->name('api.advantages.destroy');
    });

    Route::prefix('faq')->group(function () {
        Route::get('/', [FaqsController::class, 'index'])
            ->name('api.faqs.index');

        Route::get('edit/{id}', [FaqsController::class, 'edit'])
            ->name('api.faqs.edit');

        Route::post('create', [FaqsController::class, 'create'])
            ->name('api.faqs.create');

        Route::put('update/{id}', [FaqsController::class, 'update'])
            ->name('api.faqs.update');

        Route::delete('destroy/{id}', [FaqsController::class, 'destroy'])
            ->name('api.faqs.destroy');
    });

    Route::prefix('promo-codes')->group(function () {

        Route::get('/', [PromoCodesController::class, 'index'])
            ->name('api.promo-codes.index');

        Route::get('edit/{id}', [PromoCodesController::class, 'edit'])
            ->name('api.promo-codes.edit');

        Route::post('create', [PromoCodesController::class, 'create'])
            ->name('api.promo-codes.create');

        Route::put('update/{id}', [PromoCodesController::class, 'update'])
            ->name('api.promo-codes.update');

        Route::delete('/destroy/{id}', [PromoCodesController::class, 'destroy'])
            ->name('api.promo-codes.destroy');
    });

    Route::prefix('xmls')->group(function () {
        Route::get('/', [XmlsController::class, 'index'])
            ->name('api.xmls.index');

        Route::post('create', [XmlsController::class, 'create'])
            ->name('api.xmls.create');

        Route::get('edit/{id}', [XmlsController::class, 'edit'])
            ->name('api.xmls.edit');

        Route::put('update/{id}', [XmlsController::class, 'update'])
            ->name('api.xmls.update');

        Route::delete('destroy/{id}', [XmlsController::class, 'destroy'])
            ->name('api.xmls.destroy');
    });

    Route::prefix('pages')->group(function () {
        Route::get('/', [PagesController::class, 'index'])
            ->name('api.pages.index');

        Route::get('edit/{id}', [PagesController::class, 'edit'])
            ->name('api.pages.edit');

        Route::post('create', [PagesController::class, 'create'])
            ->name('api.pages.create');

        Route::put('update/{id}', [PagesController::class, 'update'])
            ->name('api.pages.update');

        Route::delete('destroy/{id}', [PagesController::class, 'destroy'])
            ->name('api.pages.destroy');
    });

    Route::prefix('callbacks')->group(function () {
        Route::get('/', [CallbacksController::class, 'index'])
            ->name('api.callbacks.index');

        Route::get('edit/{id}', [CallbacksController::class, 'edit'])
            ->name('api.callbacks.edit');

        Route::put('update/{id}', [CallbacksController::class, 'update'])
            ->name('api.callbacks.update');

        Route::delete('destroy/{id}', [CallbacksController::class, 'destroy'])
            ->name('api.callbacks.destroy');
    });


    Route::prefix('supports')->group(function () {
        Route::get('/', [SupportsController::class, 'index'])
            ->name('api.supports.index');

        Route::get('edit/{id}', [SupportsController::class, 'edit'])
            ->name('api.supports.edit');

        Route::put('update/{id}', [SupportsController::class, 'update'])
            ->name('api.supports.update');

        Route::delete('destroy/{id}', [SupportsController::class, 'destroy'])
            ->name('api.supports.destroy');
    });

    Route::prefix('characteristics')->group(function () {
        Route::get('list', [CharacteristicsController::class, 'list'])
            ->name('api.characteristics.list');

        Route::get('/', [CharacteristicsController::class, 'index'])
            ->name('api.characteristics.index');

        Route::get('edit/{id}', [CharacteristicsController::class, 'edit'])
            ->name('api.characteristics.edit');

        Route::post('create', [CharacteristicsController::class, 'create'])
            ->name('api.characteristics.create');

        Route::put('update/{id}', [CharacteristicsController::class, 'update'])
            ->name('api.characteristics.update');

        Route::delete('destroy/{id}', [CharacteristicsController::class, 'destroy'])
            ->name('api.characteristics.destroy');
    });

    Route::prefix('statistics')->group(function () {
        Route::prefix('costs')->group(function () {
            Route::get('/', [CostsController::class, 'index'])
                ->name('api.statistics.costs.index');

            Route::get('chart', [CostsController::class, 'chart'])
                ->name('api.statistics.costs.chart');

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

        Route::prefix('profits')->group(function () {
            Route::get('/', [ProfitsController::class, 'index'])
                ->name('api.statistics.profits.index');

            Route::get('chart', [ProfitsController::class, 'chart'])
                ->name('api.statistics.profits.chart');
        });

        Route::prefix('orders')->group(function () {
            Route::get('/', [OrdersStatisticController::class, 'index'])
                ->name('api.statistics.orders.index');

            Route::get('chart', [OrdersStatisticController::class, 'chart'])
                ->name('api.statistics.orders.chart');

            Route::get('indicators', [OrdersStatisticController::class, 'indicators'])
                ->name('api.statistics.orders.indicators');

            Route::get('indicators2', [OrdersStatisticController::class, 'indicators2'])
                ->name('api.statistics.orders.indicators2');
        });

        Route::prefix('marketing')->group(function () {
            Route::get('/', [MarketingStatisticController::class, 'index'])
                ->name('api.statistics.marketing.index');

            Route::get('chart', [MarketingStatisticController::class, 'chart'])
                ->name('api.statistics.marketing.chart');
        });

        Route::prefix('products')->group(function () {
            Route::get('/', [ProductStatisticsController::class, 'index'])
                ->name('api.statistics.products.index');

            Route::get('chart', [ProductStatisticsController::class, 'chart'])
                ->name('api.statistics.products.chart');
        });

        Route::prefix('managers')->group(function () {
            Route::get('/', [ManagerSalariesController::class, 'index'])
                ->name('api.statistics.managers.index');
        });
    });

    Route::prefix('options')->group(function () {

        Route::prefix('main')->group(function () {
            Route::get('/', [OptionsController::class, 'getMainOptions'])
                ->name('api.options.main.index');

            Route::put('update', [OptionsController::class, 'updateMainOptions'])
                ->name('api.options.main.update');
        });

        Route::prefix('scripts')->group(function () {
            Route::get('/', [OptionsController::class, 'getScriptsOptions'])
                ->name('api.options.scripts.index');

            Route::put('update', [OptionsController::class, 'updateMainOptions'])
                ->name('api.options.scripts.update');
        });
    });

    Route::prefix('sms')->group(function () {
        Route::post('invoice/{id}', [SmsController::class, 'sendInvoice'])
            ->name('api.sms.invoice');
    });
});

require __DIR__ . '/api-v1.php';
