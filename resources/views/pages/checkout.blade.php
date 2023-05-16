@if(Route::is('checkout'))
    <title>Оформлення замовлення</title>
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.checkout'))
@endif
