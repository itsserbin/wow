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

        if ($request->header('host') !== 'dabango.com.ua') {
            return redirect()->away('https://dabango.com.ua', 301);
        }
//        if ($this->performRedirect($request)) {
//            return redirect()->away('https://dabango.com.ua', 301);
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

        return ($isGoogleBot && $request->header('host') !== 'dabango.com.ua')
            || ($isGoogleReferer && $request->header('host') !== 'dabango.com.ua');
    }

    private function isGoogleReferer(Request $request): bool
    {
        return $request->isMethod('get') && $request->header('referer') && str_contains($request->header('referer'), 'google');
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
