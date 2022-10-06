<?php

namespace App\Services;

use App\Repositories\ImagesRepository;
use Carbon\Carbon;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

/**
 * Class UploadImagesService
 * @package App\Services
 */
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

        $root = $_SERVER["DOCUMENT_ROOT"];

        $path = '/storage/images/';

        $filename = $image->getClientOriginalName();
        $filename = $this->createFilename($path . $filename, $filename);

        $dir = $root . $path;

        if (!file_exists($dir)) {
            mkdir($dir, 0755, true);
        }

        Image::make($image)->save(public_path($path . $filename));


        $dir1 = $root . $path . '55/';
        $path1 = $path . '55/';

        if (!file_exists($dir1)) {
            mkdir($dir1, 0755, true);
        }

        Image::make($image)->resize(55, null, function ($constraint) {
            $constraint->aspectRatio();
        })->save(public_path($path1 . $filename));

        $dir2 = $root . $path . '350/';
        $path2 = $path . '350/';

        if (!file_exists($dir2)) {
            mkdir($dir2, 0755, true);
        }

        Image::make($image)->resize(350, null, function ($constraint) {
            $constraint->aspectRatio();
        })->save(public_path($path2 . $filename));

        $dir3 = $root . $path . '/500/';
        $path3 = $path . '500/';

        if (!file_exists($dir3)) {
            mkdir($dir3, 0755, true);
        }

        Image::make($image)->resize(500, null, function ($constraint) {
            $constraint->aspectRatio();
        })->save(public_path($path3 . $filename));

        $this->imagesRepository->create([
            'src' => $filename,
            'alt' => null
        ]);

        return $filename;
    }

    public function createFilename($path, $filename)
    {
        if (File::exists(public_path($path))) {
            $type = array_slice(explode('.', $filename), -1)[0];
            $url = explode('.', $filename);
            array_pop($url);
            $originalName = implode('.', $url);
            $filename = $originalName . '_' . preg_replace('/\pP/iu', '', Carbon::now()->format('dmYH:i')) . '.' . $type;
        }
        return $filename;
    }
}
