<?php

namespace App\Repositories;

use App\Models\Color as Model;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Cache;
use JetBrains\PhpStorm\ArrayShape;

class ColorsRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model->find($id);
    }

    public function list()
    {
        return $this->model->orderBy('created_at', 'desc')->get();
    }

    public function getAllWithPaginate(string $sort = 'id', string $param = 'desc', int $perPage = 15): LengthAwarePaginator
    {
        $columns = [
            'id',
            'name',
            'hex',
        ];

        return $this
            ->model
            ->select($columns)
            ->orderBy($sort, $param)
            ->paginate($perPage);
    }

    public function create($data)
    {
        $model = new $this->model;
        $model->name = $data['name'];
        $model->hex = $data['hex'];
        return $model->save();
    }

    public function update($id, $data)
    {
        $model = $this->getById($id);
        $model->name = $data['name'];
        $model->hex = $data['hex'];
        return $model->update();
    }

    public function destroy($id)
    {
        return $this->model::destroy($id);
    }

//    final public function getListForPublic(string $slug)
//    {
//        return $this->model::whereHas('products', function ($q) use ($slug) {
//            $q->whereHas('categories', function ($q) use ($slug) {
//                $q->where('slug', $slug);
//            });
//        })->get();
//    }
    #[ArrayShape(['id' => "int", 'title' => "string"])]
    final public function getListForPublic(string $slug): array
    {
        $cacheKey = 'getColorsListForPublicBySlug_' . $slug;
        $cacheTime = 60 * 60 * 24; // 24 години
        $cached = Cache::remember($cacheKey, $cacheTime, function () use ($slug) {
            return $this->model::whereHas('products', function ($q) use ($slug) {
                $q->whereHas('categories', function ($q) use ($slug) {
                    $q->where('slug', $slug);
                });
            })->get();
        });

        return $cached->map(function ($item) {
            return [
                'id' => $item->id,
                'hex' => $item->hex,
                'title' => $item->title,
            ];
        })->toArray();
    }

}
