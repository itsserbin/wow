@extends('layouts.master')

@section('meta_title','Статус замовлення')

@section('head')
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.status'))
@endsection

@section('content')
    {{ Breadcrumbs::render('home.status') }}

    <order-status-index statuses="{{json_encode($statuses,JSON_THROW_ON_ERROR)}}"></order-status-index>
@endsection
