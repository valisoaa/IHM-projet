<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Currency;
use Illuminate\Support\Facades\File;

class CurrencyController extends Controller
{
    //

    public function index(){
        $cu = Currency::orderBy('Devise')->get();

        return response()->json([
            'data' => $cu,
            'message' => 'liste des devises'
        ]);
    }

    public function store(Request $request){
        $cu = new Currency();
        $cu->Nom = $request->Nom;
        $cu->Devise = $request->Devise;
        $cu->Code = $request->Code;
        $cu->Territoire= $request->Territoire;
        $cu->Symbole = $request->Symbole;

        $cu->save();
        return response()->json(["data" => $cu]);
    }


    public function show($id){
        $cu = Currency::find($id);

        return response()->json($cu);
    }


    public function destroy($id){
        $cu = Currency::find($id);
        $message = "une erreur est survenue lors de la suppression";
        if($cu->delete()){
            $message = "Suppression avec succés";
        }

        return response()->json([
            'data' => $cu,
            'message' => $message
        ]);

    }

    public function modify($id, Request $request){
        $cu = Currency::find($id);

        $cu->Devise = $request->Devise;
        $cu->Nom = $request->Nom;
        $cu->Symbole = $request->Symbole;
        $cu->Code = $request->Code;
        $cu->Territoire = $request->Territoire;




        $cu->save();
        return response()->json([
            'data' => $cu,
        ]);
    }

    public function update(){
        $content = FILE::json(base_path('mock-currency.json'));
        $currencies = $content['currencies'];

        foreach ($currencies as $cu) {
            $currency = new Currency();
            $currency->devise = $cu['devise'];
            $currency->nom = $cu['nom'];
            $currency->symbole = $cu['symbole'];
            $currency->code = $cu['code'];
            $currency->territoire = $cu['territoire'];
            $currency->save();
        }

        return response()->json([
            'message' => "Mise à jour des devises effectuer",
        ]);
    }
}
