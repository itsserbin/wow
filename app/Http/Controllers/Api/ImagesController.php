<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\ImagesRepository;
use App\Services\UploadImagesService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ImagesController extends BaseController
{
    private mixed $uploadImagesService;
    private mixed $imagesRepository;

    public function __construct()
    {
        parent::__construct();
        $this->uploadImagesService = app(UploadImagesService::class);
        $this->imagesRepository = app(ImagesRepository::class);
    }

    public function index(): JsonResponse
    {
        $result = $this->imagesRepository->getAllWithPaginate();

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function upload(Request $request): JsonResponse
    {
        $result = $this->uploadImagesService->uploadImages($request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function update($id, Request $request): JsonResponse
    {
        $result = $this->imagesRepository->update($id, $request->all());

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $result = $this->imagesRepository->destroy($id);

        return $this->returnResponse([
            'success' => true,
            'result' => $result,
        ]);
    }
}
