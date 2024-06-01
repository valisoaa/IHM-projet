<?php

namespace App\Http\Controllers;

use App\Models\Historique;
use App\Models\TauxChange;
use Illuminate\Http\Request;

class TauxChangeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tauxChange = TauxChange::all();
        return response()->json([
            "data" => $tauxChange,
            "message" => "Liste de tous les taux de changes actuelles",
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
        $tauxChange = new TauxChange();
        $tauxChange->taux = $request->taux;
        $tauxChange->devise_source_id = $request->devise_source_id;
        $tauxChange->devise_destination_id = $request->devise_destination_id;
        $tauxChange->save();

        return response()->json([
            "data" => $tauxChange,
            "message" => "Taux de change créé!!",
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TauxChange  $tauxChange
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tauxChange = TauxChange::find($id);
        return response()->json([
            "data" => $tauxChange,
            "message" => "Taux de change trouvé!!",
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TauxChange  $tauxChange
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $tauxChange = TauxChange::find($id);
        $tauxChange->taux = $request->taux;
        $tauxChange->devise_source_id = $request->devise_source_id;
        $tauxChange->devise_destination_id = $request->devise_destination_id;
        $tauxChange->save();

        return response()->json([
            "data" => $tauxChange,
            "message" => "Taux de change mis à jour!!",
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TauxChange  $tauxChange
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tauxChange = TauxChange::destroy($id);
        return response()->json([
            "message" => "Taux de change supprimé!!"
        ]);
    }


    public function getDailyCours($id)
    {
        $dailyRates = Historique::where('taux_id', $id)
                                  ->orderBy('created_at', 'asc')
                                  ->get();

        return response()->json($dailyRates);
    }



     /**
      * LISTER TOUS LES TAUX DE CHANGE AVEC DEVISE SOURCE ET DESTINATION
     */

    public function getAllTauxChangeWithDevises()
    {
        $tauxChange = TauxChange::with('deviseSource')->with('deviseDestination')->get();
        return response()->json([
            "data" => $tauxChange,
            "message" => "Liste de tous les taux de changes avec le devise source",
        ], 200);
    }
}
