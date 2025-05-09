<?php

namespace App\Http\Controllers;

use App\Models\Juego;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Exception;


class JuegoController extends Controller
{
    
    /**
     * Muestra las partidas finalizadas
     */
    public function finalizadas()
    {
        $jugadorActual = Auth::id(); 
        
        $consulta = Juego::where(function ($query) use ($jugadorActual) {
            $query->where('jug_1_id', $jugadorActual)
                ->orWhere('jug_2_id', $jugadorActual);
        })
            ->where('finalizada',true)
            ->get();

        $cantidad = count($consulta);
        $juegosFinalizados=[];

         foreach($consulta as $juego) {
            $atacante=User::find($juego->jug_1_id)->name;
            $defensor=User::find($juego->jug_2_id)->name;
            $ganador=$juego->ganador!=null?($juego->ganador!=$jugadorActual?"Perdida":"Ganada"):"Empate";

            $juegosFinalizados[]=["atac"=>$atacante,"manoAtac"=>$juego->mano_jug_1,"def"=>$defensor,"manoDef"=>$juego->mano_jug_2,"ganador"=>$ganador];
         }  
        
        return Inertia::render('Juego/Finalizadas', ['partidas' => $juegosFinalizados,'cantidad'=>$cantidad]);
        
    }
    /**
     * Show the form for creating a new resource.
     */
    public function crearJuego()
    {
        $currentUser = Auth::user();
        $users = User::whereNotIn('id', [$currentUser->id])->get(['id', 'name']);

        return Inertia::render('Juego/Crear', ['users' => $users]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function enviarJuego(Request $data)
    {
        date_default_timezone_set('Europe/Madrid');
        $partida = new Juego();
        try {
            $partida->jug_1_id = $data->jugador1;
            $partida->jug_2_id = $data->jugador2;
            $partida->mano_jug_1 = $data->mano;
            $partida->save();

            $name = User::find($data->jugador2)->name;

            return Inertia::render('Juego/Creado', ['nombre' => $name, 'mano' => $data->mano]);
        } catch (Exception $er) {
            return "Error";
        }
    }


    public function enviadas()
    {
        $jugadorActual = Auth::id(); 

        $consulta=Juego::where('jug_1_id',$jugadorActual)->whereNull('ganador')->get();

        $juegosEnviados=[];

        foreach($consulta as $juego) {
            $defensor=User::find($juego->jug_2_id)->name;

            $juegosEnviados[]=["manoAtac"=>$juego->mano_jug_1,"def"=>$defensor, "fecha"=>date("d-m-Y", strtotime($juego->created_at))];
         }  

        return  Inertia::render('Juego/Enviadas', ['partidas' => $juegosEnviados,'cantidad'=>count($juegosEnviados)]);
    }

    public function recibidas()
    {
        $jugadorActual = Auth::id(); 

        $consulta=Juego::where('jug_2_id',$jugadorActual)->where('finalizada',false)->get();

        $juegosRecibidos=[];

        foreach($consulta as $juego) {
            $atacante=User::find($juego->jug_1_id)->name;

            $juegosRecibidos[]=["id"=>$juego->id,"atac"=>$atacante, "fecha"=>date("d-m-Y", strtotime($juego->created_at))];
         }  

        return  Inertia::render('Juego/Recibidas', ['partidas' => $juegosRecibidos,'cantidad'=>count($juegosRecibidos)]);
    }


    public function responderJuego(Request $request)
    {
        date_default_timezone_set('Europe/Madrid');

        try{
            $partida = Juego::find($request["id"]);

            $mano1=$partida->mano_jug_1;
            $mano2=$request["mano"];

            if ($mano1 == $mano2) {
                $partida->ganador=null;
            } elseif (
                ($mano1 == "piedra" && ($mano2 == "tijeras" || $mano2 == "lagarto")) ||
                ($mano1 == "papel" && ($mano2 == "piedra" || $mano2 == "spock")) ||
                ($mano1 == "tijeras" && ($mano2 == "papel" || $mano2 == "lagarto")) ||
                ($mano1 == "lagarto" && ($mano2 == "papel" || $mano2 == "spock")) ||
                ($mano1 == "spock" && ($mano2 == "piedra" || $mano2 == "tijeras"))
            ) {
                $partida->ganador=$partida->jug_1_id;
            } else {
                $partida->ganador=$partida->jug_2_id;
            }


            $partida->mano_jug_2=$mano2;
            $partida->finalizada=true;
            $partida->updated_at=time();
            $partida->update();

            $jugadorActual = Auth::id(); 
            $final = $partida->ganador==null?"Empate":( $partida->ganador==$jugadorActual?"Has ganado": "Has perdido");

            $salida=["jug1"=>User::find($partida->jug_1_id)->name,"mano1"=>$partida->mano_jug_1,
                    "jug2"=>User::find($partida->jug_2_id)->name,"mano2"=>$partida->mano_jug_2,
                    "resultado"=>$final];

            
        }catch(Exception $er){
            return "Error";
        }
        return Inertia::render('Juego/Respondida',["resultado"=>$salida]);
    }



}
