<?php

namespace App\Repositories;

use App\Models\Cart as Model;

class CartRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function find($uuid)
    {
        return $this->model::where('hash', $uuid)->first();
    }

    public function create($uuid)
    {
        $cart = new $this->model;
        $cart->hash = $uuid;

        $cart->save();

        return $cart;
    }

    public function update($data, $uuid)
    {
        //
    }

    public function destroy($uuid)
    {
        return $this->model::where('hash', $uuid)->delete();
    }

    public function addPromoCode($cart_id, $code)
    {
        $model = $this->model::where('id', $cart_id)->first();
        $model->promo_code = $code;
        $model->save();

        return true;
    }

    public function deactivatePromoCode($cart_id)
    {
        $model = $this->model::where('id', $cart_id)->first();
        $model->promo_code = null;
        return $model->update();
    }
}
