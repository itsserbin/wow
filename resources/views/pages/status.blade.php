@if(Route::is('status'))
    <title>Статус замовлення</title>
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.status'))
@endif
