<?php

namespace App\Repositories;

use App\Models\Enums\MassActions;
use App\Models\Enums\ProductAvailability;
use App\Models\Product as Model;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use JetBrains\PhpStorm\ArrayShape;

class ProductsRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    final public function getByIds(array $ids)
    {
        return $this->model::whereIn('id', $ids)->get();
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
        return $this->model
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
            ->where(function ($q) use ($id) {
                $q->where('id', $id);
                $q->where('published', 1);
            })
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
     * @return LengthAwarePaginator the paginated results
     */
    final public function search(string $query): LengthAwarePaginator
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

        return $this->model::select($columns)
            ->where('id', urldecode($query))
            ->orWhere('vendor_code', urldecode($query))
            ->with('preview')
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

    final public function getByCategorySlugToPublic(string $slug, array $data, int $perPage = 16): LengthAwarePaginator
    {
        $cacheKey = 'products_by_slug_' . $slug . '_' . implode('_', $data) . '_' . $perPage;
        $cachedProducts = Cache::get($cacheKey);

        if ($cachedProducts) {
            return $cachedProducts;
        }

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
                $q->where('slug', urldecode($slug));
            })->with([
                'sizes:title',
                'preview:id,src,webp_src',
                'images:id,src,webp_src'
            ]);

        $model = $this->applyFilters($model, $data);
        $model = $this->applySorting($model, $data);

        $cachedProducts = $model->paginate($perPage);

        Cache::put($cacheKey, $cachedProducts, now()->addMinutes(60)); // Кешувати на 60 хвилин

        return $cachedProducts;

    }

    final public function applyFilters($model, array $data)
    {
        if (isset($data['filter'])) {
            if (isset($data['filter']['price'])) {
                $model->whereBetween('discount_price', [$data['filter']['price'][0], $data['filter']['price'][1]]);
            }

            if (isset($data['filter']['characteristics'])) {
                $model->whereHas('characteristicsNew', function ($q) use ($data) {
                    $q->whereIn('id', $data['filter']['characteristics']);
                });
            }

            if (isset($data['filter']['sizes'])) {
                $model->whereHas('sizes', function ($q) use ($data) {
                    $q->whereIn('id', $data['filter']['sizes']);
                });
            }
            if (isset($data['filter']['colors'])) {
                $model->whereHas('colors', function ($q) use ($data) {
                    $q->whereIn('id', $data['filter']['colors']);
                });
            }
        }
        return $model;
    }

    final public function applySorting($model, array $data)
    {
        if (!empty($data['sort'])) {
            switch ($data['sort']) {
                case 'min_price':
                    $model->orderBy('discount_price', 'asc');
                    break;
                case 'max_price':
                    $model->orderBy('discount_price', 'desc');
                    break;
                case 'created_at':
                    $model->orderBy('id', 'desc');
                    break;
            }
        } else {
            $model->orderBy('total_sales', 'desc');
        }
        return $model;
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

//    public function getRelativeProducts($id, $limit = 10)
//    {
//        $product = $this->model::where('id', $id)->with('categories')->first();
//
//        $model = $this->model::where('id', '!=', $id)
//            ->where('published', 1)
//            ->select(
//                'id',
//                'h1',
//                'price',
//                'discount_price',
//                'preview_id'
//            );
//
//        if (count($product->categories)) {
//            $model->whereHas('categories', function ($q) use ($product) {
//                $q->where('id', $product->categories[0]->id);
//            });
//        }
//
//        return $model->limit($limit)
//            ->with('sizes', 'preview')
//            ->get();
//    }

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

    final public function getProductsForPublicWithPaginate(string $by = 'id', string $sort = 'desc', int $perPage = 8): LengthAwarePaginator
    {
        $cacheKey = 'products_' . $by . '_' . $sort . '_' . $perPage;

        if (Cache::has($cacheKey)) {
            return Cache::get($cacheKey);
        }

        $columns = [
            'id',
            'price',
            'published',
            'discount_price',
            'preview_id',
            'total_sales',
            'h1',
        ];

        $query = $this->model::where('published', 1)
            ->select($columns)
            ->orderBy($by, $sort);

        $query->with([
            'sizes:id,title',
            'preview:id,src,webp_src,alt',
            'images:id,src,webp_src,alt'
        ]);

        $result = $query->paginate($perPage);

        Cache::put($cacheKey, $result, 60); // кешуємо на 1 хвилину

        return $result;
    }


    final public function getRecommendProductsForPublicWithLimit(int $id = null, string $by = 'id', string $sort = 'desc', int $limit = 8)
    {
        $model = $this->model::where('published', 1)
            ->select(
                'id',
                'h1',
                'price',
                'discount_price',
                'preview_id'
            );

        if ($id) {
            $product = $this->model::where('id', $id)->with('categories')->first();
            $model->where('id', '!=', $id);
            if (count($product->categories)) {
                $model->whereHas('categories', function ($q) use ($product) {
                    $q->where('id', $product->categories[0]->id);
                });
            }
        }

        return $model->limit($limit)
            ->with([
                'sizes:title',
                'preview:id,src,webp_src'
            ])
            ->orderBy($by, $sort)
            ->get();
    }

    public function getRecommendProductsForPublicCart(int $limit = 3)
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
            ->orderBy('total_sales', 'desc')
            ->with('sizes', 'preview')
            ->limit($limit)
            ->get();
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

//    final public function getAllToPublic(): LengthAwarePaginator
//    {
//        $columns = [
//            'id',
//            'price',
//            'published',
//            'discount_price',
//            'preview_id',
//            'total_sales',
//            'h1',
//            'created_at',
//            'updated_at',
//        ];
//
//        $result = $this
//            ->model::where('published', 1)
//            ->select($columns);
//
//        $result->->with('sizes', 'preview', 'images');
//        return $result->paginate(8);
//    }

    final public function getMinMaxProductPrice(string $slug): array
    {
        $cacheKey = 'product-price-min-max-' . $slug;

        $cached = Cache::get($cacheKey);

        if ($cached !== null) {
            return $cached;
        }

        $min = $this->model::select(['discount_price', 'price'])
            ->whereHas('categories', function ($q) use ($slug) {
                $q->where('slug', $slug);
            })
            ->orderBy('discount_price', 'asc')
            ->first();

        $max = $this->model::select(['discount_price', 'price'])
            ->whereHas('categories', function ($q) use ($slug) {
                $q->where('slug', $slug);
            })
            ->orderBy('discount_price', 'desc')
            ->first();

        $result = [
            'min' => $min->discount_price ?: $min->price,
            'max' => $max->discount_price ?: $max->price
        ];

        Cache::put($cacheKey, $result, now()->addMinutes(60));

        return $result;
    }
}
