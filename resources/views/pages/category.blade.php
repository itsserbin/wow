@extends('layouts.master')

@section('meta_title',$category->meta_title[app()->getLocale()])
@section('meta_description',$category->meta_description[app()->getLocale()])

@section('head')
    @if($category->preview)
        <meta property="og:image" content="{{asset(route('images',$category->preview->webp_src))}}"/>
        <meta property="og:image:secure_url" content="{{asset(route('images',$category->preview->webp_src))}}"/>
        <meta property="og:image:type" content="image/webp"/>
    @endif
    <meta property="og:image:alt" content="{{$category->title[app()->getLocale()]}}"/>
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
                       characteristics="{{json_encode($characteristics)}}"
    ></category-products>

    <div class="category-text content">
        {!! app()->getLocale() == 'ua' ? $category->seo_text['ua'] : $category->seo_text['ru'] !!}
    </div>
    @if($options['consultation_status'] == 'on')
        <consultation></consultation>
    @endif
@endsection
