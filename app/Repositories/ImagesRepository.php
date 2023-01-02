<?php

namespace App\Repositories;

use App\Models\Enums\ImagesPath;
use App\Models\Image as Model;
use Illuminate\Support\Facades\Storage;

class ImagesRepository extends CoreRepository
{
    public function __construct()
    {
        parent::__construct();
    }

    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::where('id', $id)->first();
    }

    public function getAllWithPaginate(string $sort = 'id', string $param = 'desc', int $perPage = 18)
    {
        $columns = [
            'id',
            'alt',
            'src',
            'webp_src',
        ];

        return $this
            ->model
            ->select($columns)
            ->orderBy($sort, $param)
            ->paginate($perPage);
    }

    public function create(array $data)
    {
        $model = new $this->model;
        $model->src = $data['src'];
        $model->alt = $data['alt'];
        $model->webp_src = $data['webp_src'];
        $model->save();

        return $model;
    }

    public function update(string $id, array $data)
    {
        $model = $this->getById($id);
        $model->alt = $data['alt'];
        $model->update();

        return $model;
    }

    public function destroy($id)
    {
        $model = $this->getById($id);

        Storage::disk('s3')->delete(ImagesPath::PRODUCT_IMAGE . $model->webp_src);
        Storage::disk('s3')->delete(ImagesPath::PRODUCT_IMAGE . $model->src);

        Storage::disk('s3')->delete(ImagesPath::PRODUCT_IMAGE_55 . $model->webp_src);
        Storage::disk('s3')->delete(ImagesPath::PRODUCT_IMAGE_55 . $model->src);

        Storage::disk('s3')->delete(ImagesPath::PRODUCT_IMAGE_500 . $model->webp_src);
        Storage::disk('s3')->delete(ImagesPath::PRODUCT_IMAGE_500 . $model->src);

        Storage::disk('s3')->delete(ImagesPath::PRODUCT_IMAGE_350 . $model->webp_src);
        Storage::disk('s3')->delete(ImagesPath::PRODUCT_IMAGE_350 . $model->src);

        return $this->model::destroy($id);
    }
}
