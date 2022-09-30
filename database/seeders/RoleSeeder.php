<?php

namespace Database\Seeders;

use App\Models\Enums\Roles;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (Roles::state as $role) {
            if (!Role::where('slug', $role['slug'])->first()) {
                $newRole = new Role();
                $newRole->name = $role['name'];
                $newRole->slug = $role['slug'];
                $newRole->save();
            }
        }

        $allPermissions = [];
        foreach (Permission::all() as $permission) {
            array_push($allPermissions, $permission->id);
        }

        Role::where('slug', 'administrator')->first()->permissions()->sync($allPermissions);
    }
}
