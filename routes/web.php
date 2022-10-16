<?php

use App\Http\Controllers\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => App\Http\Middleware\LocaleMiddleware::getLocale()], function () {
    Route::get('/', [HomeController::class, 'home'])
        ->name('home');;

    Route::get('category/{slug?}', [HomeController::class, 'category'])
        ->name('category');

    Route::get('product/{id?}', [HomeController::class, 'product'])
        ->name('product');

    Route::get('cart', [HomeController::class, 'cart'])
        ->name('cart');

    Route::get('checkout', [HomeController::class, 'checkout'])
        ->name('checkout');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/images.php';
require __DIR__ . '/lang.php';
