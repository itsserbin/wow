@extends('layouts.master')

@section('content')
    {{ Breadcrumbs::render('home.categories.product',$product) }}

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="slider">
            <product-images-slider images="{{json_encode($product->images)}}"
                                   preview="{{$product->preview}}"
            ></product-images-slider>
        </div>

        <div>
            <h2 class="text-[38px] font-bold">
                {{app()->getLocale() == 'ua' ? $product->h1['ua'] : $product->h1['ru']}}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2">
                <span class="text-[10px]">Код: {{$product->id}}</span>
                <span class="text-[#38af44] text-[14px] font-medium text-end">Товар в наявності</span>
            </div>

            <add-to-cart colors="{{ json_encode($product->colors) }}"
                         sizes="{{ json_encode($product->sizes) }}"
                         discount-price="{{ $product->discount_price }}"
                         price="{{ $product->price }}"
                         id="{{$product->id}}"
            ></add-to-cart>

            <sizes-table size-table="{{$product->size_table}}"></sizes-table>

            @if($product->content['ua'] || $product->content['ru'])
                <div class="my-2">
                    {!! app()->getLocale() == 'ua' ? $product->content['ua'] : $product->content['ru'] !!}
                </div>
            @endif

            <delivery-and-payment></delivery-and-payment>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
        <div>
            @if($product->characteristics['ua'] || $product->characteristics['ru'])
                <div class="text-[24px] text-[#000] font-bold mb-5 text-center">
                    Характеристики
                </div>
                <div class="characteristics-table flex justify-center">
                    {!! app()->getLocale() == 'ua' ? $product->characteristics['ua'] : $product->characteristics['ru'] !!}
                </div>
            @endif
        </div>
        <div>
            <product-reviews :reviews="{{json_encode($product->reviews)}}"></product-reviews>
        </div>
    </div>
@endsection
