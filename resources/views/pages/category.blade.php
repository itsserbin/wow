@extends('layouts.master')

@section('title',$category->meta_title[app()->getLocale()])
@section('description',$category->meta_description[app()->getLocale()])

@section('head')
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.categories',$category))
@endsection

@section('content')
    {{ Breadcrumbs::render('home.categories',$category) }}

    <category-banners lang="{{app()->getLocale()}}"
                      id="{{$category->id}}"
    ></category-banners>

    <category-products lang="{{app()->getLocale()}}"
                       title="{{app()->getLocale() == 'ua' ? $category->title['ua'] : $category->title['ru']}}"
                       slug="{{$category->slug}}"
                       product-route="{{route('product')}}"
    ></category-products>

    <div class="category-text content">
        {!! app()->getLocale() == 'ua' ? $category->seo_text['ua'] : $category->seo_text['ru'] !!}
    </div>
    @if($options['consultation_status'] == 'on')
        <consultation></consultation>
    @endif
@endsection
