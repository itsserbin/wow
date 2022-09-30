<?php

namespace App\Repositories;

use App\Models\SocialReview as Model;

class SocialReviewsRepository extends CoreRepository
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
                'published',
                'social_network',
                'image',
                'created_at',
            )
            ->orderBy($sort, $param)
            ->paginate($perPage);
    }

    public function create(array $data)
    {
        $model = new $this->model;
        $model->published = $data['published'];
        $model->social_network = $data['social_network'];
        $model->image = $data['image'];
        $model->save();

        return $model;
    }

    public function update(int $id, array $data)
    {
        $model = $this->getById($id);
        $model->published = $data['published'];
        $model->social_network = $data['social_network'];
        $model->image = $data['image'];
        return $model->update();
    }

    public function destroy($id)
    {
        return $this->model::destroy($id);
    }

    public function getSocialsReviewsList()
    {
        return $this->model::all();
    }
}
