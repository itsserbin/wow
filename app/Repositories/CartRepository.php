<?php

namespace App\Repositories;

use App\Models\Cart as Model;
use Illuminate\Support\Facades\Cache;

class CartRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    final public function find(string $uuid = null): \Illuminate\Database\Eloquent\Model|bool|null
    {
        if (!$uuid) {
            return false;
        }
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
