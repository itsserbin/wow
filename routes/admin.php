<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin')->middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('admin.dashboard');

    Route::get('products', [AdminController::class, 'products'])
        ->name('admin.products.index');

    Route::get('categories', [AdminController::class, 'categories'])
        ->name('admin.categories.index');

    Route::get('providers', [AdminController::class, 'providers'])
        ->name('admin.providers.index');

    Route::get('images', [AdminController::class, 'images'])
        ->name('admin.images.index');

    Route::get('orders', [AdminController::class, 'orders'])
        ->name('admin.orders.index');

    Route::get('roles', [AdminController::class, 'roles'])
        ->name('admin.roles.index');

    Route::get('permissions', [AdminController::class, 'permissions'])
        ->name('admin.permissions.index');

    Route::get('users', [AdminController::class, 'users'])
        ->name('admin.users.index');

    Route::prefix('reviews')->group(function () {
        Route::get('product', [AdminController::class, 'productReviews'])
            ->name('admin.reviews.product.index');

        Route::get('social', [AdminController::class, 'socialReviews'])
            ->name('admin.reviews.social.index');
    });

    Route::prefix('statistics')->group(function () {
        Route::get('/', [AdminController::class, 'statistics'])
            ->name('admin.statistics.index');

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

        Route::get('colors', [AdminController::class, 'colors'])
            ->name('admin.options.colors.index');

        Route::get('sizes', [AdminController::class, 'sizes'])
            ->name('admin.options.sizes.index');
    });
});
