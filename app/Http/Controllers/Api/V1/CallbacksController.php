<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Requests\Public\CallbackCreateRequest;
use App\Repositories\CallbacksRepository;
use Illuminate\Http\JsonResponse;

class CallbacksController extends BaseController
{
    private mixed $callbacksRepository;

    public function __construct()
    {
        parent::__construct();
        $this->callbacksRepository = app(CallbacksRepository::class);
    }

    public function create(CallbackCreateRequest $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'order' => $this->callbacksRepository->create($request->all())
        ]);
    }
}
