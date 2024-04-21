<?php

namespace App\Http\Controllers;

use App\Models\Historique;
use Illuminate\Http\Request;
use Termwind\Components\Hr;

class HistoriqueController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $historique = Historique::all();
        return response()->json([
            "data" => $historique,
            "message" => "Historique de change",
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $historique = new Historique();
        $historique->valeur = $request->valeur;
        $historique->taux_id = $request->taux_id;
        $historique->save();
        return response()->json([
            "data" => $historique,
            "message" => "Nouvelle historique créé",
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Historique  $historique
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $historique = Historique::find($id);
        return response()->json([
            "data" => $historique,
            "message" => "Historique trouvé",
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Historique  $historique
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $historique = Historique::find($id);
        $historique->valeur = $request->valeur;
        $historique->taux_id = $request->taux_id;
        $historique->save();

        return response()->json([
            "data" => $historique,
            "message" => "Historique mis à jour",
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Historique  $historique
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Historique::destroy($id);
        return response()->json([
            "message" => "Historique supprimé",
        ]);
    }
}
