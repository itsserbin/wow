<script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "brand": {
        "@type": "Brand",
        "name": "{{env('APP_NAME')}}"
      },
      "sku": "{{$product->id}}",
      "name": "{{$product->h1[app()->getLocale()]}}",
      "description": "{{$product->description[app()->getLocale()]}}",
      "image": "{{route('images',$product->preview->src)}}",
      "review": [
      @foreach($product->reviews as $review)
            {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "author": {
              "@type": "Person",
              "name": "{{$review->name}}"
            }
        @if($loop->last)
            }
        @else
            },
        @endif
      @endforeach
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "reviewCount": "{{count($product->reviews)}}"
      }
    }

</script>
