<?php

use App\Http\Controllers\XmlsController;
use Illuminate\Support\Facades\Route;

Route::prefix('xml')->group(function () {

    Route::prefix('fb')->group(function () {

        Route::get('all', [XmlsController::class, 'getAllProductsToFbFeed'])
            ->name('xml.fb.all');

        Route::get('swimwear', [XmlsController::class, 'xmlFbSwimwear'])
            ->name('xml.fb.swimwear');

        Route::get('swimwear-and-tunics', [XmlsController::class, 'xmlFbSwimwearAndTunics'])
            ->name('xml.fb.swimwear-and-tunics');

        Route::get('top-swimwear-and-tunics', [XmlsController::class, 'xmlFbTopSwimwearAndTunics'])
            ->name('xml.fb.top-swimwear-and-tunics');

        Route::get('top-underwear', [XmlsController::class, 'xmlFbTopUnderwear'])
            ->name('xml.fb.top-underwear');

        Route::get('category/{slugs}', [XmlsController::class, 'getProductsFromCategoryToFbFeed'])
            ->where('slugs', '(.*)')
            ->name('xml.fb.category');

        Route::prefix('manual')->group(function () {
            Route::get('{slug}', [XmlsController::class, 'getFbFeedBySlug'])
                ->name('xml.fb.get');
        });
    });


    Route::get('prom/feed/products', [XmlsController::class, 'promProductFeed'])
        ->name('prom.product.feed');
});

Route::get('sitemap.xml', [XmlsController::class, 'sitemap'])
    ->name('sitemap');

Route::get('images_sitemap.xml', [XmlsController::class, 'imagesSitemap'])
    ->name('images-sitemap');
