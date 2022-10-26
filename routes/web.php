<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

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

    Route::get('reviews', [HomeController::class, 'reviews'])
        ->name('reviews');

    Route::get('pages/{slug}', [HomeController::class, 'page'])
        ->name('pages');

    Route::get('thanks/{id?}', [HomeController::class, 'thanks'])
        ->name('thanks');

    Route::get('status', [HomeController::class, 'status'])
        ->name('status');

    require __DIR__ . '/xml.php';
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/images.php';
require __DIR__ . '/lang.php';
