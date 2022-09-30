<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SocialReviewsRequest;
use App\Repositories\SocialReviewsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SocialReviewsController extends BaseController
{
    private mixed $socialReviewsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->socialReviewsRepository = app(SocialReviewsRepository::class);
    }

    public function index(): JsonResponse
    {
        $result = $this->socialReviewsRepository->getAllWithPaginate();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function edit($id): JsonResponse
    {
        $result = $this->socialReviewsRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        $result = $this->socialReviewsRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function create(Request $request): JsonResponse
    {
        $result = $this->socialReviewsRepository->create($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $result = $this->socialReviewsRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
