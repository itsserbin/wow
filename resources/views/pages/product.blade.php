@extends('layouts.master')

@section('title'){{$product->title[app()->getLocale()]}}@endsection
@section('description'){{$product->description[app()->getLocale()]}}@endsection
@section('schema')@include('schema.product',$product)@endsection

@section('content')
    {{ Breadcrumbs::render('home.categories.product',$product) }}
    <div class="grid grid-cols-1 gap-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="slider">
                <product-images-slider images="{{json_encode($product->images)}}"
                                       preview="{{$product->preview}}"
                ></product-images-slider>
            </div>

            <div>
                <h2 class="text-3xl font-heading text-text font-bold">
                    {{app()->getLocale() == 'ua' ? $product->h1['ua'] : $product->h1['ru']}}
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 font-subheading">
                    <div class="d-flex text-[10px]">
                        <div>Код: {{$product->id}}</div>
                        @if(request()->user())
                            <div> Артикул: {{$product->vendor_code}}</div>
                        @endif
                    </div>
                    @if($product->status == 'in stock')
                        <span class="text-[#38af44] text-[14px] font-medium text-end">
                        @lang('product.text_product_in_stock')
                    </span>
                    @elseif($product->status == 'ends')
                        <span class="text-[#FFC300] text-[14px] font-medium text-end">
                            @lang('product.text_product_ends')
                        </span>
                    @else
                        <span class="text-[#C70039] text-[14px] font-medium text-end">
                            @lang('product.text_product_out_of_stock')
                        </span>
                    @endif
                </div>

                <add-to-cart product="{{$product}}"
                             event-id-content="{{$event_id_content}}"
                             event-id-add-to-card="{{$event_id_addToCard}}"
                             event-id-purchase-in-1-click="{{$event_id_purchase_in_1_click}}"
                ></add-to-cart>
                <div class="content">
                    {!! app()->getLocale() == 'ua' ? $product->content['ua'] : $product->content['ru'] !!}
                </div>
            </div>
        </div>

        <div>
            <product-content lang="{{app()->getLocale()}}"
                             description="{{json_encode($product->content)}}"
                             characteristics="{{json_encode($product->characteristics)}}"
                             size-table="{{json_encode($product->size_table)}}"
                             youtube="{{$product->youtube}}"
                             return-and-exchange-ua="{{$options['text_return_and_exchange_ua']}}"
                             return-and-exchange-ru="{{$options['text_return_and_exchange_ru']}}"
                             delivery-and-payment-ua="{{$options['text_delivery_and_payment_ua']}}"
                             delivery-and-payment-ru="{{$options['text_delivery_and_payment_ru']}}"
            ></product-content>
        </div>

        <div class="reviews">
            <all-reviews-carousel/>
        </div>

        <div class="grid grid-cols-1 gap-5">
            <div class="relative">
                <relative-products id="{{$product->id}}" lang="{{app()->getLocale()}}"></relative-products>
            </div>

            <div class="best">
                <best-selling-product lang="{{app()->getLocale()}}"></best-selling-product>
            </div>

            <div class="new">
                <new-product lang="{{app()->getLocale()}}"></new-product>
            </div>
        </div>
        <div class="faq">
            <faq-component lang="{{app()->getLocale()}}"/>
        </div>
        @include('components.support')
    </div>
    @if($options['consultation_status'] == 'on')
        <consultation></consultation>
    @endif
@endsection
