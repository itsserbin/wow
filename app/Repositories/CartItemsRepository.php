<?php

namespace App\Repositories;

use App\Models\CartItem as Model;

class CartItemsRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function find($cart_id)
    {
        return $this->model::where('cart_id', $cart_id)->orderBy('created_at', 'asc')->get();
    }

    public function getItem($item_id, $cart_id)
    {
        return $this->model::where('cart_id', $cart_id)->where('product_id', $item_id)->first();
    }

    public function create($data, $cart_id)
    {
        $item = new $this->model;
        $item->cart_id = $cart_id;
        $item->product_id = $data['item_id'];
        $item->count = $data['count'];
        $item->size = $data['size'] ?? null;
        $item->color = $data['color'] ?? null;

        $item->save();

        return $this->model::where('id',$item->id)->with('product')->first();
    }

    public function update($data, $cart_id)
    {
        $item = $this->model::where('cart_id', $cart_id)->where('product_id', $data['item_id'])->first();

        $item->count = $data['count'];

        $item->save();

        return $this->model::where('id',$item->id)->with('product')->first();
    }

    public function destroy($cart_id, $id)
    {
        return $this->model::where('cart_id', $cart_id)->where('product_id', $id)->delete();
    }

    public function destroyCartItems($cart_id)
    {
        return $this->model::where('cart_id', $cart_id)->delete();
    }

    public function updateIncrement($cart_id, $id)
    {
        $modelCount = $this->model::where('cart_id', $cart_id)->where('product_id', $id)->select('count')->first();

        $model = $this->getItem($id, $cart_id);
        $model->count = $modelCount->count + 1;
        return $model->update();
    }

    public function updateDecrement($cart_id, $id)
    {
        $modelCount = $this->model::where('cart_id', $cart_id)->where('product_id', $id)->select('count')->first();

        if ($modelCount->count !== 1) {
            $model = $this->getItem($id, $cart_id);
            $model->count = $modelCount->count - 1;
            return $model->update();
        } else {
            return false;
        }
    }
}
