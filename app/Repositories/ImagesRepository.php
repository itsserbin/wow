<?php

namespace App\Repositories;

use App\Models\Image as Model;
use Illuminate\Support\Facades\File;
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
        $model->save();

        return $model;
    }

    public function update(string $id, array $data)
    {
        $model = $this->getById($id);
        $model->src = $data['src'];
        $model->alt = $data['alt'];
        $model->update();

        return $model;
    }

    public function destroy($id)
    {
        $model = $this->getById($id);
        if (File::exists(public_path($model->src))) {
            File::delete(public_path($model->src));
        }
        return $this->model::destroy($id);
    }
}
