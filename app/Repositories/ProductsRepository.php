<?php

namespace App\Repositories;

use App\Models\Enums\MassActions;
use App\Models\Enums\ProductAvailability;
use App\Models\Product as Model;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;

class ProductsRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    /**
     * Retrieve a model by its id, including related models for colors, categories, images, sizes, and preview.
     *
     * @param int $id The id of the model to retrieve
     * @return Model The retrieved model
     */
    public function getById($id): Model
    {
        // Use the model property to query for a model with the given id
        return $this->model
            ->where('id', $id)
            // Use the with method to eager load related models
            ->with(
                'colors',
                'categories',
                'images',
                'sizes',
                'preview',
                'characteristicsNew'
            )->first();
    }


    public function getByIdToPublic($id)
    {
        $result = $this->model
            ->select(
                'id',
                'status',
                'published',
                'h1',
                'title',
                'description',
                'content',
                'price',
                'discount_price',
                'characteristics',
                'youtube',
                'vendor_code',
                'preview_id',
                'size_table',
            )
            ->where('id', $id)
            ->with([
                'reviews' => function ($q) {
                    $q->where('published', 1);
                },
                'colors',
                'categories',
                'images',
                'sizes',
                'preview',
            ])->first();

        return $result;
    }

    public function getCharacteristicsForPublic($id): array
    {
        $model = $this->model::select('id')->where('id', $id)->with('characteristicsNew.characteristic')->first();
        $locale = app()->getLocale();
        $characteristics = [];
        foreach ($model->characteristicsNew as $value) {
            $title = $value->characteristic->title[$locale];
            if (array_key_exists($title, $characteristics)) {
                $characteristics[$title][] = $value->title[$locale];
            } else {
                $characteristics[$title] = [$value->title[$locale]];
            }
        }

        return $characteristics;
    }

    /**
     * Search for a model by id or vendor code, and return the results paginated.
     *
     * @param string $query the search query
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator the paginated results
     */
    public function search(string $query): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        //Define the columns that need to be selected
        $columns = [
            'id',
            'status',
            'published',
            'description',
            'price',
            'discount_price',
            'preview_id',
            'h1',
            'sort',
            'vendor_code',
            'viewed',
            'returns',
            'exchange',
            'total_sales',
            'provider_id',
            'created_at',
            'updated_at',
        ];

        //Select columns from model
        $model = $this->model::select($columns);

        //Search for id or vendor_code
        return $model
            ->where('id', $query)
            ->orWhere('vendor_code', $query)
            //Eager load the preview relation
            ->with('preview')
            //Paginate the results
            ->paginate(15);
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
     * Retrieve all models and paginate the results, sorted by the specified column and in the specified order.
     *
     * @param string $sort the column to sort the results by
     * @param string $param the sorting order ('asc' or 'desc')
     * @param int $perPage the number of results per page
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator the paginated results
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
            'preview_id',
            'h1',
            'sort',
            'vendor_code',
            'viewed',
            'returns',
            'exchange',
            'total_sales',
            'provider_id',
            'created_at',
            'updated_at',
        ];

        //Select columns and related models
        return $this
            ->model
            ->select($columns)
            ->with('provider', 'preview')
            //Sort the results
            ->orderBy($sort, $param)
            //Paginate the results
            ->paginate($perPage);
    }

    public function getProduct($id)
    {
        return $this->model::with('sizes', 'preview')->find($id);
    }

    public function getItemsWithPaginateOnProduction($perPage = null)
    {
        $columns = [
            'id',
            'price',
            'published',
            'discount_price',
            'preview_id',
            'sort',
            'h1',
        ];

        return $this
            ->model::where('published', 1)
            ->select($columns)
            ->with('preview')
            ->orderBy('sort', 'desc')
            ->paginate($perPage);
    }

    public function getByCategorySlugToPublic($slug, $data, $perPage = 16)
    {
        $columns = [
            'id',
            'price',
            'published',
            'discount_price',
            'preview_id',
            'sort',
            'h1',
        ];

        $model = $this
            ->model::select($columns)
            ->where('published', 1)
            ->whereHas('categories', function ($q) use ($slug) {
                $q->where('slug', $slug);
            })->with('sizes', 'preview', 'images');

        if (isset($data['sort'])) {
            if ($data['sort'] == 'min_price') {
                $model->orderBy('discount_price', 'asc');
            } elseif ($data['sort'] == 'max_price') {
                $model->orderBy('discount_price', 'desc');
            } elseif ($data['sort'] == 'created_at') {
                $model->orderBy('id', 'desc');
            }
        } else {
            $model->orderBy('total_sales', 'desc');
        }
        return $model->paginate($perPage);
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
        $model = $this->model::where('id', $id)->select('id', 'viewed')->first();
        if ($model->viewed) {
            $model->viewed++;
        } else {
            $model->viewed = 1;
        }

        return $model->update();
    }

    public function getImages($id)
    {
        return $this->model::where('id', $id)->select('id', 'preview_id')->with('images', 'preview')->first();
    }

    public function getRelativeProducts($id, $limit = 10)
    {
        $product = $this->model::where('id', $id)->with('categories')->first();

        $model = $this->model::where('id', '!=', $id)
            ->where('published', 1)
            ->select(
                'id',
                'h1',
                'price',
                'discount_price',
                'preview_id'
            );

        if (count($product->categories)) {
            $model->whereHas('categories', function ($q) use ($product) {
                $q->where('id', $product->categories[0]->id);
            });
        }

        return $model->limit($limit)
            ->with('sizes', 'preview')
            ->get();
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

    public function getProductColors($id)
    {
        return $this->model->where('id', $id)->with('colors')->select('id')->first();
    }

    public function create($data)
    {
        $model = new $this->model;

        $model->fill($data);
        $model->save();

        $this->syncColors($model, $data['colors']);
        $this->syncSizes($model, $data['sizes']);
        $this->syncCategories($model, $data['categories']);
        $this->syncImages($model, $data['images']);
        $this->syncCharacteristics($model, $data['characteristicsNew']);
    }


    public function update(int $id, array $data)
    {
        $model = $this->model::where('id', $id)->first();
        $model->fill($data);
        $model->update();

        $this->syncColors($model, $data['colors']);
        $this->syncSizes($model, $data['sizes']);
        $this->syncCategories($model, $data['categories']);
        $this->syncImages($model, $data['images']);
        $this->syncCharacteristics($model, $data['characteristicsNew']);

        return $model;
    }

    private function syncCharacteristics($model, $values)
    {
        $model->characteristicsNew()->detach();

        if (count($values)) {
            foreach ($values as $value) {
                $model->characteristicsNew()->attach(Arr::pluck($value, 'id'));
            }
        }
    }

    private function syncColors($model, $colors)
    {
        $colorItems = Arr::pluck($colors, 'id');
        $model->colors()->sync($colorItems);
    }

    private function syncSizes($model, $sizes)
    {
        $sizeItems = Arr::pluck($sizes, 'id');
        $model->sizes()->sync($sizeItems);
    }

    private function syncCategories($model, $categories)
    {
        $categoryItems = Arr::pluck($categories, 'id');
        $model->categories()->sync($categoryItems);
    }

    private function syncImages($model, $images)
    {
        $imagesItems = Arr::pluck($images, 'id');
        $model->images()->sync($imagesItems);
    }

    public function destroy(int $id)
    {
        return $this->model::destroy($id);
    }

    public function getProductsForPublicWithPaginate($by = 'id', $sort = 'desc', $perPage = 8)
    {
        $columns = [
            'id',
            'price',
            'published',
            'discount_price',
            'preview_id',
            'total_sales',
            'h1',
        ];

        return $this
            ->model::where('published', 1)
            ->select($columns)
            ->orderBy($by, $sort)
            ->with('sizes', 'preview', 'images')
            ->paginate($perPage);
    }

    public function getRecommendProducts()
    {
        $columns = [
            'id',
            'price',
            'published',
            'discount_price',
            'preview_id',
            'total_sales',
            'created_at',
            'h1',
        ];

        return $this
            ->model::where('published', 1)
            ->select($columns)
            ->orderBy('created_at', 'desc')
            ->with('sizes', 'preview')
            ->paginate(3);
    }

    public function list()
    {
        return $this->model::select('id', 'vendor_code', 'h1')->get();
    }

    public function getSpecialOffers($items, $limit = 16)
    {
        $result = [];
        $productIds = $items->pluck('product_id')->toArray();
        $productCategories = $this->model::whereIn('id', $productIds)->with('categories')->get();
        $excludeCategoryIds = collect([]);
        foreach ($productCategories as $productCategory) {
            $excludeCategoryIds = $excludeCategoryIds->concat($productCategory->categories->pluck('id'));
        }

        $products = $this->model::whereNotIn('id', $productIds)
            ->where('published', 1)
            ->whereHas('categories', function ($query) use ($excludeCategoryIds) {
                $query->whereNotIn('id', $excludeCategoryIds);
            })
            ->orderBy('total_sales', 'desc')
            ->with('preview')
            ->paginate($limit);

        foreach ($products as $itemProduct) {
            if ($itemProduct->discount_price) {
                $itemProduct->price = $itemProduct->discount_price;
                $itemProduct->discount_price -= 100;
            } else {
                $itemProduct->discount_price = $itemProduct->price - 100;
            }
            $result[] = $itemProduct;
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
                'preview_id',
            )->with('images', 'preview')->get();
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
            ->with('images', 'preview')
            ->get();
    }

    public function getProductsFromCategoryToFbFeed($slugs)
    {
        $slugs = explode('/', $slugs);

        return $this->model::whereHas('categories', function ($q) use ($slugs) {
            $q->whereIn('slug', $slugs);
        })
            ->where(function ($query) {
                $query->where('published', 1);
                $query->where('status', '!=', ProductAvailability::OUT_OF_STOCK);
            })
            ->orderBy('created_at', 'desc')
            ->with('images', 'preview')
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
                'preview_id',
                'total_sales',
                'h1',
                'created_at',
                'updated_at',
            ];

            return $this
                ->model::where('published', 1)
                ->select($columns)
                ->inRandomOrder()
                ->with('sizes', 'preview', 'images')
                ->paginate(8);
        }
    }
}
