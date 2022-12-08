@extends('layouts.master')

@section('title'){{app()->getLocale() == 'ua' ? $product->title['ua'] : $product->title['ru']}}@endsection
@section('description'){{app()->getLocale() == 'ua' ? $product->description['ua'] : $product->description['ru']}}@endsection

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
                <h2 class="text-[38px] font-bold">
                    {{app()->getLocale() == 'ua' ? $product->h1['ua'] : $product->h1['ru']}}
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <span class="text-[10px]">Код: {{$product->id}}</span>
                    <span class="text-[#38af44] text-[14px] font-medium text-end">Товар в наявності</span>
                </div>

                <add-to-cart product="{{$product}}"></add-to-cart>

                <sizes-table size-table="{{$product->size_table}}"></sizes-table>

                @if($product->content['ua'] || $product->content['ru'])
                    <div class="my-2">
                        {!! app()->getLocale() == 'ua' ? $product->content['ua'] : $product->content['ru'] !!}
                    </div>
                @endif

                <delivery-and-payment></delivery-and-payment>
            </div>
        </div>

        <div class="grid grid-cols-1 @if($product->youtube) md:grid-cols-3 @else md:grid-cols-2 @endif mt-5 gap-4">
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
            @if($product->youtube)
                <div>
                    <div class="text-[24px] text-[#000] font-bold mb-5 text-center">
                        Відео-огляд
                    </div>
                    <iframe width="100%" height="250px" src="{{$product->youtube}}"></iframe>
                </div>
            @endif
            <div>
                <product-reviews :reviews="{{json_encode($product->reviews)}}"
                                 :id="{{$product->id}}"
                ></product-reviews>
            </div>
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
@endsection
