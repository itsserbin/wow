<?php

// Note: Laravel will automatically resolve `Breadcrumbs::` without
// this import. This is nice for IDE syntax and refactoring.
use Diglactic\Breadcrumbs\Breadcrumbs;

// This import is also not required, and you could replace `BreadcrumbTrail $trail`
//  with `$trail`. This is nice for IDE type checking and completion.
use Diglactic\Breadcrumbs\Generator as BreadcrumbTrail;

Breadcrumbs::for('home', function (BreadcrumbTrail $trail) {
    $trail->push(env('APP_NAME'), route('home'));
});

Breadcrumbs::for('home.cart', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push('Кошик', route('cart'));
});

Breadcrumbs::for('home.checkout', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push('Оформлення замовлення', route('checkout'));
});

Breadcrumbs::for('home.reviews', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push('Відгуки', route('reviews'));
});

Breadcrumbs::for('home.pages', function (BreadcrumbTrail $trail, $page) {
    $trail->parent('home');
    $trail->push(app()->getLocale() == 'ua' ? $page->heading['ua'] : $page->heading['ru'], route('pages', $page->slug));
});

Breadcrumbs::for('home.categories', function (BreadcrumbTrail $trail, $category) {
    $trail->parent('home');
    $trail->push(app()->getLocale() == 'ua' ? $category->title['ua'] ?? 'Без назви' : $category->title['ru'] ?? 'Без назви', route('category', $category->slug));
});

Breadcrumbs::for('home.categories.product', function (BreadcrumbTrail $trail, $product) {
    if (count($product->categories)) {
        $trail->parent('home.categories', $product->categories[0]);
    } else {
        $trail->parent('home');
    }
    $trail->push(app()->getLocale() == 'ua' ? $product->h1['ua'] : $product->h1['ru'], route('product', $product->id));
});
