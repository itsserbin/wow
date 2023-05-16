@extends('layouts.master')

@if($options['meta_title_ua'] || $options['meta_title_ru'])
@section('meta_title'){{ app()->getLocale() === 'ua' ? $options['meta_title_ua'] : $options['meta_title_ru'] }}@endsection
@endif

@if($options['meta_description_ua'] || $options['meta_description_ru'])
@section('meta_description'){{ app()->getLocale() === 'ua' ? $options['meta_description_ua'] : $options['meta_description_ru'] }}@endsection
@endif



@section('content')
    <div class="home">
        <home-index lang="{{app()->getLocale()}}"
                    banners="{{json_encode($banners, JSON_THROW_ON_ERROR)}}"
                    categories="{{json_encode($categories, JSON_THROW_ON_ERROR)}}"
                    advantages="{{json_encode($advantages, JSON_THROW_ON_ERROR)}}"
                    reviews="{{json_encode($reviews, JSON_THROW_ON_ERROR)}}"
                    faqs="{{json_encode($faqs, JSON_THROW_ON_ERROR)}}"
                    best-selling-products="{{json_encode($best_selling_products, JSON_THROW_ON_ERROR)}}"
                    new-products="{{json_encode($new_products, JSON_THROW_ON_ERROR)}}"
                    all-products="{{json_encode($all_products, JSON_THROW_ON_ERROR)}}"
                    text="{{json_encode(['ua' => $options['text_home_page_ua'], 'ru' => $options['text_home_page_ru']], JSON_THROW_ON_ERROR)}}"
        ></home-index>
    </div>
    @if($options['consultation_status'] === 'on')
        <consultation></consultation>
    @endif
@endsection
