<?php

namespace App\Repositories;

use App\Models\Characteristic as Model;
use App\Models\Enums\MassActions;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;

class CharacteristicsRepository extends CoreRepository
{
    private mixed $characteristicValuesRepository;

    public function __construct()
    {
        parent::__construct();
        $this->characteristicValuesRepository = app(CharacteristicValuesRepository::class);
    }

    protected function getModelClass()
    {
        return Model::class;
    }

    public function list(): Collection|array
    {
        return $this->model::with('values')->orderBy('id', 'desc')->get();
    }

    public function getById($id)
    {
        return $this->model::where('id', $id)->with('values')->first();
    }

    public function getAllWithPaginate(string $sort = 'id', string $param = 'desc', int $perPage = 15)
    {
        return $this
            ->model
            ->select(
                'id',
                'title',
                'created_at',
                'updated_at',
            )
            ->orderBy($sort, $param)
            ->paginate($perPage);
    }

    public function create(array $data)
    {
        $model = new $this->model;
        $model->title = $data['title'];
        $model->save();

        $this->createCharacteristicValues($model->id, $data['values']);

        return $model->save();
    }

    public function update(int $id, array $data)
    {
        $model = $this->getById($id);
        $this->characteristicValuesRepository->destroy($model->id);
        $this->createCharacteristicValues($model->id, $data['values']);
        $model->update();
    }

    public function createCharacteristicValues($id, $data): bool
    {
        foreach ($data as $item) {
            $this->characteristicValuesRepository->create($id, $item);
        }
        return true;
    }

    public function destroy(int $id)
    {
        return $this->model::destroy($id);
    }

}
