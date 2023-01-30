@php echo '<?xml version="1.0" encoding="UTF-8"?>'; @endphp
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
    <channel>
        <title>{{env('APP_NAME')}}</title>
        <link>{{asset(route('home'))}}</link>
        <description>{{env('APP_NAME')}} products feed for Google Merchant</description>
        @if (!empty($products))
            @foreach ($products as $item)
                <item>
                    <g:id>db-{{$item->id}}</g:id>
                    <g:title>{{$item->h1[app()->getLocale()]}}</g:title>
                    <g:description>{{$item->content[app()->getLocale()]}}</g:description>
                    <g:link>{{asset(route('product',$item->id))}}</g:link>
                    <g:image_link>
                        @if($item->preview)
                            {{route('images',$item->preview->src)}}
                        @else
                            {{route('images',$item->images[0]->src)}}
                        @endif
                    </g:image_link>
                    @if(count($item->images))
                        @foreach($item->images as $image)
                            <g:additional_image_link>{{route('images',$image->src)}}</g:additional_image_link>
                        @endforeach
                    @endif
                    <g:condition>new</g:condition>
                    <g:availability>in stock</g:availability>
                    <g:price>{{$item->discount_price ?: $item->price}} UAH</g:price>
                    <g:brand>{{env('APP_NAME')}}</g:brand>
                    <g:identifier_exist>false</g:identifier_exist>
                </item>
            @endforeach
        @endif
    </channel>
</rss>
