<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $administrator = Role::where('slug', 'administrator')->first();
        if (!User::where('email', 'admin@gmail.com')->first()) {
            $user = new User();
            $user->name = 'Admin';
            $user->email = 'admin@gmail.com';
            $user->password = bcrypt('secret');;
            $user->save();
            $user->roles()->attach($administrator);
        } else {
            User::where('email', 'admin@gmail.com')->first()->roles()->sync($administrator);
        }
    }
}
