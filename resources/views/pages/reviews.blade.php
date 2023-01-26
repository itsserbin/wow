@extends('layouts.master')

@section('meta_title')Відгуки@endsection

@section('head')
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.reviews'))
@endsection

@section('content')
    {{ Breadcrumbs::render('home.reviews') }}

    <h1 class="font-bold text-black text-center text-[24px] mb-[15px]">
        Відгуки
    </h1>

    <all-reviews-list
        lang="{{app()->getLocale()}}"
    ></all-reviews-list>
@endsection
