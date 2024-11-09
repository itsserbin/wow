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

    <category-index lang="{{app()->getLocale()}}"
                    banners="{{json_encode($banners,JSON_THROW_ON_ERROR)}}"
                    characteristics="{{json_encode($characteristics,JSON_THROW_ON_ERROR)}}"
                    products="{{json_encode($products,JSON_THROW_ON_ERROR)}}"
                    consultation="{{json_encode($options['consultation_status'] === 'on',JSON_THROW_ON_ERROR)}}"
                    title="{{$category->title[app()->getLocale()]}}"
                    text="{{$category->seo_text[app()->getLocale()]}}"
    ></category-index>
@endsection
