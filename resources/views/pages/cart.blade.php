@if(Route::is('cart'))
    <title>Кошик</title>
    @include('schema.breadcrumbs', $breadcrumbs = Breadcrumbs::generate('home.cart'))
@endif
