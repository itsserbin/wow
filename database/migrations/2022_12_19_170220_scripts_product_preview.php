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

        foreach (\App\Models\Product::select('id', 'preview')->get() as $product) {
//            array_push($previews, $product->id = $product->preview);
            array_push($previews, ['id' => $product->id, 'preview' => $product->preview]);
        }

        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('preview');
        });

        Schema::table('products', function (Blueprint $table) {
            $table->foreignId('preview')
                ->nullable()
                ->constrained('images')
                ->references('id')
                ->onDelete('set null');
        });

        foreach ($previews as $item) {
            if ($item['preview']) {
                $extension = (new SplFileInfo($item['preview']))->getExtension();

                $model = \App\Models\Product::where('id', $item['id'])->first();
                if ($extension == 'webp') {
                    $image = \App\Models\Image::where('webp_src', $item['preview'])->first();
                } elseif ($extension == 'jpeg') {
                    $image = \App\Models\Image::where('src', $item['preview'])->first();
                } else {
                    $name = preg_replace('"\.(jpg|png|jpeg|webp)$"', '.jpeg', $item['preview']);
                    $image = \App\Models\Image::where('src', $name)->first();
                }

                if (!$image) {
                    $file = file_get_contents(route('images', $item['preview']));
                    $newImageModel = $this->uploadImageS3(
                        $item['preview'],
                        preg_replace('"\.(jpg|jpeg|png|webp)$"', '.webp', basename(route('images', $item['preview']))),
                        $file
                    );

                    $model->preview = $newImageModel->id;
                } else {
                    $model->preview = $image->id;
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
