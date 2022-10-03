<?php

namespace App\Repositories;

use App\Models\Role as Model;

class RolesRepository extends CoreRepository
{
    /**
     * @return string
     */
    protected function getModelClass()
    {
        return Model::class;
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getById($id)
    {
        return $this->model::where('id', $id)->with('permissions')->first();
    }

    /**
     * @param string $sort
     * @param string $param
     * @param int $perPage
     * @return mixed
     */
    public function getAllWithPaginate(string $sort = 'id', string $param = 'desc', int $perPage = 15)
    {
        return $this
            ->model::select(
                'id',
                'name',
                'slug',
            )
            ->orderBy($sort, $param)
            ->paginate($perPage);
    }

    /**
     * @return mixed
     */
    public function getAll()
    {
        return $this
            ->model::select(
                'id',
                'name',
                'slug',
            )->get();
    }

    public function create($data)
    {
        $model = new $this->model;
        $model->name = $data['name'];
        $model->slug = $data['slug'];
        $model->save();

        $permissions = [];
        foreach ($data['permissions'] as $permission) {
            $permissions[] += $permission['id'];
        }
        return $model->permissions()->sync($permissions);
    }

    public function update($id, $data)
    {
        $model = $this->getById($id);
        $model->name = $data['name'];
        $model->slug = $data['slug'];
        $model->update();

        $permissions = [];
        foreach ($data['permissions'] as $permission) {
            $permissions[] += $permission['id'];
        }
        return $model->permissions()->sync($permissions);
    }

    public function destroy($id)
    {
        return $this->model::destroy($id);
    }

}
