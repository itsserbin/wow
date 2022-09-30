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
        $result = $this->reviewsRepository->getAllWithPaginate();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function create(Request $request): JsonResponse
    {
        $result = $this->reviewsRepository->create($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function edit($id): JsonResponse
    {
        $result = $this->reviewsRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        $result = $this->reviewsRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $result = $this->reviewsRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function accept($id): JsonResponse
    {
        $result = $this->reviewsRepository->accept($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
