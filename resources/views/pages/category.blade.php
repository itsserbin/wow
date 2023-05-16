@if(Route::is('category'))
    <title>{{$page['props']['category']['meta_title'][app()->getLocale()]}}</title>
    <meta name="description" content="{{$page['props']['category']['meta_description'][app()->getLocale()]}}">
    @if($page['props']['category']['preview_id'])
        <meta property="og:image"
              content="{{asset(route('images',$page['props']['category']['preview']['webp_src']))}}"/>
        <meta property="og:image:secure_url"
              content="{{asset(route('images',$page['props']['category']['preview']['webp_src']))}}"/>
        <meta property="og:image:type" content="image/webp"/>
    @endif
    <meta property="og:image:alt" content="{{$page['props']['category']['title'][app()->getLocale()]}}"/>
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.categories',$page['props']['category']))
@endif
