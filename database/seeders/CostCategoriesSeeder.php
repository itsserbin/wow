<?php

namespace Database\Seeders;

use App\Models\Enums\CostCategories;
use App\Models\Statistics\CostCategory;
use Illuminate\Database\Seeder;

class CostCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (CostCategories::state as $item) {
            if (!CostCategory::where('slug', $item['slug'])->first()) {
                $model = new CostCategory();
                $model->title = $item['title'];
                $model->type = 0;
                $model->slug = $item['slug'];
                $model->save();
            }
        }
    }
}
