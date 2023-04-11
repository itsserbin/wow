<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\ResponseFactory;

class DisableInertiaCache
{
    protected $responseFactory;

    public function __construct(ResponseFactory $responseFactory)
    {
        $this->responseFactory = $responseFactory;
    }

    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        if ($response instanceof \Inertia\Response) {
            $response->getHeaders()->set('Cache-Control', 'no-cache, no-store, must-revalidate');
            $response->getHeaders()->set('Pragma', 'no-cache');
            $response->getHeaders()->set('Expires', '0');
        }

        return $response;
    }
}

