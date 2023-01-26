<?php

namespace App\Providers;

use App\Repositories\CategoriesRepository;
use App\Repositories\OptionsRepository;
use App\Repositories\PagesRepository;
use App\Repositories\ProductsRepository;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $optionsRepository = new OptionsRepository();
        $categoriesRepository = new CategoriesRepository();
        $pagesRepository = new PagesRepository();
        $productsRepository = new ProductsRepository();

        View::composer(['errors::*', 'errors.*'], function ($view) use ($pagesRepository, $categoriesRepository, $optionsRepository) {
            $view->with([
                'options' => $optionsRepository->getToProd(),
                'categories' => $categoriesRepository->listPublic(),
                'pages' => $pagesRepository->getPagesListToPublic(),
//                'products' => $pagesRepository->getPagesListToPublic(),
            ]);
        });
    }
}
