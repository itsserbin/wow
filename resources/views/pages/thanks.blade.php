@extends('layouts.master')

@section('meta_title','Дякуємо за покупку!')

@section('content')
    <thanks-index lang="{{app()->getLocale()}}"></thanks-index>
@endsection
