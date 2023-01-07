<?php

namespace App\Http\Controllers;

use App\Models\Enums\ImagesPath;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Throwable;

class ImagesController extends Controller
{
    public function mobileBanner($filename)
    {
        return $this->returnImage(ImagesPath::MOBILE_BANNER, $filename);
    }

    public function tableBanner($filename)
    {
        return $this->returnImage(ImagesPath::TABLE_BANNER, $filename);
    }

    public function desktopBanner($filename)
    {
        return $this->returnImage(ImagesPath::DESKTOP_BANNER, $filename);
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
        try {
            return Storage::disk('s3')->response($path . $filename);
        } catch (Throwable $e) {
            Log::error('img' . $e);
        }
    }
}
