@extends('layouts.master')

@section('title','Статус замовлення')

@section('head')
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.status'))
@endsection

@section('content')
    {{ Breadcrumbs::render('home.status') }}

    <status-component statuses="{{json_encode($statuses)}}"></status-component>
@endsection
