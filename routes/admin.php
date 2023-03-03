<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Api\ImagesController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\SmsController;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::prefix('admin')
    ->middleware(['auth', 'verified'])
    ->group(function () {

        Route::get('/', function () {
            return Inertia::render('Dashboard');
        })->name('admin.dashboard');

        Route::prefix('content')->group(function () {
            Route::get('/', [AdminController::class, 'content'])
                ->name('admin.content.index');

            Route::get('products', [AdminController::class, 'products'])
                ->name('admin.content.products');

            Route::get('categories', [AdminController::class, 'categories'])
                ->name('admin.content.categories');

            Route::get('images', [AdminController::class, 'images'])
                ->name('admin.content.images');

            Route::get('pages', [AdminController::class, 'pages'])
                ->name('admin.content.pages');

            Route::prefix('reviews')->group(function () {
                Route::get('product', [AdminController::class, 'productReviews'])
                    ->name('admin.content.reviews.product');

                Route::get('social', [AdminController::class, 'socialReviews'])
                    ->name('admin.content.reviews.social');
            });
        });

        Route::prefix('crm')->group(function () {
            Route::get('/', [AdminController::class, 'crm'])
                ->name('admin.crm.index');

            Route::prefix('orders')->group(function () {
                Route::get('/', [AdminController::class, 'orders'])
                    ->name('admin.crm.orders');

                Route::get('export', [ExportController::class, 'orders'])
                    ->name('admin.crm.orders.export');
            });

            Route::prefix('clients')->group(function () {
                Route::get('/', [AdminController::class, 'clients'])
                    ->name('admin.crm.clients');

                Route::get('export', [ExportController::class, 'clients'])
                    ->name('admin.crm.clients.export');
            });

            Route::get('callbacks', [AdminController::class, 'callbacks'])
                ->name('admin.crm.callbacks');

            Route::get('supports', [AdminController::class, 'supports'])
                ->name('admin.crm.supports');

            Route::get('invoices', [AdminController::class, 'invoices'])
                ->name('admin.crm.invoices');
        });

        Route::get('roles', [AdminController::class, 'roles'])
            ->name('admin.roles.index');

        Route::get('permissions', [AdminController::class, 'permissions'])
            ->name('admin.permissions.index');

        Route::get('users', [AdminController::class, 'users'])
            ->name('admin.users.index');

        Route::prefix('statistics')->group(function () {
            Route::get('/', [AdminController::class, 'statistics'])
                ->name('admin.statistics.index');

            Route::get('profits', [AdminController::class, 'statisticProfits'])
                ->name('admin.statistics.profits.index');

            Route::get('orders', [AdminController::class, 'statisticOrders'])
                ->name('admin.statistics.orders.index');

            Route::get('marketing', [AdminController::class, 'statisticMarketing'])
                ->name('admin.statistics.marketing.index');

            Route::get('managers', [AdminController::class, 'statisticManagers'])
                ->name('admin.statistics.managers.index');

            Route::get('products', [AdminController::class, 'statisticProducts'])
                ->name('admin.statistics.products.index');

            Route::prefix('costs')->group(function () {
                Route::get('/', [AdminController::class, 'statisticCosts'])
                    ->name('admin.statistics.costs.index');

                Route::prefix('categories')->group(function () {
                    Route::get('/', [AdminController::class, 'statisticCostCategories'])
                        ->name('admin.statistics.costs.categories.index');
                });
            });
        });

        Route::prefix('options')->group(function () {
            Route::get('/', [AdminController::class, 'options'])
                ->name('admin.options.index');

            Route::get('main', [AdminController::class, 'optionsMain'])
                ->name('admin.options.main');


            Route::get('scripts', [AdminController::class, 'optionsScripts'])
                ->name('admin.options.scripts');

            Route::get('colors', [AdminController::class, 'colors'])
                ->name('admin.options.colors.index');

            Route::get('characteristics', [AdminController::class, 'characteristics'])
                ->name('admin.options.characteristics.index');

            Route::get('banners', [AdminController::class, 'optionsBanners'])
                ->name('admin.options.banners.index');

            Route::get('faqs', [AdminController::class, 'optionsFaqs'])
                ->name('admin.options.faqs.index');

            Route::get('advantages', [AdminController::class, 'optionsAdvantages'])
                ->name('admin.options.advantages.index');

            Route::get('promo-codes', [AdminController::class, 'optionsPromoCodes'])
                ->name('admin.options.promo-codes.index');

            //logo
            Route::get('logo', [AdminController::class, 'optionsLogo'])
                ->name('admin.logo');

            Route::post('/upload-image', [LogoController::class, 'uploadImage']);

            Route::get('xmls', [AdminController::class, 'optionsXmls'])
                ->name('admin.options.xmls.index');

            Route::get('sizes', [AdminController::class, 'sizes'])
                ->name('admin.options.sizes.index');

            Route::get('permissions', [AdminController::class, 'permissions'])
                ->name('admin.options.permissions.index');

            Route::get('roles', [AdminController::class, 'roles'])
                ->name('admin.options.roles.index');

            Route::get('users', [AdminController::class, 'users'])
                ->name('admin.options.users.index');

            Route::get('providers', [AdminController::class, 'providers'])
                ->name('admin.options.providers.index');
        });

        Route::post('notify-waybill', [SmsController::class, 'notifyWaybill'])->name('notify.waybill');
    });
