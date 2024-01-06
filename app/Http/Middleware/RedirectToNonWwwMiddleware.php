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
        $isGoogleBot = $this->isBot($request->header('User-Agent'));

        if ($isGoogleBot && $request->header('host') === 'dabango.store') {
            return redirect()->away('https://dabango.com.ua/' . $request->path(),301);
        }

        if (str_starts_with($request->header('host'), 'www.')) {
            $request->headers->set('host', env('SESSION_DOMAIN'));
            return redirect()->secure($request->path());
        }

        return $next($request);
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
