<?php

namespace App\Repositories\Statistics;

use App\Models\Statistics\CostCategory as Model;
use App\Repositories\CoreRepository;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

class CostCategoriesRepository extends CoreRepository
{
    public function __construct()
    {
        parent::__construct();
    }

    final public function getModelClass(): string
    {
        return Model::class;
    }

    final public function getById(int $id): ?\Illuminate\Database\Eloquent\Model
    {
        return $this->model::find($id);
    }

    final public function getBySlug(string $slug): ?\Illuminate\Database\Eloquent\Model
    {
        return $this->model::where('slug', $slug)->first();
    }

    final public function getByCode(string $code): ?\Illuminate\Database\Eloquent\Model
    {
        return $this->model::where('code', $code)->first();
    }

    final public function getAllWithPaginate(string $sort = 'id', string $param = 'desc', int $perPage = 15): LengthAwarePaginator
    {
        return $this->model::orderBy($sort, $param)->paginate($perPage);
    }

    final public function create(array $data): \Illuminate\Database\Eloquent\Model
    {
        $model = new $this->model;
        $model->title = $data['title'];
        $model->type = $data['type'];
        $model->slug = $data['slug'];
        $model->save();

        return $model;
    }

    final public function update(int $id, array $data): \Illuminate\Database\Eloquent\Model
    {
        $model = $this->getById($id);

        if ($model) {
            $model->title = $data['title'];
            $model->type = $data['type'];
            $model->slug = $data['slug'];
            $model->update();
        } else {
            $model = $this->create($data);
        }

        return $model;

    }

    final public function destroy(int $id): ?int
    {
        return $this->model::destroy($id);
    }

    final public function list(): Collection
    {
        return $this->model::select(['id', 'title', 'slug', 'type'])->orderBy('id', 'desc')->get();
    }
}
