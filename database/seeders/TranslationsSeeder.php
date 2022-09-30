<?php

namespace Database\Seeders;

use App\Models\Enums\Translations;
use App\Models\Translation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TranslationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (Translations::state as $translation) {
            if (!Translation::where('slug', $translation['slug'])->first()) {
                $model = new Translation();
                $model->slug = $translation['slug'];
                $model->ru = $translation['ru'];
                $model->ua = $translation['ua'];
                $model->save();
            }
        }
    }
}
