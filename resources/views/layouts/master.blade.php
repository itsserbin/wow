<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/scss/public.scss')
    {{--    {!! $options['head_scripts'] !!}--}}
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
    {{--    @include('schema.organization')--}}
    {{--    <link rel="alternate" href="{{setLinkToLang(request()->url(),'ru')}}" hreflang="ru-UA"/>--}}
    {{--    <link rel="alternate" href="{{setLinkToLang(request()->url(),'ua')}}" hreflang="uk-UA"/>--}}
    {{--    <link rel="alternate" href="{{setLinkToLang(request()->url(),'ua')}}" hreflang="x-default"/>--}}
    @routes
    @vite('resources/js/Pages/app.js')
    @if(env('APP_ENV' !== 'local'))
    <!-- Meta Pixel Code -->
        <script async>
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
    {{--    @vite(['resources/js/Pages/Public/app.js', "resources/js/Pages/Public/{$page['component']}.vue"])--}}
    @inertiaHead
</head>
<body class="h-full">
{{--{!! $options['after_body_scripts'] !!}--}}
<div class="loader">
    <div class="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-md">
        <div class="lds-ellipsis inline-block relative w-[80px] h-[80px]">
            <div class="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#ff0000]"></div>
            <div class="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#ff0000]"></div>
            <div class="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#ff0000]"></div>
            <div class="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#ff0000]"></div>
        </div>
    </div>
</div>
<div class="h-full flex flex-col">
    @inertia
    {{--    <master-layout>--}}
    {{--        <header class="w-[100%] fixed top-0 z-20 bg-[#fff] flex-[0_0_auto]">--}}
    {{--            @include('components.fixed-banner')--}}
    {{--            <header-component--}}
    {{--                lang="{{app()->getLocale()}}"--}}
    {{--                categories="{{json_encode($categories,JSON_THROW_ON_ERROR)}}"--}}
    {{--                pages="{{json_encode($pages,JSON_THROW_ON_ERROR)}}"--}}
    {{--                app-name="{{env('APP_NAME')}}"--}}
    {{--                app-phone="{{$options['phone']}}"--}}
    {{--                app-email="{{$options['email']}}"--}}
    {{--                app-facebook="{{$options['facebook']}}"--}}
    {{--                app-instagram="{{$options['instagram']}}"--}}
    {{--                app-schedule="{!! $options['schedule'] !!}"--}}
    {{--                app-telegram="{{$options['telegram']}}"--}}
    {{--                app-viber="{{$options['viber']}}"--}}
    {{--            ></header-component>--}}
    {{--        </header>--}}
    {{--            <main class="main flex-[1_0_auto]">--}}
    {{--                <div class="max-w-7xl mx-auto pt-36 md:pt-40 px-3 h-full">--}}
    {{--                    @yield('content')--}}
    {{--                </div>--}}
    {{--            </main>--}}
    {{--        <footer-component lang="{{app()->getLocale()}}"--}}
    {{--                          options="{{json_encode($options,JSON_THROW_ON_ERROR)}}"--}}
    {{--                          pages="{{json_encode($pages,JSON_THROW_ON_ERROR)}}"--}}
    {{--        ></footer-component>--}}
    {{--        @if($options['callback_status'] === 'on')--}}
    {{--            <callback></callback>--}}
    {{--        @endif--}}
    {{--        <scroll-to-top></scroll-to-top>--}}
    {{--    </master-layout>--}}
</div>
{{--<script>--}}
{{--    const loader = document.querySelector('.loader');--}}

{{--    window.addEventListener("DOMContentLoaded", () => {--}}
{{--        loader.classList.add('hidden');--}}
{{--    });--}}

{{--</script>--}}
{{--@vite('resources/js/Pages/Public/app.js')--}}
{{--{!! $options['footer_scripts'] !!}--}}

</body>
</html>
