<?php

use Illuminate\Foundation\Application;
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

Route::get('/', function () {
    return view('pages.home');
});

//SergeyCard CardTest Page
Route::get('/cardTest', function (){
    return view('cardTest');
});

//Sergey PaymentFirst Page
Route::get('/PaymentFirstPage', function (){
    return view('PaymentFirstPage');
});

//Sergey PaymentSecond Page
Route::get('/PaymentSecondPage', function (){
    return view('PaymentSecondPage');
});



Route::get('/test', function (){
    return view('test');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
