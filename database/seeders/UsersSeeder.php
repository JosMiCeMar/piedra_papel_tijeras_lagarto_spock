<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        {

            $nicks = [
                'Pepe_95',
                'MariaPerez',
                'Juanito92',
                'LaLuna',
                'FernandaV',
                'ElGato',
                'AnaFuentes',
                'Raul_24',
                'LuciaLopez',
                'PabloR'
            ];
    
            foreach ($nicks as $nick) {
                $email = strtolower($nick) . '@prueba.es'; 
    
                User::create([
                    'name' => $nick,
                    'email' => $email,
                    'email_verified_at' => now(),
                    'password' => Hash::make('prueba123'),
                ]);
            }
        }
    }
}
