@if(Route::is('product'))
    <title>Купити {{ $page['props']['product']['h1'][app()->getLocale()] }} в Україні</title>
    <meta name="description"
          content="{{preg_replace('/[.,!?-]+$/', '', Str::limit(Str::words(strip_tags($page['props']['product']['content'][app()->getLocale()]))))}} ✓ Доступні ціни ✓ Широкий асортимент ✓ Доставка по всій Україні">
    @include('schema.product',['product' => $page['props']['product'],'reviews' => $page['props']['reviews']])
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.categories.product',$page['props']['product']))
    <meta property="og:image"
          content="{{asset(route('images',$page['props']['product']['preview']['webp_src']))}}"/>
    <meta property="og:image:secure_url"
          content="{{asset(route('images',$page['props']['product']['preview']['webp_src']))}}"/>
    <meta property="og:image:type" content="image/webp"/>
    <meta property="og:image:alt" content="{{$page['props']['product']['h1'][app()->getLocale()]}}"/>
@endif
