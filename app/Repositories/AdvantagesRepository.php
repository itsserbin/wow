<?php

namespace App\Repositories;

use App\Models\Advantage as Model;

class AdvantagesRepository extends CoreRepository
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
                'icon',
                'text',
                'published',
            )
            ->orderBy('id', 'desc')
            ->paginate(15);
    }

    public function create(array $data)
    {
        $model = new $this->model;
        $model->icon = $data['icon'];
        $model->text = $data['text'];
        $model->published = $data['published'];

        return $model->save();
    }

    public function update(int $id, array $data)
    {
        $model = $this->getById($id);
        $model->icon = $data['icon'];
        $model->text = $data['text'];
        $model->published = $data['published'];

        return $model->update();
    }

    public function destroy($id)
    {
        return $this->model::destroy($id);
    }

    final public function getAllToPublic(): array
    {
        $cacheKey = 'all_advantages_for_public';
        $cacheTTL = now()->addMinutes(60);

        return \Cache::remember($cacheKey, $cacheTTL, function () {
            $columns = [
                'id',
                'icon',
                'text'
            ];

            return $this->model::select($columns)
                ->where('published', 1)
                ->orderBy('id', 'desc')
                ->get()
                ->toArray();
        });
    }

}
