@extends('layouts.master')

@section('meta_title', $page->meta_title[app()->getLocale()])

@section('head')
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.pages',$page))
@endsection

@section('content')
    {{ Breadcrumbs::render('home.pages',$page) }}

    <page-index lang="{{app()->getLocale()}}" page="{{json_encode($page,JSON_THROW_ON_ERROR)}}"></page-index>
@endsection
