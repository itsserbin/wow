@extends('layouts.master')

@section('meta_title','Кошик')

@section('head')
    @include('schema.breadcrumbs', $breadcrumbs = Breadcrumbs::generate('home.cart'))
@endsection

@section('content')
    {{ Breadcrumbs::render('home.cart') }}

    <cart-index lang="{{app()->getLocale()}}"
                recommend-products="{{$recommend_products}}"
    ></cart-index>
@endsection
