<?php

use App\Http\Controllers\JuegoController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RankingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/perfil', [ProfileController::class, 'index'])->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get("crear", [JuegoController::class, 'crearJuego'])->name("juego.crear");
    Route::post("crear", [JuegoController::class, 'enviarJuego'])->name("juego.crear");
    Route::get("finalizadas", [JuegoController::class, 'finalizadas'])->name("juego.finalizadas");
    Route::get("enviadas", [JuegoController::class, 'enviadas'])->name("juego.enviadas");
    Route::get("recibidas", [JuegoController::class, 'recibidas'])->name("juego.recibidas");
    Route::post("recibidas", [JuegoController::class, 'responderJuego'])->name("juego.recibidas");
});

Route::get("ranking", [RankingController::class, 'index'])->name("ranking");

require __DIR__ . '/auth.php';
