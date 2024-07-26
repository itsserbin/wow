<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title inertia>{{ env('APP_NAME') }}</title>
    @vite('resources/scss/public.scss')
    {!! $page['props']['options']['head_scripts'] !!}
    {{--    <meta property="og:title" content="@yield('meta_title')"/>--}}
    {{--    <meta property="og:type" content="website"/>--}}
    {{--    <meta property="og:url" content="{{url()->current()}}"/>--}}
    {{--    <meta property="og:site_name" content="{{env('APP_NAME')}}"/>--}}
    {{--    <meta property="og:description" content="@yield('meta_description')"/>--}}
    {{--    @if(!Route::is('product') && !Route::is('category'))--}}
    {{--        <meta property="og:image" content="{{asset('storage/logo.png')}}"/>--}}
    {{--        <meta property="og:image:secure_url" content="{{asset('storage/logo.png')}}"/>--}}
    {{--        <meta property="og:image:type" content="image/png"/>--}}
    {{--        <meta property="og:image:alt" content="{{env('APP_NAME')}}"/>--}}
    {{--    @endif--}}
    {{--    @yield('head')--}}
    @include('schema.organization')
    @if(Route::is('product') && isset($page['props']['product']))
        @include('schema.product',['product' => $page['props']['product'],'reviews' => $page['props']['reviews']])
        @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.categories.product',$page['props']['product']))

        <meta property="og:image"
              content="/storage/products/{{$page['props']['product']['preview']['webp_src']}}"/>
        <meta property="og:image:secure_url"
              content="/storage/products/{{$page['props']['product']['preview']['webp_src']}}"/>
        <meta property="og:image:type" content="image/webp"/>
        <meta property="og:image:alt" content="{{$page['props']['product']['h1'][app()->getLocale()]}}"/>

    @endif
    @if(Route::is('category') && isset($page['props']['category']))
        @if($page['props']['category']['preview_id'])
            <meta property="og:image"
                  content="/storage/categories/{{$page['props']['category']['preview']['webp_src']}}"/>
            <meta property="og:image:secure_url"
                  content="/storage/categories/{{$page['props']['category']['preview']['webp_src']}}"/>
            <meta property="og:image:type" content="image/webp"/>
        @endif
        <meta property="og:image:alt" content="{{$page['props']['category']['title'][app()->getLocale()]}}"/>
        @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.categories',$page['props']['category']))
    @endif
    <link rel="alternate" href="{{setLinkToLang(request()->url(),'ru')}}" hreflang="ru-UA"/>
    <link rel="alternate" href="{{setLinkToLang(request()->url(),'ua')}}" hreflang="uk-UA"/>
    <link rel="alternate" href="{{setLinkToLang(request()->url(),'ua')}}" hreflang="x-default"/>

</head>
<body class="h-full flex flex-col">
{!! $page['props']['options']['after_body_scripts'] !!}
@inertia
@routes
@vite('resources/js/Pages/Public/app.js')
{!! $page['props']['options']['footer_scripts'] !!}
@if(env('APP_ENV') !== 'local')
    <!-- Meta Pixel Code -->
    <script defer>
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', {{env('FB_PIXEL_ID')}});
        fbq('track', 'PageView');
    </script>
    <noscript>
        <img height="1" width="1" style="display:none"

             src="https://www.facebook.com/tr?id={{env('FB_PIXEL_ID')}}&ev=PageView&noscript=1"
        /></noscript>
    <!-- End Meta Pixel Code -->
@endif
</body>
</html>
