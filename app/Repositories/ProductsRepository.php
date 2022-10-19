<?php

namespace App\Repositories;

use App\Models\Enums\MassActions;
use App\Models\Enums\ProductAvailability;
use App\Models\Product as Model;
use Illuminate\Pagination\LengthAwarePaginator;

class ProductsRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getById($id): Model
    {
        return $this->model->where('id', $id)->with('colors', 'categories', 'images', 'sizes')->first();
    }

    public function getAll()
    {
        return $this
            ->model
            ->with('categories', function ($q) {
                $q->select('id');
            })
            ->select('h1', 'id', 'vendor_code')
            ->get();
    }

    /**
     * @param string $sort
     * @param string $param
     * @param int $perPage
     *
     * @return LengthAwarePaginator
     */
    public function getAllWithPaginate(string $sort = 'id', string $param = 'desc', int $perPage = 15): LengthAwarePaginator
    {
        $columns = [
            'id',
            'status',
            'published',
            'description',
            'price',
            'discount_price',
            'preview',
            'h1',
            'sort',
            'vendor_code',
            'viewed',
            'total_sales',
            'provider_id',
            'created_at',
            'updated_at',
        ];

        return $this
            ->model
            ->select($columns)
            ->with('provider')
            ->orderBy($sort, $param)
            ->paginate($perPage);
    }

    public function getProduct($id)
    {
        return $this->model::with('sizes')->find($id);
    }

    public function getItemsWithPaginateOnProduction($perPage = null)
    {
        $columns = [
            'id',
            'price',
            'published',
            'discount_price',
            'preview',
            'sort',
            'h1',
        ];

        return $this
            ->model::where('published', 1)
            ->select($columns)
            ->orderBy('sort', 'desc')
            ->paginate($perPage);
    }

    public function getWhereCategorySlugToPublic($slug, $perPage = 15)
    {
        $columns = [
            'id',
            'price',
            'published',
            'discount_price',
            'preview',
            'sort',
            'h1',
        ];

        return $this
            ->model::where('published', 1)
            ->whereHas('categories', function ($q) use ($slug) {
                $q->where('slug', $slug);
            })
            ->select($columns)
            ->orderBy('total_sales', 'desc')
            ->with('sizes')
            ->paginate($perPage);
    }

    /**
     * Увеличить кол-во покупок товара на 1.
     *
     * @param $id
     * @return mixed
     */
    public function updateProductTotalSales($id)
    {
        $model = $this->model::where('id', $id)->select('total_sales')->first();

        return $this->model::where('id', $id)->update(['total_sales' => ++$model->total_sales]);
    }

    public function updateProductViewed($id)
    {
        $model = $this->model::where('id', $id)->select('viewed')->first();

        return $this->model::where('id', $id)->update(['viewed' => ++$model->viewed]);
    }

    public function getImages($id)
    {
        return $this->model::where('id', $id)->select('id', 'preview')->with('images')->first();
    }

    public function getRelativeProducts($id, $limit = 10)
    {
        $product = $this->model::where('id', $id)->with('categories')->first();

        if (count($product->categories)) {
            return $this->model::where('id', '!=', $id)
                ->where('published', 1)
                ->select(
                    'id',
                    'h1',
                    'price',
                    'discount_price',
                    'preview'
                )
                ->whereHas('categories', function ($q) use ($product) {
                    $q->where('id', $product->categories[0]->id);
                })
                ->limit($limit)
                ->with('sizes')
                ->get();
        } else {
            return $this->model::where('id', '!=', $id)
                ->where('published', 1)
                ->select(
                    'id',
                    'h1',
                    'price',
                    'discount_price',
                    'preview'
                )
                ->limit($limit)
                ->with('sizes')
                ->get();
        }
    }


    public function search($search, $perPage = 15)
    {
        return $this->model::where('id', 'LIKE', "%$search%")
            ->orWhere('h1', 'LIKE', "%$search%")
            ->orWhere('content', 'LIKE', "%$search%")
            ->orWhere('title', 'LIKE', "%$search%")
            ->orWhere('description', 'LIKE', "%$search%")
            ->orWhere('vendor_code', 'LIKE', "%$search%")
            ->paginate($perPage);
    }

    public function updateSort(int $id, $value)
    {
        return $this->model::where('id', $id)->update(['sort' => $value ?? null]);
    }

    public function massActions($action, $data): bool
    {
        if ($action == MassActions::NOT_PUBLISHED) {
            foreach ($data as $key => $item) {
                if ($key !== MassActions::NOT_PUBLISHED) {
                    $this->model->where('id', $item)->update(['published' => 0]);
                }
            }

            return true;
        } elseif ($action == MassActions::PUBLISHED) {
            foreach ($data as $key => $item) {
                if ($key !== MassActions::PUBLISHED) {
                    $this->model->where('id', $item)->update(['published' => 1]);
                }
            }
            return true;
        } elseif ($action == MassActions::DESTROY) {
            foreach ($data as $key => $item) {
                if ($key !== MassActions::DESTROY) {
                    $this->model::destroy($item);
                }
            }
            return true;
        }
        return false;
    }

    public function attachColor($id, $data)
    {
        $model = $this->model::where('id', $id)->first();
        $model->colors()->attach($data['color_id']);
    }

    public function detachColor($id, $data)
    {
        $model = $this->model::where('id', $id)->first();
        $model->colors()->detach($data['color_id']);
    }

    public function getProductColors($id)
    {
        return $this->model->where('id', $id)->with('colors')->select('id')->first();
    }

    public function update(int $id, array $data)
    {
        $model = $this->model::where('id', $id)->first();

        $model->published = $data['published'];
        $model->status = $data['status'];
        $model->h1 = $data['h1'];
        $model->title = $data['title'];
        $model->description = $data['description'];
        $model->content = $data['content'];
        $model->characteristics = $data['characteristics'];
        $model->size_table = $data['size_table'];

        $model->price = $data['price'];
        $model->discount_price = $data['discount_price'];
        $model->provider_id = $data['provider_id'];
        $model->trade_price = $data['trade_price'];
        $model->vendor_code = $data['vendor_code'];
        $model->preview = $data['preview'];
        $model->update();

        $colorItems = [];
        if (count($data['colors'])) {
            foreach ($data['colors'] as $color) {
                array_push($colorItems, $color['id']);
            }
        }
        $model->colors()->sync($colorItems);

        $sizeItems = [];
        if (count($data['sizes'])) {
            foreach ($data['sizes'] as $size) {
                array_push($sizeItems, $size['id']);
            }
        }
        $model->sizes()->sync($sizeItems);

        $categoryItems = [];
        foreach ($data['categories'] as $category) {
            $categoryItems[] += $category['id'];
        }
        $model->categories()->sync($categoryItems);

        $imagesItems = [];
        foreach ($data['images'] as $image) {
            $imagesItems[] += $image['id'];
        }
        $model->images()->sync($imagesItems);

        return $model;
    }

    public function create($data)
    {
        $model = new $this->model;

        $model->published = $data['published'];
        $model->status = $data['status'];

        $model->h1 = $data['h1'];
        $model->title = $data['title'];
        $model->description = $data['description'];
        $model->content = $data['content'];
        $model->characteristics = $data['characteristics'];
        $model->size_table = $data['size_table'];

        $model->price = $data['price'];
        $model->discount_price = $data['discount_price'];
        $model->provider_id = is_array($data['provider_id']) ? $data['provider_id']['id'] : null;
        $model->trade_price = $data['trade_price'];
        $model->vendor_code = $data['vendor_code'];
        $model->preview = $data['preview'];
        $model->save();

        if (count($data['colors'])) {
            foreach ($data['colors'] as $color) {
                $model->colors()->attach($color['id']);
            }
        }

        if (count($data['sizes'])) {
            foreach ($data['sizes'] as $size) {
                $model->sizes()->attach($size['id']);
            }
        }

        foreach ($data['categories'] as $category) {
            $model->categories()->attach($category['id']);
        }

        foreach ($data['images'] as $image) {
            $model->images()->attach($image['id']);
        }

//        $this->productsPhotoRepository->create($model->id, $data['images']);
    }

    public function destroy(int $id)
    {
        return $this->model::destroy($id);
    }

    public function getBestSelling($perPage = 8)
    {
        $columns = [
            'id',
            'price',
            'published',
            'discount_price',
            'preview',
            'total_sales',
            'h1',
        ];

        return $this
            ->model::where('published', 1)
            ->select($columns)
            ->orderBy('total_sales', 'desc')
            ->with('sizes')
            ->paginate($perPage);
    }

    public function getBestSellingProducts()
    {
        $columns = [
            'id',
            'price',
            'published',
            'discount_price',
            'preview',
            'total_sales',
            'h1',
        ];

        return $this
            ->model::where('published', 1)
            ->select($columns)
            ->orderBy('total_sales', 'desc')
            ->limit(10)
            ->get();
    }

    public function getNewProducts()
    {
        $columns = [
            'id',
            'price',
            'published',
            'discount_price',
            'preview',
            'h1',
            'created_at',
        ];

        return $this
            ->model::where('published', 1)
            ->select($columns)
            ->orderBy('created_at', 'desc')
            ->with('sizes')
            ->limit(8)
            ->get();
    }

    public function getRecommendProducts()
    {
        $columns = [
            'id',
            'price',
            'published',
            'discount_price',
            'preview',
            'total_sales',
            'created_at',
            'h1',
        ];

        return $this
            ->model::where('published', 1)
            ->select($columns)
            ->orderBy('created_at', 'desc')
            ->with('sizes')
            ->paginate(3);
    }

    public function list()
    {
        return $this->model::select('id', 'vendor_code', 'h1')->get();
    }

    public function getSpecialOffers($items)
    {
        $result = [];
        foreach ($items as $item) {
            $product = $this->getById($item->product_id);

            if (count($items) == 1) {
                $limit = 16;
            } elseif (count($items) > 1 && count($items) < 5) {
                $limit = 12;
            } else {
                $limit = 8;
            }

            $products = $this->model::whereHas('categories', function ($q) use ($product) {
                foreach ($product->categories as $category) {
                    $q->where('id', '!=', $category->id);
                }
            })
                ->where(function ($query) use ($result, $items) {
                    $query->where('published', 1);
                    foreach ($items as $productItem) {
                        $query->where('id', '!=', $productItem->product_id);
                    }
                    if (count($result)) {
                        foreach ($result as $resultItem) {
                            $query->where('id', '!=', $resultItem->id);
                        }
                    }
                })
                ->orderBy('total_sales', 'desc')
                ->limit($limit)
                ->get();

            foreach ($products as $itemProduct) {
                if ($itemProduct->discount_price) {
                    $itemProduct->price = $itemProduct->discount_price;
                    $itemProduct->discount_price -= 100;
                } else {
                    $itemProduct->discount_price = $itemProduct->price - 100;
                }
                $result[] = $itemProduct;
            }
        }

        return $result;
    }

    public function getProductsToFeedById($products)
    {
        $ids = [];
        foreach ($products as $product) {
            $ids[] = $product['id'];
        }

        return $this->model
            ->where('published', 1)
            ->where('status', '!=', ProductAvailability::OUT_OF_STOCK)
            ->whereIn('id', $ids)
            ->select(
                'id',
                'h1',
                'content',
                'status',
                'discount_price',
                'price',
                'preview',
            )->with('images')->get();
    }

    public function getAllProductsToFbFeed()
    {
        return $this
            ->model
            ->where(function ($query) {
                $query->where('published', 1);
                $query->where('status', '!=', ProductAvailability::OUT_OF_STOCK);
            })
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function getProductsFromCategoryToFbFeed($categorySlug)
    {
        return $this->model::whereHas('categories', function ($q) use ($categorySlug) {
            $q->where('slug', $categorySlug);
        })
            ->where(function ($query) {
                $query->where('published', 1);
                $query->where('status', '!=', ProductAvailability::OUT_OF_STOCK);
            })
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function getProductsFrom2CategoriesToFbFeed($categorySlug, $categorySlug2)
    {
        return $this->model::whereHas('categories', function ($q) use ($categorySlug, $categorySlug2) {
            $q->where('slug', $categorySlug);
            $q->orWhere('slug', $categorySlug2);
        })
            ->where(function ($query) {
                $query->where('published', 1);
                $query->where('status', '!=', ProductAvailability::OUT_OF_STOCK);
            })
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function getProductsFrom3CategoriesToFbFeed($categorySlug, $categorySlug2, $categorySlug3)
    {
        return $this->model::whereHas('categories', function ($q) use ($categorySlug, $categorySlug2, $categorySlug3) {
            $q->where('slug', $categorySlug);
            $q->orWhere('slug', $categorySlug2);
            $q->orWhere('slug', $categorySlug3);
        })
            ->where(function ($query) {
                $query->where('published', 1);
                $query->where('status', '!=', ProductAvailability::OUT_OF_STOCK);
            })
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function getAllToPublic()
    {
        {
            $columns = [
                'id',
                'price',
                'published',
                'discount_price',
                'preview',
                'total_sales',
                'h1',
            ];

            return $this
                ->model::where('published', 1)
                ->select($columns)
                ->orderBy('total_sales', 'desc')
                ->with('sizes')
                ->paginate(12);
        }
    }
}
