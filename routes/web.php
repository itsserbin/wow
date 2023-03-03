<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\SmsController;
use FacebookAds\Api;
use FacebookAds\Logger\CurlLogger;
use FacebookAds\Object\ServerSide\ActionSource;
use FacebookAds\Object\ServerSide\Event;
use FacebookAds\Object\ServerSide\EventRequest;
use FacebookAds\Object\ServerSide\UserData;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LogoController;

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
    Route::get('category/penyuary i pizhamy', function () {
        return redirect(route('category', 'penyuary-i-pizhamy'), 301);
    });

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

    Route::get('support', [HomeController::class, 'support'])
        ->name('support');

    require __DIR__ . '/xml.php';
});

Route::post('/upload-image', [LogoController::class, 'store']);
Route::delete('/delete-image', [LogoController::class, 'destroy']);

Route::post('sms-new-order', [SmsController::class, 'newOrder'])
    ->name('sms.new.order');

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/images.php';
require __DIR__ . '/lang.php';
