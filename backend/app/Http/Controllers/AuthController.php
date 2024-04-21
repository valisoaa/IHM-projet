<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $email = $request->email;
        $password = $request->password;

        $user = User::where('email', $email)->first();
        if (!$user) {
           return response()->json(["Email introuvable"], 406);
        }

        if ($user && Auth::attempt(['email' => $email, 'password' => $password])) {
            $user = Auth::user();
            $token = $user->createToken("ACCESS_TOKEN")->plainTextToken;
            return response()->json(["token" => $token], 200);
        }
        return response()->json(["Mot de passe erroné!!"], 401);
    }

    public function logout(Request $request)
    {
        if ($request->user()) {
            $request->user()->currentAccessToken()->delete();
            return response()->json(["message" => 'Deconnecté!!']);
        }else{
            return response()->json(["Erreur" => 'UNAUTHORIZED!!']);
        }
    }
}
