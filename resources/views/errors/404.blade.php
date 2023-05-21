<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>404 - Сторінку не знайдено</title>
    @vite('resources/scss/public.scss')
    {!! $page['props']['options']['head_scripts'] !!}
</head>
<body>
<div class="w-full pt-6">
    {!! $page['props']['options']['after_body_scripts'] !!}
    <div class="grid grid-cols-1 gap-4 text-center">
        <div class="text-8xl font-heading font-bold text-main">
            404
        </div>
        <div class="text-2xl font-subheading">
            Ой, такої сторінки ми не маємо
        </div>

        <div class="text-1xl font-text">
            Можливо, вона була видалена або її ніколи не було, а Ви прийшли сюди за неправильним посиланням.
        </div>

        <div class="text-center">
            <a href="{{asset(route('home'))}}">
                <button-component type="button">Повернусь на головну</button-component>
            </a>
        </div>
    </div>
</div>
{!! $page['props']['options']['footer_scripts'] !!}
</body>
</html>
