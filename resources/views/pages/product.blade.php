@extends('layouts.master')

@section('meta_title'){{$product->title[app()->getLocale()]}}@endsection
@section('meta_description'){{$product->description[app()->getLocale()]}}@endsection
@section('head')
    <meta property="og:image" content="{{asset(route('images',$product->preview->webp_src))}}"/>
    <meta property="og:image:secure_url" content="{{asset(route('images',$product->preview->webp_src))}}"/>
    <meta property="og:image:type" content="image/webp"/>
    <meta property="og:image:alt" content="{{$product->h1[app()->getLocale()]}}"/>
    @include('schema.product',$product)
    @include('schema.breadcrumbs',$breadcrumbs = Breadcrumbs::generate('home.categories.product',$product))
@endsection

@section('content')
    {{ Breadcrumbs::render('home.categories.product',$product) }}
    <product-index lang="{{app()->getLocale()}}"
                   images="{{json_encode($product->images,JSON_THROW_ON_ERROR)}}"
                   preview="{{$product->preview}}"
                   product="{{$product}}"
                   characteristics="{{json_encode($characteristics,JSON_THROW_ON_ERROR)}}"
                   reviews="{{json_encode($reviews,JSON_THROW_ON_ERROR)}}"
                   recommend-products="{{json_encode($recommend_products,JSON_THROW_ON_ERROR)}}"
                   new-products="{{json_encode($new_products,JSON_THROW_ON_ERROR)}}"
                   best-products="{{json_encode($best_products,JSON_THROW_ON_ERROR)}}"
                   faqs="{{json_encode($faqs,JSON_THROW_ON_ERROR)}}"
                   auth-user="{{(bool)request()->user()}}"
                   event-id-content="{{$event_id_content}}"
                   event-id-add-to-card="{{$event_id_addToCard}}"
                   event-id-purchase-in-1-click="{{$event_id_purchase_in_1_click}}"
                   return-and-exchange-ua="{{$options['text_return_and_exchange_ua']}}"
                   return-and-exchange-ru="{{$options['text_return_and_exchange_ru']}}"
                   delivery-and-payment-ua="{{$options['text_delivery_and_payment_ua']}}"
                   delivery-and-payment-ru="{{$options['text_delivery_and_payment_ru']}}"
    ></product-index>
    @if($options['consultation_status'] == 'on')
        <consultation></consultation>
    @endif
@endsection
