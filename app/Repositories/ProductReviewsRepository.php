<?php

namespace App\Repositories;

use App\Models\ProductReview as Model;

class ProductReviewsRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id)
    {
        return $this->model::where('id', $id)->with('product')->first();
    }

    public function carouselList($limit = 10)
    {
        return $this->model->where('published', 1)->orderBy('created_at', 'DESC')->limit($limit)->get();
    }

    public function paginateList($perPage = 15)
    {
        return $this->model
            ->where('published', 1)
            ->orderBy('created_at', 'DESC')
            ->with(['products' => function ($q) {
                $q->select('id', 'h1');
            }])
            ->paginate($perPage);
    }

    public function getAllWithPaginate(string $sort = 'id', string $param = 'desc', int $perPage = 15)
    {
        return $this
            ->model
            ->select(
                'id',
                'name',
                'phone',
                'comment',
                'product_id',
                'created_at',
                'published'
            )
            ->with('product')
            ->orderBy($sort, $param)
            ->paginate($perPage);
    }

    public function create($data)
    {
        $model = new $this->model;
        $model->published = $data['published'];
        $model->name = $data['name'];
        $model->phone = $data['phone'];
        $model->comment = $data['comment'];

        if (array_key_exists('product_id', $data)) {
            $model->product_id = $data['product_id'];
        } else {
            $model->product_id = $data['product']['id'];
        }
        return $model->save();
    }

    public function update(int $id, array $data)
    {
        $model = $this->getById($id);
        $model->name = $data['name'];
        $model->phone = $data['phone'];
        $model->comment = $data['comment'];
        $model->published = $data['published'];

        $model->product_id = $data['product']['id'];

        return $model->update();
    }

    public function destroy(int $id)
    {
        return $this->model::destroy($id);
    }

    public function accept($id)
    {
        $model = $this->getById($id);
        $model->published = 1;
        return $model->update();
    }

    public function getProductReviews($id)
    {
        return $this->model::whereHas('products', function ($q) use ($id) {
            $q->where('id', $id);
        })->where('published', 1)->select('id', 'name', 'comment')->get();
    }
}
