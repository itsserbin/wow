<?php

namespace App\Repositories;

use App\Models\Size as Model;
use Illuminate\Support\Facades\Cache;
use JetBrains\PhpStorm\ArrayShape;

class SizesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::where('id', $id)->first();
    }

    public function getAllWithPaginate(string $sort = 'id', string $param = 'desc', int $perPage = 15)
    {
        return $this
            ->model::select(
                'id',
                'title',
                'published',
            )
            ->orderBy($sort, $param)
            ->paginate($perPage);
    }

    public function list()
    {
        return $this->model::select(
            'id',
            'title',
        )->get();
    }

    public function create($data)
    {
        $model = new $this->model;
        $model->published = $data['published'];
        $model->title = $data['title'];
        return $model->save();
    }

    public function update($id, $data)
    {
        $model = $this->getById($id);
        $model->published = $data['published'];
        $model->title = $data['title'];
        return $model->update();
    }

//    final public function getListForPublic(string $slug)
//    {
//        return $this->model::whereHas('products', function ($q) use ($slug) {
//            $q->whereHas('categories', function ($q) use ($slug) {
//                $q->where('slug', $slug);
//            });
//        })->get();
//    }

    #[ArrayShape(['id' => "int", 'title' => "string"])] final public function getListForPublic(string $slug): array
    {
        $cacheKey = 'sizesListBySlug_' . $slug;
        $cacheTtl = 60 * 60 * 24; // TTL - 24 години

        return Cache::remember($cacheKey, $cacheTtl, function () use ($slug) {
            return $this->model::select(['id', 'title'])
                ->whereHas('products', function ($q) use ($slug) {
                    $q->whereHas('categories', function ($q) use ($slug) {
                        $q->where('slug', $slug);
                    });
                })
                ->get()
                ->toArray();
        });
    }
}
