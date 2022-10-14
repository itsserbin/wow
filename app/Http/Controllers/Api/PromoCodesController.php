<?php

namespace App\Http\Controllers\Api;

use App\Repositories\PromoCodesRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PromoCodesController extends BaseController
{
    private mixed $promoCodesRepository;

    public function __construct()
    {
        parent::__construct();
        $this->promoCodesRepository = app(PromoCodesRepository::class);
    }

    public function index(): JsonResponse
    {
        $result = $this->promoCodesRepository->getAllWithPaginate();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        $result = $this->promoCodesRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function edit($id): JsonResponse
    {
        $result = $this->promoCodesRepository->getById($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * @param $id
     * @param Request $request
     * @return JsonResponse
     */
    public function update($id, Request $request): JsonResponse
    {
        $result = $this->promoCodesRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function create(Request $request): JsonResponse
    {
        $result = $this->promoCodesRepository->create($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
