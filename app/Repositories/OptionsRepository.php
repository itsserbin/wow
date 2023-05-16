<?php

namespace App\Repositories;

use App\Models\Enums\Options;
use App\Models\Option as Model;
use Illuminate\Support\Facades\Cache;

class OptionsRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    final public function getMainOptions(): array
    {
        $options = [];
        foreach (Options::state as $option) {
            $options[$option] = $this->getOptionValue($option);
        }
        return $options;
    }

    final public function getToProd(): array
    {
        return $this->getMainOptions();
    }

    final public function getOptionValue(string $name): ?string
    {
        $option = $this->model::where('name', $name)->select('value')->first();
        return $option?->value;
    }


//    public function getToProd(): array
//    {
//        return $this->getMainOptions();
//    }

//    final public function getMainOptions(): array
//    {
//        $options = [];
//        foreach (Options::state as $option) {
//            $options[$option] = $this->getOptionValue($option);
//        }
//        return $options;
//    }

    public function updateOptions($data): bool
    {
        foreach ($data as $key => $value) {
            $this->update($key, $value);
        }

        return true;
    }

    public function getScriptsOptions(): array
    {
        $options['head_scripts'] = $this->getOptionValue(Options::state[array_search('head_scripts', Options::state)]);
        $options['after_body_scripts'] = $this->getOptionValue(Options::state[array_search('after_body_scripts', Options::state)]);
        $options['footer_scripts'] = $this->getOptionValue(Options::state[array_search('footer_scripts', Options::state)]);

        return $options;
    }

//    final public function getOptionValue(string $name)
//    {
//        return $this->model::where('name', $name)->select('value')->first()->value;
//    }

    public function create($name, $value)
    {
        return $this->model::create(['name' => $name, 'value' => $value]);
    }

    public function update($name, $value)
    {
        return $this->model::where('name', $name)->update(['value' => $value]);
    }

}
