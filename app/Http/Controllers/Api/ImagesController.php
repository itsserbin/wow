<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\ImagesRepository;
use App\Services\UploadImagesService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Image;
use Illuminate\Support\Facades\Storage;

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


    public function uploadLogo(Request $request)
    {
        $logoImage = Image::where('alt', 'Logo')->first();

        if ($logoImage) {
            Storage::delete('public/' . basename($logoImage->src));
        } else {
            $logoImage = new Image();
            $logoImage->alt = 'Logo';
        }

        $file = $request->file('logo');
        $path = $file->storeAs('public', 'logo.jpeg');
        $logoImage->src = Storage::url($path);
        $logoImage->webp_src = '';
        $logoImage->save();

        if ($logoImage->save()) {
            return response()->json(['path' => $logoImage->src, 'success' => true]);
        } else {
            return response()->json(['success' => false]);
        }
    }


    public function deleteLogo()
    {
        $logoImage = Image::where('alt', 'Logo')->first();

        if ($logoImage) {
            Storage::delete('public/' . basename($logoImage->src));
            $logoImage->delete();
        }

        return response()->json(['success' => true]);
    }
}
