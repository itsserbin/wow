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

//Sergey PaymentFirst Page
    Route::get('/PaymentFirstPage', function () {
        return view('PaymentFirstPage');
    });

//Sergey PaymentSecond Page
    Route::get('/PaymentSecondPage', function () {
        return view('PaymentSecondPage');
    });

//Sergey Route Footer
    Route::get('/footer', function () {
        return view('footer');
    });


    Route::get('/test', function () {
        return view('test');
    });
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';

//Переключение языков
Route::get('setlocale/{lang}', function ($lang) {

    $referer = Redirect::back()->getTargetUrl(); //URL предыдущей страницы
    $parse_url = parse_url($referer, PHP_URL_PATH); //URI предыдущей страницы
    //разбиваем на массив по разделителю
    $segments = explode('/', $parse_url);

    if (count($segments) > 1) {
        //Если URL (где нажали на переключение языка) содержал корректную метку языка
        if (in_array($segments[1], App\Http\Middleware\LocaleMiddleware::$languages)) {

            unset($segments[1]); //удаляем метку
        }
    }

    //Добавляем метку языка в URL (если выбран не язык по-умолчанию)
    if ($lang != App\Http\Middleware\LocaleMiddleware::$mainLanguage) {
        array_splice($segments, 1, 0, $lang);
    }

    //формируем полный URL
    $url = request()->root() . implode("/", $segments);

    //если были еще GET-параметры - добавляем их
    if (parse_url($referer, PHP_URL_QUERY)) {
        $url = $url . '?' . parse_url($referer, PHP_URL_QUERY);
    }
    return redirect($url); //Перенаправляем назад на ту же страницу

})->name('setlocale');
