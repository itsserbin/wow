@extends('layouts.master')

@section('title',app()->getLocale() == 'ua' ? $page->meta_title['ua'] : $page->meta_title['ru'] )

@section('content')
    {{ Breadcrumbs::render('home.pages',$page) }}

    <h1 class="font-bold text-black text-center text-2xl font-heading mb-[15px]">
        {{app()->getLocale() == 'ua' ? $page->h1['ua'] : $page->h1['ru']}}
    </h1>
    <div class="content">
        {!! app()->getLocale() == 'ua' ? $page->content['ua'] : $page->content['ru'] !!}
    </div>
@endsection
