@extends('layouts.master')

@section('meta_title', $page->meta_title[app()->getLocale()])

@section('head')
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.pages',$page))
@endsection

@section('content')
    {{ Breadcrumbs::render('home.pages',$page) }}

    <h1 class="font-bold text-black text-center text-2xl font-heading mb-[15px]">
        {{app()->getLocale() == 'ua' ? $page->h1['ua'] : $page->h1['ru']}}
    </h1>
    <div class="content">
        {!! app()->getLocale() == 'ua' ? $page->content['ua'] : $page->content['ru'] !!}
    </div>
@endsection
