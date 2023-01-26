@extends('layouts.master')

@section('content')
    {{ Breadcrumbs::render('home.support') }}

    <support-component></support-component>
@endsection
