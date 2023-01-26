@extends('layouts.master')

@section('meta_title','Сторінку не знайдено')

@section('content')
    {{ Breadcrumbs::render('home.404') }}

    <div class="w-full pt-6">
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
@endsection
