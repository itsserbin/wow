<?php

namespace App\Services;

use App\Models\Enums\ImagesPath;
use App\Repositories\ImagesRepository;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class UploadImagesService
{

    private mixed $imagesRepository;

    public function __construct()
    {
        $this->imagesRepository = app(ImagesRepository::class);
    }

    public function uploadImages($data)
    {
        $image = $data['image'];
        $path = ImagesPath::PRODUCT_IMAGE;

        $filename = $image->getClientOriginalName();
        $filename = $this->createFilename($path . $filename, $filename);

        Storage::disk('s3')->put(ImagesPath::PRODUCT_IMAGE . $filename, Image::make($image)->stream());

        Storage::disk('s3')->put(ImagesPath::PRODUCT_IMAGE_55 . $filename, Image::make($image)
            ->resize(55, null, function ($constraint) {
                $constraint->aspectRatio();
            })->stream()
        );

        Storage::disk('s3')->put(ImagesPath::PRODUCT_IMAGE_350 . $filename, Image::make($image)
            ->resize(350, null, function ($constraint) {
                $constraint->aspectRatio();
            })->stream()
        );

        Storage::disk('s3')->put(ImagesPath::PRODUCT_IMAGE_500 . $filename, Image::make($image)
            ->resize(500, null, function ($constraint) {
                $constraint->aspectRatio();
            })->stream()
        );

        $this->imagesRepository->create([
            'src' => $filename,
            'alt' => null
        ]);

        return $filename;
    }

    public function uploadBanners($data)
    {
        $root = $_SERVER["DOCUMENT_ROOT"];
        $image = $data['banner'];

        if ($data['type'] == 'mobile') {
            $path = ImagesPath::MOBILE_BANNER;
        } elseif ($data['type'] == 'table') {
            $path = ImagesPath::TABLE_BANNER;
        } else {
            $path = ImagesPath::DESKTOP_BANNER;
        }

        $dir = $root . $path;
        if (!file_exists($dir)) {
            mkdir($dir, 0755, true);
        }

        $filename = $image->getClientOriginalName();
        $filename = $this->createFilename($path . $filename, $filename);

        Storage::disk('s3')->put($path . $filename, Image::make($image)->stream());

        return $filename;
    }

    public function createFilename($path, $filename)
    {
        if (Storage::disk('s3')->exists($path)) {
            $type = array_slice(explode('.', $filename), -1)[0];
            $url = explode('.', $filename);
            array_pop($url);
            $originalName = implode('.', $url);
            $filename = $originalName . '_' . preg_replace('/[^0-9]/', '', Carbon::now()->format('dmYH:i')) . '.' . $type;
        }
        return $filename;
    }
}
