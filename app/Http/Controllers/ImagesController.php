<?php

namespace App\Http\Controllers;

use App\Models\Enums\ImagesPath;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Throwable;

class ImagesController extends Controller
{
    final public function mobileBanner(string $filename)
    {
        return Storage::disk('s3')->response(ImagesPath::MOBILE_BANNER . $filename);
//        return $this->returnImage(ImagesPath::MOBILE_BANNER, $filename);
    }

    final public function tableBanner(string $filename)
    {
        return Storage::disk('s3')->response(ImagesPath::TABLE_BANNER . $filename);

//        return $this->returnImage(ImagesPath::TABLE_BANNER, $filename);
    }

    final public function desktopBanner(string $filename)
    {
        return Storage::disk('s3')->response(ImagesPath::DESKTOP_BANNER . $filename);

//        return $this->returnImage(ImagesPath::DESKTOP_BANNER, $filename);
    }

    public function products($filename)
    {
        return $this->returnImage(ImagesPath::PRODUCT_IMAGE, $filename);
    }

    public function products55($filename)
    {
        return $this->returnImage(ImagesPath::PRODUCT_IMAGE_55, $filename);
    }

    public function products350($filename)
    {
        return $this->returnImage(ImagesPath::PRODUCT_IMAGE_350, $filename);
    }

    public function products500($filename)
    {
        return $this->returnImage(ImagesPath::PRODUCT_IMAGE_500, $filename);
    }

    public function category($filename)
    {
        return $this->returnImage(ImagesPath::CATEGORY, $filename);
    }

    public function returnImage($path, $filename)
    {
//        if (env('APP_ENV') !== 'local') {
            try {
                return Storage::disk('s3')->response($path . $filename);
            } catch (Throwable $e) {
                abort(404);
            }
//        } else {
//            return Image::make('images/no-image.jpg')->response();
//        }
    }
}
