<picture>
    <source media="(max-width: 768px)"
            srcset="{{
                        app()->getLocale() === 'ua' ?
                        asset('storage/banners/support_ukraine_ua_768.png') :
                        (
                            app()->getLocale() === 'ru' ?
                            asset('storage/banners/support_ukraine_ru_768.png') :
                            null
                        )
                    }}"
    >
    <source media="(max-width: 1000px)"
            srcset="{{
                        app()->getLocale() === 'ua' ?
                        asset('storage/banners/support_ukraine_ua_1000.png') :
                        (
                            app()->getLocale() === 'ru' ?
                            asset('storage/banners/support_ukraine_ru_1000.png') :
                            null
                        )
                    }}"
    >
    <source
        srcset="{{
                    app()->getLocale() === 'ua' ?
                    asset('storage/banners/support_ukraine_ua_1900.png') :
                    (
                        app()->getLocale() === 'ru' ? asset('storage/banners/support_ukraine_ru_1900.png') :
                         null
                     )
                 }}"
    >
    <img
        srcset="{{
                    app()->getLocale() === 'ua' ?
                    asset('storage/banners/support_ukraine_ua_1900.png') :
                    (
                        app()->getLocale() === 'ru' ?
                        asset('storage/banners/support_ukraine_ru_1900.png') :
                        null
                    )
                }}"
        alt="{{
                app()->getLocale() === 'ua' ?
                'Слава Україні!' :
                (
                    app()->getLocale() === 'ru' ?
                    'Слава Украине!' :
                    null
                )
            }}"
        class="w-100"
    >
</picture>
