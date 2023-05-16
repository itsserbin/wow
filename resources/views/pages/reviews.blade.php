@if(Route::is('reviews'))
    <title>Відгуки</title>
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.reviews'))
@endif
