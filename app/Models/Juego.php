<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Juego extends Model
{
    protected $fillable = [
        'jug_1_id',
        'mano_jug_1',
        'jug_2_id',
        'mano_jug_2',
        'finalizada',
        'ganador_id',
    ];
    
    public function jugador1(){
        return $this->belongsTo(User::class,'jug_1_id');
    }

    public function jugador2(){
        return $this->belongsTo(User::class,'jug_2_id');
    }

    public function ganador(){
        return $this->belongsTo(User::class,'ganador_id');
    }
}
