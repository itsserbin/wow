@if(Route::is('page'))
    <title>{{$page->meta_title[app()->getLocale()]}}</title>
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.pages',$page))
@endif
