<?php

namespace App\Http\Controllers\Api;

use App\Repositories\BannersRepository;
use App\Services\UploadImagesService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BannersController extends BaseController
{
    private mixed $bannersRepository;
    private mixed $uploadImagesService;

    public function __construct()
    {
        parent::__construct();
        $this->bannersRepository = app(BannersRepository::class);
        $this->uploadImagesService = app(UploadImagesService::class);
    }

    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->bannersRepository->getAllWithPaginate(),
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function create(Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->bannersRepository->create($request->all()),
        ]);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function edit($id): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->bannersRepository->getById($id),
        ]);
    }

    /**
     * @param $id
     * @param Request $request
     * @return JsonResponse
     */
    public function update($id, Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->bannersRepository->update($id, $request->all()),
        ]);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->bannersRepository->destroy($id),
        ]);
    }

    public function upload(Request $request): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->uploadImagesService->uploadBanners($request->all()),
        ]);
    }


    public function all(): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->bannersRepository->getForPublic(),
        ]);
    }

    public function category($id): JsonResponse
    {
        return $this->returnResponse([
            'success' => true,
            'result' => $this->bannersRepository->getForPublicByCategory($id),
        ]);
    }
}
