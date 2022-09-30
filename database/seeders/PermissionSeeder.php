<?php

namespace Database\Seeders;

use App\Models\Enums\Permissions;
use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (Permissions::state as $permission) {
            if (!Permission::where('slug', $permission['slug'])->first()) {
                $newPermission = new Permission();
                $newPermission->name = $permission['name'];
                $newPermission->slug = $permission['slug'];
                $newPermission->save();
            }
        }
    }
}
