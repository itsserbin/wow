@extends('layouts.master')

@section('title','Кошик')

@section('head')
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.cart'))
@endsection

@section('content')
    {{ Breadcrumbs::render('home.cart') }}

    <div class="cart">
        <cart-component></cart-component>
    </div>
@endsection
