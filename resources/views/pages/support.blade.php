@if(Route::is('support'))
    <title>Підтримка клієнтів</title>
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.support'))
@endif
