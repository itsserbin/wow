@extends('layouts.master')

@section('content')
    {{ Breadcrumbs::render('home.checkout') }}

    <div class="checkout">
        <checkout-component></checkout-component>
    </div>
@endsection
