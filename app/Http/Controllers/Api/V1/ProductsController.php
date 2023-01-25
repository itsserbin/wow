<?php

namespace App\Http\Controllers\Api\V1;

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

    /**
     * This code defines a function called getBestSellingProductsWithPaginate in a controller class.
     * The function retrieves the best selling products using the productsRepository object,
     * which is likely a repository class responsible for interacting with the database.
     * The function then returns a JSON response containing the data retrieved
     * from the repository with the key 'result' and 'success' key set to true.
     * The use of pagination is also done to return a set number of products at a time.
     *
     * @return JsonResponse
     */
    public function getBestSellingProductsWithPaginate(): JsonResponse
    {
        $result = $this->productsRepository->getProductsForPublicWithPaginate('total_sales', 'desc');

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function getNewProducts(): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->productsRepository->getProductsForPublicWithPaginate('id','desc'),
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
