<?php

namespace App\Http\Controllers;

use App\Models\Devise;
use App\Models\TauxChange;
use Illuminate\Http\Request;

class DeviseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $devise = Devise::with('tauxChangeSources')->get();
        return response()->json([
            "data" => $devise,
            "message" => "Liste de tous les devises actuelles",
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $devise = new Devise();
        $devise->nom = $request->nom;
        $devise->symbole = $request->symbole;
        $devise->code = $request->code;
        $devise->pays = $request->pays;
        $devise->save();

        return response()->json([
            "data" => $devise,
            "message" => "Devise créé!!",
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Devise  $devise
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $devise = Devise::find($id);
        return response()->json([
            "data" => $devise,
            "message" => "Devise trouvé!!",
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Devise  $devise
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {

        $devise = Devise::find($id);
        $devise->nom = $request->nom;
        $devise->symbole = $request->symbole;
        $devise->code = $request->code;
        $devise->pays = $request->pays;
        $devise->save();

        return response()->json([
            "data" => $devise,
            "message" => "Devise mis à jour!!",
        ], 203);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Devise  $devise
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $devise = Devise::destroy($id);
        return response()->json([
            "message" => "Devise supprimé!!"
        ]);
    }



     /**
     * Convertir une devise à une autre devise.
    */
    public function convert(Request $request)
    {

        $request->validate([
            'source' =>'required',
            'destination' =>'required',
            'amount' => 'required|numeric|min:0'
        ]);

        $taux = TauxChange::where('devise_source_id', $request->source)
                            ->where('devise_destination_id', $request->destination)
                            ->first();
        if (!$taux) {
            return response()->json(["message" => "Taux de Change indisponible"]);
        }

        $result = $request->amount * $taux->taux;

        return response()->json([
            "result" => $result
        ]);

    }
}
