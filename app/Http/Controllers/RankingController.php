<?php

namespace App\Http\Controllers;

use App\Models\Juego;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Exception;


class RankingController extends Controller
{
    public function index()
    {

        $ganadores=rankingGanadores(10);
        $atac = rankingAtacDef(10,1);
        $def = rankingAtacDef(10,2);

        return Inertia::render('Ranking',['ganadores'=>$ganadores, 'atacantes'=>$atac, 'defensores'=>$def]);
    }


   
}

function rankingGanadores($cantidad)
{
    $ranking = User::select('users.id', 'users.name', DB::raw('COUNT(juegos.id) as partidas_ganadas'))
        ->join('juegos', 'users.id', '=', 'juegos.ganador')
        ->groupBy('users.id', 'users.name')
        ->orderByDesc('partidas_ganadas')
        ->limit($cantidad)
        ->get();

        return $ranking;
}

function rankingAtacDef($cantidad,$posicion){
    $ranking = User::select('users.id', 'users.name', DB::raw('COUNT(juegos.id) as partidas_atacante'))
    ->join('juegos', 'users.id', '=', 'juegos.jug_'.$posicion.'_id')
    ->where('juegos.finalizada',true)
    ->groupBy('users.id', 'users.name')
    ->orderByDesc('partidas_atacante')
    ->limit($cantidad)
    ->get();
    
    return $ranking;
}