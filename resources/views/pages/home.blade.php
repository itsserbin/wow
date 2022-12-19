@extends('layouts.master')

@if($options['meta_title_ua'] || $options['meta_title_ru'])
@section('title'){{ app()->getLocale() == 'ua' ? $options['meta_title_ua'] : $options['meta_title_ru'] }}@endsection
@endif

@if($options['meta_description_ua'] || $options['meta_description_ru'])
@section('description'){{ app()->getLocale() == 'ua' ? $options['meta_description_ua'] : $options['meta_description_ru'] }}@endsection
@endif

@section('content')
    <div class="grid grid-cols-1 gap-7">
        <div class="banners">
            <main-banners lang="{{app()->getLocale()}}"></main-banners>
        </div>
        <div class="categories">
            <categories-component lang="{{app()->getLocale()}}"
            >
            </categories-component>
        </div>
        <div class="best-selling">
            <best-selling-products lang="{{app()->getLocale()}}"
            >
            </best-selling-products>
        </div>
        <div class="all-products mb-5">
            <all-products lang="{{app()->getLocale()}}"
            ></all-products>
        </div>
        <div class="new-products mb-5">
            <new-products lang="{{app()->getLocale()}}"
            ></new-products>
        </div>
        @include('components.advantages')
        <div class="reviews">
            <all-reviews-carousel/>
        </div>
        <div class="content">
            {!! app()->getLocale() == 'ua' ? $options['text_home_page_ua'] : $options['text_home_page_ru'] !!}
        </div>
        <div class="faq">
            <faq-component lang="{{app()->getLocale()}}"/>
        </div>
        @include('components.support')
    </div>
    @if($options['consultation_status'] == 'on')
        <consultation></consultation>
    @endif
@endsection
