@extends('layouts.master')

@section('title','Дякуємо за покупку!')

@section('content')
    <thanks-component lang="{{app()->getLocale()}}"></thanks-component>
@endsection
