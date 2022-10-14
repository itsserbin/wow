<?php

namespace App\Http\Controllers\Api;

use App\Repositories\OptionsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OptionsController extends BaseController
{
    private mixed $optionsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->optionsRepository = app(OptionsRepository::class);
    }

    public function getMainOptions(): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->optionsRepository->getMainOptions(),
        ]);
    }

    public function updateMainOptions(Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->optionsRepository->updateOptions($request->all()),
        ]);
    }

    public function getScriptsOptions(): JsonResponse
    {
        $result = $this->optionsRepository->getScriptsOptions();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
