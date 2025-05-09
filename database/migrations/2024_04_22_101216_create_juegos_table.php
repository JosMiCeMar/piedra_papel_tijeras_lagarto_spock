<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('juegos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('jug_1_id');
            $table->enum('mano_jug_1',["piedra","papel","tijeras","lagarto","spock"]);
            $table->unsignedBigInteger('jug_2_id');
            $table->enum('mano_jug_2',["piedra","papel","tijeras","lagarto","spock"])->nullable();
            $table->boolean('finalizada')->default(false);
            $table->unsignedBigInteger('ganador')->nullable();
            $table->timestamps();

            $table->foreign('jug_1_id')->references('id')->on('users');
            $table->foreign('jug_2_id')->references('id')->on('users');
            $table->foreign('ganador')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('juegos');
    }
};
