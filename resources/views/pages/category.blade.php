@extends('layouts.master')

@section('title', app()->getLocale() == 'ua' ? $category->meta_title['ua'] : (app()->getLocale() == 'ru' ? $category->meta_title['ru'] : null))

@section('description', app()->getLocale() == 'ua' ? $category->meta_description['ua'] : (app()->getLocale() == 'ru' ? $category->meta_description['ru'] : null))

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
@endsection
