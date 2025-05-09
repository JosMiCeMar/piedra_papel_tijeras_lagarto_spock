<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Juego;

class JuegosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 50; $i++) {
            // Seleccionar dos usuarios distintos
            $jugador1Id = rand(1, 10);
            $jugador2Id = rand(1, 10);
            while ($jugador2Id == $jugador1Id) {
                $jugador2Id = rand(1, 10);
            }

            // Crear un nuevo juego con datos aleatorios
            Juego::create([
                'jug_1_id' => $jugador1Id,
                'mano_jug_1' => ['piedra', 'papel', 'tijeras', 'lagarto', 'spock'][rand(0, 4)],
                'jug_2_id' => $jugador2Id,
                'mano_jug_2' => ['piedra', 'papel', 'tijeras', 'lagarto', 'spock'][rand(0, 4)],
                'finalizada' => $finalizada = rand(0, 1),
                'ganador' => $finalizada==0? null : (rand(0, 1) == 1 ? $jugador1Id : (rand(0, 1) == 1 ?$jugador2Id:null)),
            ]);
        }
    }
}
