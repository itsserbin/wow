@extends('layouts.master')

@section('title','Підтримка клієнтів')

@section('head')
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.support'))
@endsection

@section('content')
    {{ Breadcrumbs::render('home.support') }}

    <support-component></support-component>
@endsection
