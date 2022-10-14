<?php

namespace App\Http\Controllers\Api;

use App\Repositories\XmlsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class XmlsController extends BaseController
{
    private mixed $xmlsRepository;

    public function __construct()
    {
        parent::__construct();
        $this->xmlsRepository = app(XmlsRepository::class);
    }

    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $result = $this->xmlsRepository->getAllWithPaginate();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function create(Request $request): JsonResponse
    {
        $result = $this->xmlsRepository->create($request->all());

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
        $result = $this->xmlsRepository->getById($id);

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
        $result = $this->xmlsRepository->update($id, $request->all());

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
        $result = $this->xmlsRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
