<?php

namespace Database\Seeders;

use App\Models\Enums\Options;
use App\Models\Option;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OptionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (Options::state as $option) {
            if (!Option::where('name', $option)->first()) {
                $model = new Option();
                $model->name = $option;
                $model->value = null;
                $model->save();
            }
        }
    }
}
