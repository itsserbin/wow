@extends('layouts.master')

@section('scripts')
    <script id="widget-wfp-script" language="javascript" type="text/javascript"
            src="https://secure.wayforpay.com/server/pay-widget.js"></script>
@endsection

@section('content')
    {{ Breadcrumbs::render('home.checkout') }}

    <div class="checkout">

        <checkout-component></checkout-component>

    </div>
@endsection
