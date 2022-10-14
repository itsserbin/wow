<?php

use App\Http\Controllers\ImagesController;
use Illuminate\Support\Facades\Route;

Route::prefix('images')->group(function () {
    Route::prefix('banners')->group(function () {
        Route::get('mobile/{filename}', [ImagesController::class, 'mobileBanner'])
            ->name('images.banners.mobile');

        Route::get('table/{filename}', [ImagesController::class, 'tableBanner'])
            ->name('images.table.mobile');

        Route::get('desktop/{filename}', [ImagesController::class, 'desktopBanner'])
            ->name('images.desktop.mobile');
    });

    Route::prefix('products')->group(function () {
        Route::get('{filename}', [ImagesController::class, 'products'])
            ->name('images.products');

        Route::get('55/{filename}', [ImagesController::class, 'products55'])
            ->name('images.products.55');

        Route::get('350/{filename}', [ImagesController::class, 'products350'])
            ->name('images.products.350');

        Route::get('500/{filename}', [ImagesController::class, 'products500'])
            ->name('images.products.500');
    });
});
