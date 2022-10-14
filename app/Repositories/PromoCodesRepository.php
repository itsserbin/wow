<?php

namespace App\Repositories;

use App\Models\PromoCode as Model;
use Illuminate\Pagination\LengthAwarePaginator;

class PromoCodesRepository extends CoreRepository
{


    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return string
     */
    protected function getModelClass()
    {
        return Model::class;
    }

    /**
     * @param int @id
     *
     * @return Model
     */
    public function getById($id)
    {
        return $this->model::find($id);
    }

    /**
     * @param string $sort
     * @param string $param
     * @param int $perPage
     *
     * @return LengthAwarePaginator
     */
    public function getAllWithPaginate(): LengthAwarePaginator
    {
        $columns = [
            'id',
            'code',
            'percent_discount',
            'discount_in_hryvnia',
            'end_date',
            'published',
            'created_at',
            'updated_at',
        ];

        return $this
            ->model::select($columns)
            ->orderBy('id', 'desc')
            ->paginate(15);
    }

    /**
     * @param int $id
     * @param array $data
     * @return mixed
     */
    public function update(int $id, array $data)
    {
        $model = $this->getById($id);
        $model->code = $data['code'];
        $model->percent_discount = $data['percent_discount'];
        $model->discount_in_hryvnia = $data['discount_in_hryvnia'];
        $model->end_date = $data['end_date'];
        $model->published = $data['published'];
        $model->update();

        return $model;
    }

    public function create(array $data)
    {
        $model = new $this->model;
        $model->code = $data['code'];
        $model->percent_discount = $data['percent_discount'];
        $model->discount_in_hryvnia = $data['discount_in_hryvnia'];
        $model->end_date = $data['end_date'];
        $model->published = $data['published'];
        $model->save();

        return $model;
    }

    /**
     * @param int $id
     * @return int
     */
    public function destroy(int $id)
    {
        return $this->model::destroy($id);
    }

    public function checkPromoCode($code)
    {
        return $this->model->where('code', $code)->first();
    }

    public function getDiscount($code)
    {
        return $this->model::where('code', $code)->select('percent_discount', 'discount_in_hryvnia')->first();
    }
}
