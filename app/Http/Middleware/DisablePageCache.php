<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class DisablePageCache
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        return $next($request)->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    }
}
