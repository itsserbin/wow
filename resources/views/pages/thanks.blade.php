@extends('layouts.master')

@section('meta_title','Дякуємо за покупку!')

@section('content')
    <thanks-component lang="{{app()->getLocale()}}"></thanks-component>
@endsection
