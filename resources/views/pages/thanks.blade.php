@if(Route::is('thanks'))
    <title>Дякуємо за покупку!</title>
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.support'))
@endif
