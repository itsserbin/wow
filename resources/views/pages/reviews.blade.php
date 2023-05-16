@extends('layouts.master')

@section('meta_title')Відгуки@endsection

@section('head')
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.reviews'))
@endsection

@section('content')
    {{ Breadcrumbs::render('home.reviews') }}

    <reviews-index lang="{{app()->getLocale()}}"></reviews-index>
@endsection
