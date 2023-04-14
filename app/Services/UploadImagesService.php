<?php

namespace App\Services;

use App\Models\Enums\ImagesPath;
use App\Repositories\ImagesRepository;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use App\Repositories\OptionsRepository;

class UploadImagesService
{

    private mixed $imagesRepository;
    protected $optionsRepository;

    public function __construct()
    {
        $this->imagesRepository = app(ImagesRepository::class);
        $this->optionsRepository = app(OptionsRepository::class);
    }

    public function uploadImages($data)
    {
        $image = $data['image'];
        $path = ImagesPath::PRODUCT_IMAGE;

        $filename = $image->getClientOriginalName();
        $extension = $image->getClientOriginalExtension();

        if ($extension !== 'webp') {
            $filename = preg_replace('"\.(jpg|jpeg|png|webp|svg)$"', '.jpeg', $this->createFilename($path . $filename, $filename));
            $filename_webp = preg_replace('"\.(jpg|jpeg|png|webp|svg)$"', '.webp', $filename);
        } else {
            $filename_webp = $this->createFilename($path . $filename, $filename);
            $filename = preg_replace('"\.(jpg|jpeg|png|webp|svg)$"', '.jpeg', $filename);
        }

        $filename = urldecode($filename);
        $filename_webp = urldecode($filename_webp);

        Storage::disk('s3')->put(ImagesPath::PRODUCT_IMAGE . $filename, Image::make($image)
            ->encode('jpeg', 100)
            ->stream());

        Storage::disk('s3')->put(ImagesPath::PRODUCT_IMAGE . $filename_webp, Image::make($image)
            ->encode('webp', 100)
            ->stream());

        Storage::disk('s3')->put(
            ImagesPath::PRODUCT_IMAGE_55 . $filename,
            Image::make($image)
                ->resize(55, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->encode('jpeg', 100)
                ->stream()
        );
        Storage::disk('s3')->put(
            ImagesPath::PRODUCT_IMAGE_55 . $filename_webp,
            Image::make($image)
                ->resize(55, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->encode('webp', 100)
                ->stream()
        );

        Storage::disk('s3')->put(
            ImagesPath::PRODUCT_IMAGE_350 . $filename,
            Image::make($image)
                ->resize(350, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->encode('jpeg', 100)
                ->stream()
        );
        Storage::disk('s3')->put(
            ImagesPath::PRODUCT_IMAGE_350 . $filename_webp,
            Image::make($image)
                ->resize(350, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->encode('webp', 100)
                ->stream()
        );

        Storage::disk('s3')->put(
            ImagesPath::PRODUCT_IMAGE_500 . $filename,
            Image::make($image)
                ->resize(500, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->encode('jpeg', 100)
                ->stream()
        );
        Storage::disk('s3')->put(
            ImagesPath::PRODUCT_IMAGE_500 . $filename_webp,
            Image::make($image)
                ->resize(500, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->encode('webp', 100)
                ->stream()
        );

        $this->imagesRepository->create([
            'src' => $filename,
            'webp_src' => $filename_webp,
            'alt' => null
        ]);

        return $filename;
    }

    final public function uploadBanners(array $data): string
    {
        $image = $data['banner'];

        if ($data['type'] === 'mobile') {
            $path = ImagesPath::MOBILE_BANNER;
        } elseif ($data['type'] === 'table') {
            $path = ImagesPath::TABLE_BANNER;
        } else {
            $path = ImagesPath::DESKTOP_BANNER;
        }

        $filenameOrigin = $image->getClientOriginalName();
        $filename = preg_replace('"\.(jpg|jpeg|png|webp)$"', '.jpeg', $this->createFilename($path . $filenameOrigin, $filenameOrigin));
        $filename_webp = preg_replace('"\.(jpg|jpeg|png|webp)$"', '.webp', $filenameOrigin);

        Storage::disk('s3')->put(
            $path . $filename,
            $this->makeImage($image, false, null, 'jpeg', 100, true)
        );
        Storage::disk('s3')->put(
            $path . $filename_webp,
            $this->makeImage($image, false, null, 'webp', 100, true)
        );

        $basename = basename($filename);
        return pathinfo($basename, PATHINFO_FILENAME);
    }

    final public function uploadLogo(array $data): string|bool
    {

        $image = $data['logo'];
        $filename = 'logo';

        if (
            Storage::disk('public')->put($filename . '.jpeg', $this->makeImage($image, true, 75))
            &&
            Storage::disk('public')->put($filename . '.webp', $this->makeImage($image, true, 75, 'webp'))
        ) {
            $this->optionsRepository->update('logo', $filename);
            return $filename;
        }

        return false;
    }

    final public function makeImage(
        $image,
        bool $resize = false,
        int $width = null,
        string $encode = 'jpeg',
        int $quality = 100,
        bool $stream = false
    )
    {
        $image = Image::make($image);

        if ($resize) {
            $image->resize($width, null, function ($constraint) {
                $constraint->aspectRatio();
            });
        }

        $image->encode($encode, $quality);

        if ($stream) {
            $image->stream();
        }

        return $image;
    }

    public function deleteLogo()
    {
        $filename = 'logo.jpeg';
        if (Storage::disk('public')->delete($filename)) {
            $this->optionsRepository->update('logo', NULL);
        }
    }

    final public function createFilename(string $path, string $filename): string
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
