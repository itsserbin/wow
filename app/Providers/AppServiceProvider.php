<?php

namespace App\Providers;

use App\Repositories\CategoriesRepository;
use App\Repositories\OptionsRepository;
use App\Repositories\PagesRepository;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Vite;

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

        View::composer(['errors::*', 'errors.*'], function ($view) use ($pagesRepository, $categoriesRepository, $optionsRepository) {
            $view->with([
                'props' => [
                    'options' => $optionsRepository->getToProd(),
                    'categories' => $categoriesRepository->listPublic(),
                    'pages' => $pagesRepository->getPagesListToPublic(),
                    'event_id_page_view' => uniqid(null, true) . '_PageView' . '_' . time()
                ]
            ]);
        });

        require app_path('Helpers/Hreflang.php');

        Vite::useScriptTagAttributes([
            'defer' => true,
        ]);
    }
}
