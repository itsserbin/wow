@php echo '<?xml version="1.0" encoding="UTF-8"?>'; @endphp
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>{{$xml['title'] ?? env('APP_NAME'). ' ' . 'Products Feed'}}</title>
        <description>{{$xml['description'] ?? env('APP_NAME'). ' ' . 'Products Feed'}}</description>
        <link>{{asset('/')}}</link>
        <atom:link href="{{URL::current()}}"
                   rel="self"
                   type="application/rss+xml"/>
        @if (!empty($products))

            @foreach ($products as $item)
                <item>
                    <id>{{ $item->id }}</id>
                    <title>{{ app()->getLocale() == 'ua' ? $item->h1['ua'] : (app()->getLocale() == 'ru' ? $item->h1['ru'] : null)  }}</title>
                    <description>{{app()->getLocale() == 'ua' ? $item->content['ua'] : (app()->getLocale() == 'ru' ? $item->content['ru'] : null)  }}</description>
                    <availability>
                        @if($item->status == 'ends')
                            {{\App\Models\Enums\ProductAvailability::IN_STOCK}}
                        @else
                            {{$item->status}}
                        @endif
                    </availability>
                    <brand>{{env('APP_NAME')}}</brand>
                    <condition>new</condition>
                    <price>{{$item->discount_price ?: $item->price}}</price>
                    <link>{{asset(route('product',$item->id))}}</link>
                    <image_link>
                        @if(\Illuminate\Support\Facades\Route::is('xml.fb.manual.3'))
                            {{route('images',$item->images[0]->image)}}
                        @else
                            @if($item->preview)
                                {{route('images',$item->preview->src)}}
                            @else
                                {{route('images',$item->images[0]->image)}}
                            @endif
                        @endif
                    </image_link>
                    <additional_image_link>
                        @foreach($item->images as $image)
                            {{route('images',$image->src).','}}
                        @endforeach
                    </additional_image_link>
                    <gender>female</gender>
                    <fb_product_category>Clothing and Accessories &gt; Clothing &gt; Women's Clothing
                    </fb_product_category>
                    <google_product_category>Apparel and Accessories &gt; Clothing</google_product_category>
                </item>
            @endforeach
        @endif
    </channel>
</rss>
