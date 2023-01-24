<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    @vite('resources/scss/public.scss')
    @routes
    {!! $options['head_scripts'] !!}
</head>
<body class="h-full">
{!! $options['after_body_scripts'] !!}
<div id="app" class="h-full flex flex-col">
    <header class="w-[100%] fixed top-0 z-10 bg-[#fff] flex-[0_0_auto]">
        @include('components.fixed-banner')
        <header-component
            lang="{{app()->getLocale()}}"
            categories="{{$categories}}"
            pages="{{json_encode($pages)}}"
            logo-app="{{asset('storage/img/content/logo.png')}}"
            app-name="{{env('APP_NAME')}}"
            app-phone="{{$options['phone']}}"
            app-email="{{$options['email']}}"
            app-facebook="{{$options['facebook']}}"
            app-instagram="{{$options['instagram']}}"
            app-schedule="{!! $options['schedule'] !!}"
            app-telegram="{{$options['telegram']}}"
            app-viber="{{$options['viber']}}"
        ></header-component>
    </header>
    <main class="main flex-[1_0_auto]">
        <div class="max-w-7xl mx-auto mt-32 md:mt-40 px-3">
            <div class="grid grid-cols-1">
                @yield('content')
            </div>
        </div>
    </main>
    @include('components.footer')
    @if($options['callback_status'] == 'on')
        <callback></callback>
    @endif
    <scroll-to-top></scroll-to-top>
</div>
@vite('resources/js/Pages/Public/app.js')
@if(env('APP_ENV') !== 'local')
    <script>
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
        fbq('track', 'PageView', {}, {'event_id': {{$event_id_page_view}}})
    </script>
    <noscript>
        <img height="1" width="1" style="display:none"
             src="'https://www.facebook.com/tr?id={{env('FB_PIXEL_ID')}}&ev=PageView&noscript=1'"
        />
    </noscript>
@endif
{!! $options['footer_scripts'] !!}
@yield('scripts')
</body>
</html>
