@if(Route::is('home'))
    <title>{{app()->getLocale() === 'ua' ? $page['props']['options']['meta_title_ua'] : $page['props']['options']['meta_title_ru']}}</title>
    <meta name="description"
          content="{{app()->getLocale() === 'ua' ? $page['props']['options']['meta_description_ua'] : $page['props']['options']['meta_description_ru']}}">
@endif
