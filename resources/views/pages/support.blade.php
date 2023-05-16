@extends('layouts.master')

@section('meta_title','Підтримка клієнтів')

@section('head')
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.support'))
@endsection

@section('content')
    {{ Breadcrumbs::render('home.support') }}

    <support-index></support-index>
@endsection
