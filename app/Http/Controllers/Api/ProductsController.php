<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\ProductsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductsController extends BaseController
{
    private mixed $productsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->productsRepository = app(ProductsRepository::class);
    }

    public function index(): JsonResponse
    {
        $result = $this->productsRepository->getAllWithPaginate();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function create(Request $request): JsonResponse
    {
        $result = $this->productsRepository->create($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function update(int $id, Request $request): JsonResponse
    {
        $result = $this->productsRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function destroy(int $id): JsonResponse
    {
        $result = $this->productsRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function edit(int $id): JsonResponse
    {
        $result = $this->productsRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function list(): JsonResponse
    {
        $result = $this->productsRepository->list();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function getBestSelling(): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->productsRepository->getBestSelling(),
        ]);
    }

    public function getNewProducts(): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->productsRepository->getNewProducts(),
        ]);
    }

    public function getWhereCategorySlug($slug): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->productsRepository->getWhereCategorySlugToPublic($slug, 12),
        ]);
    }

    public function getRecommendProducts(): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->productsRepository->getRecommendProducts(),
        ]);
    }

    public function getRelativeProducts($id): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->productsRepository->getRelativeProducts($id),
        ]);
    }

    public function getBestSellingProducts(): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->productsRepository->getBestSellingProducts(),
        ]);
    }

    public function getAllToPublic(): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->productsRepository->getAllToPublic(),
        ]);
    }
}
