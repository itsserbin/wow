@extends('layouts.master')

@section('scripts')
    <script id="widget-wfp-script" language="javascript" type="text/javascript"
            src="https://secure.wayforpay.com/server/pay-widget.js"></script>
@endsection

@section('content')
    <thanks-component lang="{{app()->getLocale()}}"></thanks-component>
@endsection
