<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Juego;

class ProfileController extends Controller
{

    public function index()
    {

        $usuarioActual = Auth::id();

        $creadas = Juego::where("jug_1_id", $usuarioActual)->count();
        $recibidas = Juego::where("jug_2_id", $usuarioActual)->count();
        $finalizadas = Juego::where(function ($query) use ($usuarioActual) {
            $query->where('jug_1_id', $usuarioActual)
                ->orWhere('jug_2_id', $usuarioActual);
        })
            ->where('finalizada', true)
            ->count();

        $ganadas = Juego::where("ganador", $usuarioActual)->count();

        $perdidas = Juego::where(function ($query) use ($usuarioActual) {
            $query->where('jug_1_id', $usuarioActual)
                ->orWhere('jug_2_id', $usuarioActual);
        })
            ->where('finalizada', true)->whereNot("ganador", $usuarioActual)
            ->count();

        $empatadas = Juego::where(function ($query) use ($usuarioActual) {
            $query->where('jug_1_id', $usuarioActual)
                ->orWhere('jug_2_id', $usuarioActual);
        })
            ->where('finalizada', true)->where("ganador", null)
            ->count();

        return Inertia::render('Dashboard', ["creadas" => $creadas,
         "recibidas" => $recibidas, "finalizadas" => $finalizadas, "ganadas" => $ganadas,
        "perdidas"=> $perdidas, "empatadas"=>$empatadas]);
    }

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
