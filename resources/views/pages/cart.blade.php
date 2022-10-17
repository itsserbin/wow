@extends('layouts.master')

@section('content')
    {{ Breadcrumbs::render('home.cart') }}

    <div class="cart">
       <cart-component></cart-component>
   </div>
@endsection
