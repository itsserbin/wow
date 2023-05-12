<?php

namespace Database\Seeders;

use App\Models\Enums\CostAndProfitCategories;
use App\Models\Statistics\CostAndProfitCategory;
use Illuminate\Database\Seeder;

class CostAndProfitCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (CostAndProfitCategories::state as $item) {
            if (!CostAndProfitCategory::where('slug', $item['slug'])->first()) {
                $model = new CostAndProfitCategory();
                $model->title = $item['title'];
                $model->type = $item['type'];
                $model->slug = $item['slug'];
                $model->save();
            }
        }
    }
}
