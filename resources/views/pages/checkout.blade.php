@extends('layouts.master')

@section('meta_title','Оформлення замовлення')

@section('head')
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.checkout'))
@endsection

@section('scripts')
    <script id="widget-wfp-script" language="javascript" type="text/javascript"
            src="https://secure.wayforpay.com/server/pay-widget.js"></script>
@endsection

@section('content')
    {{ Breadcrumbs::render('home.checkout') }}
    <checkout-index event-id-initiate-checkout="{{$event_id_initiateCheckout}}"
                    event-id-purchase="{{$event_id_purchase}}"
    ></checkout-index>
@endsection
