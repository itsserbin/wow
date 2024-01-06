<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RedirectToNonWwwMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (!$this->performRedirect($request)) {
            return redirect()->away('https://dabango.com.ua' . ($request->path() ? '/' . $request->path() : null), 301);
        }

//        if ($isGoogleBot && $request->header('host') === 'dabango.store') {
//            return redirect()->away('https://dabango.com.ua/' . $request->path(), 301);
//        }


//        if (Request::isMethod('get') && Request::header('referer') && str_contains(Request::header('referer'), 'google.com')) {
//
//        }

        if (str_starts_with($request->header('host'), 'www.')) {
            $request->headers->set('host', env('SESSION_DOMAIN'));
            return redirect()->secure($request->path());
        }

        return $next($request);
    }

    private function performRedirect(Request $request): bool
    {
        $isGoogleBot = $this->isBot($request->header('User-Agent'));
        $isGoogleReferer = $this->isGoogleReferer($request);

        return ($isGoogleBot && $request->header('host') === 'dabango.store')
            || ($isGoogleReferer && $request->header('host') === 'dabango.store');
    }

    private function isGoogleReferer(Request $request): bool
    {
        return $request->isMethod('get') && $request->header('referer') && str_contains($request->header('referer'), 'google.com');
    }

    private function isBot(string $userAgent): bool
    {
        $botsToCheck = [
            'Googlebot',
            'Bingbot',
            'Slurp',
            'DuckDuckBot',
            'YandexBot',
            'Google-InspectionTool',
            'Googlebot-Mobile',
        ];

        foreach ($botsToCheck as $bot) {
            if (stripos($userAgent, $bot) !== false) {
                return true;
            }
        }

        return false;
    }
}
