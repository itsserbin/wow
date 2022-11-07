<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Requests\Public\CreateSupportRequest;
use App\Repositories\SupportsRepository;
use Illuminate\Http\JsonResponse;

class SupportsController extends BaseController
{
    private mixed $supportsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->supportsRepository = app(SupportsRepository::class);
    }

    public function create(CreateSupportRequest $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'order' => $this->supportsRepository->create($request->all())
        ]);
    }
}
