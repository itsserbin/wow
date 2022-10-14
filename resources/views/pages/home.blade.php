@extends('layouts.master')

@section('content')
    <div class="banners">
        <main-banners lang="{{app()->getLocale()}}"></main-banners>
    </div>
    <div class="categories">
        <categories-component lang="{{app()->getLocale()}}"
                              categories-route="{{route('category')}}"
        >
        </categories-component>
    </div>
    <div class="best-selling mb-5">
        <best-selling-products lang="{{app()->getLocale()}}"
                               product-route="{{route('product')}}"
        >
        </best-selling-products>
    </div>
    <div class="all-products mb-5">
        <all-products lang="{{app()->getLocale()}}"
                      product-route="{{route('product')}}"
        ></all-products>
    </div>
    <div class="new-products mb-5">
        <new-products lang="{{app()->getLocale()}}"
                      product-route="{{route('product')}}"
        ></new-products>
    </div>
    @include('components.advantages')
    <div class="reviews">
        <all-reviews-carousel/>
    </div>
    <div class="faq">
        <faq-component lang="{{app()->getLocale()}}"/>
    </div>
@endsection
