<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <meta name="robots" content="noindex, nofollow"/>

    @vite('resources/scss/app.scss')
    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Scripts -->
    @routes
    @vite('resources/js/Pages/app.js')
{{--    @vite(['resources/js/Pages/Admin/app.js', "resources/js/Pages/Admin/{$page['component']}.vue"])--}}
    @inertiaHead
</head>
<body class="font-sans antialiased bg-gray-100 dark:bg-gray-900">
@inertia
</body>
</html>
