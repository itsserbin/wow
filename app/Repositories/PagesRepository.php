<?php

namespace App\Repositories;

use App\Models\Page as Model;
use Illuminate\Support\Facades\Cache;

class PagesRepository extends CoreRepository
{

    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::where('id', $id)->first();
    }

    public function getAllWithPaginate()
    {
        return $this
            ->model::select(
                'id',
                'slug',
                'heading',
                'h1',
                'published',
                'created_at',
                'updated_at',
            )
            ->orderBy('id', 'desc')
            ->paginate(15);
    }

    public function create(array $data)
    {
        $model = new $this->model;
        $model->slug = $data['slug'];
        $model->published = $data['published'];
        $model->heading = $data['heading'];
        $model->h1 = $data['h1'];
        $model->content = $data['content'];
        $model->meta_title = $data['meta_title'];
        $model->meta_description = $data['meta_description'];

        return $model->save();
    }

    public function update(int $id, array $data)
    {
        $model = $this->getById($id);
        $model->slug = $data['slug'];
        $model->published = $data['published'];
        $model->heading = $data['heading'];
        $model->h1 = $data['h1'];
        $model->content = $data['content'];
        $model->meta_title = $data['meta_title'];
        $model->meta_description = $data['meta_description'];

        return $model->update();
    }

    public function destroy($id)
    {
        return $this->model::destroy($id);
    }

    public function getBySlug($slug)
    {
        return $this->model::where([
            ['published', 1],
            ['slug', $slug]
        ])->select(
            'slug',
            'heading',
            'h1',
            'meta_title',
            'meta_description',
            'content',
        )->first();
    }

//    final public function getPagesListToPublic()
//    {
//        return $this->model::where('published', 1)
//            ->select(
//                'id',
//                'slug',
//                'heading',
//            )->get();
//    }

    final public function getPagesListToPublic(): array
    {
        $cacheKey = 'pages_list_public';
        $cachedPagesList = Cache::get($cacheKey);

        if ($cachedPagesList) {
            return $cachedPagesList;
        }

        $pagesList = $this->model::where('published', 1)
            ->select(
                'id',
                'slug',
                'heading',
            )
            ->get()
            ->toArray();

        Cache::put($cacheKey, $pagesList, now()->addHours(12));

        return $pagesList;
    }

}
