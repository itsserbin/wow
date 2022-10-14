<?php

namespace App\Http\Controllers\Api;

use App\Repositories\ProductReviewsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductReviewsController extends BaseController
{
    private mixed $reviewsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->reviewsRepository = app(ProductReviewsRepository::class);
    }

    public function index(): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->reviewsRepository->getAllWithPaginate(),
        ]);
    }

    public function create(Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->reviewsRepository->create($request->all()),
        ]);
    }

    public function edit($id): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->reviewsRepository->getById($id),
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->reviewsRepository->update($id, $request->all()),
        ]);
    }

    public function destroy($id): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->reviewsRepository->destroy($id),
        ]);
    }

    public function accept($id): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->reviewsRepository->accept($id),
        ]);
    }

    public function carouselList(): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->reviewsRepository->carouselList(10)
        ]);
    }
}
