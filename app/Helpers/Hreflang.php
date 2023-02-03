<?php

if (!function_exists('setLinkToLang')) {
    function setLinkToLang(string $url, string $lang): string
    {
        $parse_url = parse_url($url, PHP_URL_PATH);
        $segments = explode('/', $parse_url);

        if (count($segments) > 1) {
            if (in_array($segments[1], App\Http\Middleware\LocaleMiddleware::$languages)) {
                unset($segments[1]);
            }
        }

        if ($lang !== App\Http\Middleware\LocaleMiddleware::$mainLanguage) {
            array_splice($segments, 1, 0, $lang);
        }

        return request()->root() . implode("/", $segments);

    }
}
