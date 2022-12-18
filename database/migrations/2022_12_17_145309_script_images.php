<?php

use App\Models\Enums\ImagesPath;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $items = \App\Models\Image::orderBy('id', 'desc')->get();
        foreach ($items as $item) {
            $file = file_get_contents(route('images', $item->src));
            $extension = pathinfo(parse_url(route('images', $item->src), PHP_URL_PATH), PATHINFO_EXTENSION);
            if ($extension !== 'webp') {
                if ($extension !== 'jpeg') {
                    $name = preg_replace('"\.(jpg|jpeg|png|webp)$"', '.jpeg', basename(route('images', $item->src)));
                } else {
                    $name = basename(route('images', $item->src));
                }
                $filename_webp = preg_replace('"\.(jpg|jpeg|png|webp)$"', '.webp', $name);
            } else {
                $filename_webp = basename(route('images', $item->src));
                $name = preg_replace('"\.(jpg|png|webp)$"', '.jpeg', $filename_webp);
            }

            Storage::disk('s3')->put('products1/' . $name, Image::make($file)
                ->encode('jpeg', 100)
                ->stream()
            );
            Storage::disk('s3')->put('products1/' . $filename_webp, Image::make($file)
                ->encode('webp', 100)
                ->stream()
            );

            Storage::disk('s3')->put('products1/55/' . $name, Image::make($file)
                ->resize(55, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->encode('jpeg', 100)
                ->stream()
            );
            Storage::disk('s3')->put('products1/55/' . $filename_webp, Image::make($file)
                ->resize(55, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->encode('webp', 100)
                ->stream()
            );

            Storage::disk('s3')->put('products1/350/' . $name, Image::make($file)
                ->resize(350, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->encode('jpeg', 100)
                ->stream()
            );
            Storage::disk('s3')->put('products1/350/' . $filename_webp, Image::make($file)
                ->resize(350, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->encode('webp', 100)
                ->stream()
            );

            Storage::disk('s3')->put('products1/500/' . $name, Image::make($file)
                ->resize(350, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->encode('jpeg', 100)
                ->stream()
            );
            Storage::disk('s3')->put('products1/500/' . $filename_webp, Image::make($file)
                ->resize(350, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->encode('webp', 100)
                ->stream()
            );

//            $item->webp_src = $filename_webp;
//            $item->src = $name;
//            $item->update();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
