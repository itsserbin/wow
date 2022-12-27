<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
        $previews = [];

        foreach (\App\Models\Category::select('id', 'preview')->orderBy('id', 'desc')->get() as $category) {
            array_push($previews, ['id' => $category->id, 'preview' => $category->preview]);
        }

        Schema::table('categories', function (Blueprint $table) {
            $table->foreignId('preview_id')
                ->nullable()
                ->constrained('images')
                ->references('id')
                ->onDelete('set null');
        });

        foreach ($previews as $item) {
            if ($item['preview']) {
                $extension = (new SplFileInfo($item['preview']))->getExtension();
                $model = \App\Models\Category::where('id', $item['id'])->first();
                if ($extension == 'webp') {
                    $image = \App\Models\Image::where('webp_src', urlencode($item['preview']))->first();
                } elseif ($extension == 'jpeg') {
                    $image = \App\Models\Image::where('src', urlencode($item['preview']))->first();
                } else {
                    $name = preg_replace('"\.(jpg|png|jpeg|webp)$"', '.jpeg', $item['preview']);
                    $image = \App\Models\Image::where('src', urlencode($name))->first();
                }

                if (!$image) {
                    $file = file_get_contents(route('old_images', $item['preview']));
                    $newImageModel = $this->uploadImageS3(
                        preg_replace('"\.(jpg|jpeg|png|webp)$"', '.jpeg', $item['preview']),
                        preg_replace('"\.(jpg|jpeg|png|webp)$"', '.webp', $item['preview']),
                        $file
                    );

                    $model->preview_id = $newImageModel->id;
                } else {
                    $model->preview_id = $image->id;
                }
                $model->update();
            }

        }
    }

    public function uploadImageS3($name, $filename_webp, $file)
    {
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

        $item = new \App\Models\Image();
        $item->webp_src = $filename_webp;
        $item->src = $name;
        $item->save();

        return $item;
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
