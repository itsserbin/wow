@extends('layouts.master')

@section('title','Оформлення замовлення')

@section('head')
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.checkout'))
@endsection

@section('scripts')
    <script id="widget-wfp-script" language="javascript" type="text/javascript"
            src="https://secure.wayforpay.com/server/pay-widget.js"></script>
@endsection

@section('content')
    {{ Breadcrumbs::render('home.checkout') }}
    <div class="checkout">
        <checkout-component event-id-initiate-checkout="{{$event_id_initiateCheckout}}"
                            event-id-purchase="{{$event_id_purchase}}"
        ></checkout-component>
    </div>
@endsection
