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

    /**
     * The index function is used to retrieve all products from the database
     * and return them as a paginated response.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        // retrieve all products with pagination
        $result = $this->productsRepository->getAllWithPaginate();

        // return a success response with the result
        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * The create function is used to create a new product in the database
     * using data from the provided request.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function create(Request $request): JsonResponse
    {
        // create a new product using data from the request
        $result = $this->productsRepository->create($request->all());

        // return a success response with the created product
        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * The update function is used to update a product in the database
     * using data from the provided request.
     *
     * @param int $id
     * @param Request $request
     * @return JsonResponse
     */
    public function update(int $id, Request $request): JsonResponse
    {
        // update the product with the provided id and data from the request
        $result = $this->productsRepository->update($id, $request->all());

        // return a success response with the updated product
        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * The destroy function is used to delete a product from the database
     * using the provided product id.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        // delete the product with the provided id
        $result = $this->productsRepository->destroy($id);

        // return a success response
        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * The edit function is used to retrieve a specific product from the database
     * using the provided product id.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function edit(int $id): JsonResponse
    {
        // retrieve the product with the provided id
        $result = $this->productsRepository->getById($id);

        // return a success response with the retrieved product
        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * The list function is used to retrieve a list of products from the database.
     *
     * @return JsonResponse
     */
    public function list(): JsonResponse
    {
        // retrieve a list of products
        $result = $this->productsRepository->list();

        // return a success response with the list of products
        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * The search function is used to search for products in the database
     * using the provided search keyword.
     *
     * @param string $search
     * @return JsonResponse
     */
    public function search(string $search): JsonResponse
    {
        // perform a search for products with the provided keyword
        $result = $this->productsRepository->search($search);

        // return a success response with the search results
        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * The updateSort function is used to update the sort order of a product in the database
     * using the provided product id and sort order from the request.
     *
     * @param int $id
     * @param Request $request
     * @return JsonResponse
     */
    public function updateSort(int $id, Request $request): JsonResponse
    {
        if ($request->get('sort')) {
            // update the sort order of the product with the provided id and sort order from the request
            $result = $this->productsRepository->updateSort($id, $request->get('sort'));

            // return a success response with the updated product
            return $this->returnResponse([
                'success' => true,
                'result' => $result,
            ]);
        } else {
            // Return a failure response if the sort order is not provided
            return $this->returnResponse([
                'success' => false,
                'message' => 'sort order is missing'
            ]);
        }
    }
}
