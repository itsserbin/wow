<?php

namespace App\Repositories\Statistics;

use App\Models\Statistics\CostCategory as Model;
use App\Repositories\CoreRepository;
use Illuminate\Support\Facades\Auth;

class CostCategoriesRepository extends CoreRepository
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
        return $this->model::find($id);
    }

    public function getBySlug($slug)
    {
        return $this->model::where('slug', $slug)->first();
    }

    public function getAllWithPaginate(string $sort = 'id', string $param = 'desc', int $perPage = 15)
    {
        return $this
            ->model::select(
                'id',
                'title',
                'slug',
                'created_at',
                'updated_at',
            )
            ->orderBy($sort, $param)
            ->paginate($perPage);
    }

    public function create($data)
    {
        $model = new $this->model;
        $model->title = $data['title'];
        $model->slug = $data['slug'];
        return $model->save();
    }

    public function update($id, $data)
    {
        $model = $this->getById($id);
        $model->title = $data['title'];
        $model->slug = $data['slug'];

        return $model->update();
    }

    public function destroy(int $id)
    {
        return $this->model::destroy($id);
    }

    public function list()
    {
        return $this->model::select('id', 'title', 'slug')->orderBy('id', 'desc')->get();
    }
}
