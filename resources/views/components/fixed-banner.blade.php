@if (Storage::disk('public')->exists('banners/support_ukraine_ru_1900.webp'))
    <picture>
        @php
            $mobileBanner = app()->getLocale() === 'ua' ? asset('storage/banners/support_ukraine_ua_768') : asset('storage/banners/support_ukraine_ru_768');
            $tableBanner = app()->getLocale() === 'ua' ? asset('storage/banners/support_ukraine_ua_1000') : asset('storage/banners/support_ukraine_ru_1000');
            $desktopBanner = app()->getLocale() === 'ua' ? asset('storage/banners/support_ukraine_ua_1900') : asset('storage/banners/support_ukraine_ru_1900');
        @endphp

        <source media="(max-width: 768px)" srcset="{{$mobileBanner}}.webp" type="image/webp">
        <source media="(max-width: 768px)" srcset="{{$mobileBanner}}.jpeg" type="image/jpeg">

        <source media="(max-width: 1000px)" srcset="{{$tableBanner}}.webp" type="image/webp">
        <source media="(max-width: 1000px)" srcset="{{$tableBanner}}.jpeg" type="image/jpeg">

        <source srcset="{{$desktopBanner}}.webp">
        <img src="{{$desktopBanner}}.jpeg" alt="Слава Україні!" class="w-[100%]">
    </picture>
@endif
