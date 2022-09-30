@extends('layouts.master')

@section('content')
    <div class="container mx-auto">
        <div class="categories">
            <categories-component/>
        </div>
        <div class="best-selling mb-5">
            <best-selling-products/>
        </div>
        <div class="all-products mb-5">
            <all-products/>
        </div>
        <div class="new-products mb-5">
            <new-products/>
        </div>
        <div class="reviews">
            <all-reviews-carousel/>
        </div>
        <div class="faq">
            <faq-component/>
        </div>
    </div>
@endsection
