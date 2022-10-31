@extends('layouts.master')

@section('content')
    <status-component statuses="{{json_encode($statuses)}}"></status-component>
@endsection
