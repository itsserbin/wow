<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    @vite('resources/scss/public.scss')
</head>
<body>
<div id="app">
    <header class="w-[100%] fixed top-0 z-10 bg-[#fff]">
        <header-component/>
    </header>
    <main class="main">
        @yield('content')
    </main>

</div>
@vite('resources/js/Pages/Public/app.js')
</body>
</html>
