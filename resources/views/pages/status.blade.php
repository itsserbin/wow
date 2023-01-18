@extends('layouts.master')

@section('content')
    {{ Breadcrumbs::render('home.status') }}

    <status-component statuses="{{json_encode($statuses)}}"></status-component>
@endsection
