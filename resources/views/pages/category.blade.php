@extends('layouts.master')

@section('content')
    <div class="category-banners">
        <category-banners lang="{{app()->getLocale()}}"
                          id="{{$category->id}}"
        ></category-banners>
    </div>

    <div class="category-products">
        <category-products lang="{{app()->getLocale()}}"
                           title="{{app()->getLocale() == 'ua' ? $category->title['ua'] : $category->title['ru']}}"
                           slug="{{$category->slug}}"
                           product-route="{{route('product')}}"
        ></category-products>
    </div>

    <div class="category-text content">
        {!! app()->getLocale() == 'ua' ? $category->seo_text['ua'] : $category->seo_text['ru'] !!}
    </div>
@endsection
