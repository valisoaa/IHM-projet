<?php

namespace App\Http\Controllers;

use App\Models\Currency_rate;
use App\Models\Currency;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\File;



class RateController extends Controller
{
    //
    public function index()
    {
        $rate = Currency_rate::all();
        return response()->json([
            "data" => $rate,
            "message" => "Liste des taux de change",
   ] );
    }

    public function store(Request $request){
                $currencies = Currency::all();
                $code = $currencies->mapWithKeys(fn($cu)=>[$cu['id'] => $cu['Code']]);

                $rates = new Currency_rate();
                $rates->value = $request->value;
                $rates->date = $request->date;
                $rates->currency_id = $request->currency_id;
                $rates->save();
        return Response()->json(["data" => $rates]);
    }

    public function show($id){
        $rate = Currency_rate::find($id);
        return response()->json($rate);
    }

    public function modify($request,$id){
        $rate = $rate = Currency_rate::find($id);
        $rate->code = $request->code;
        $rate->value = $request->value;
        $rate->date = $request->date;
        $rate->save();

        return response()->json($rate);
    }

    public function destroy($id){
        $rate = Currency_rate::find($id);
        $rate->delete();

        return response()->json([
            "message" => "Suppression avec succés"
        ]);
    }

    public function update(){
        $content = FILE::json(base_path('data.json'));
        $rate = $content['rates'];
        $date = explode('+', $content['lastupdate'])[0];
        $currencies = Currency::all();
        $code = $currencies->mapWithKeys(fn($cu)=>[$cu['id'] => $cu['Code']]);
        foreach ($rate as $key => $value) {
            if($code->contains($key)){
                $rates = new Currency_rate();
                $rates->value = $value;
                $rates->date = $date;
                $rates->currency_id = $code->search($key);
                $rates->save();
            }
        }

        return response()->json([
            'message' => "Mise à jour effectuer",
        ]);
    }

    public function update2(){
        $content = FILE::json(base_path('All-mock-rates.json'));
        $rate = $content['rates'];
        $currencies = Currency::all();
        $code = $currencies->mapWithKeys(fn($cu)=>[$cu['id'] => $cu['Code']]);
        foreach ($rate as $key => $value) {
            foreach($value as $c => $v){
                if($code->contains($c)){
                    $rates = new Currency_rate();
                    $rates->value = $v;
                    $rates->date = $key;
                    $rates->currency_id = $code->search($c);
                    $rates->save();
                }

            }
         }
        return response()->json([
            'message' => "Mise à jour effectuer",
        ]);

    }


    public function val($code){
        $val = Currency_rate::where('code',$code)->get();

        return response()->json($val);
    }

    public function converter($source,$value,$dest){

        $s_val = Currency_rate::whereRelation('currency','code','=',$source)->orderBy('date', 'DESC')->with('currency')->get();
        $d_val = Currency_rate::whereRelation('currency','code','=',$dest)->orderBy('date', 'DESC')->with('currency')->get();

        if(!count($s_val)){
            $message = $source."n'est pas une de nos devises";
            return response()->json([
                'error' => $message
            ]);
        }

        if(!count($d_val)){
            $message = $dest." n'est pas une de nos devises";
            return response()->json([
                'error' => $message
            ]);
        }

        if($value<0){
            $message = "une devise ne doit pas être negative";
            return response()->json([
                'error' => $message
            ]);
        }


        $result = $value * ($d_val[0]->value/$s_val[0]->value);
        return response()->json([
            'data' => $result,
            "Code" => [
                "source" => $s_val[0]->currency->Code,
                "dest" => $d_val[0]->currency->Code,
                "unit_source" =>$s_val[0]->currency->Symbole,
                "unit_dest" =>$d_val[0]->currency->Symbole
            ],
            "Value" => [
                "source" => $d_val[0]->value/$s_val[0]->value,
                "dest" =>$s_val[0]->value/$d_val[0]->value,
                "cash" => [1,5,10,20,50,100,250,500,1000,2000,5000,10000]
            ],
        ]);
    }

    public function getTen($val1,$val2){
        $cash = [1,5,10,20,50,100,250,500,1000,2000,5000,10000];
        $cash = collect($cash);
        $symbole = $val1->currency->Symbole;
        $symbole2 = $val2->currency->Symbole;

        return $cash->mapWithKeys(fn($el)=>[$symbole.number_format($el,0,"."," ") =>  $symbole2.number_format($el * ($val2->value/$val1->value),4,","," ")])  ;
    }



    public function getHistorique($source,$dest)
    {
        $date_farany = Currency_rate::orderBy('date', 'DESC')->first()->date;



        $mock = collect([1,2,3,4,5,6,7,8]);
        $endDate = Carbon::parse($date_farany);
        $startDate = Carbon::parse($date_farany)->subDays(8);
        $data_source = Currency_rate::whereBetween('date', [$startDate, $endDate])
                            ->whereRelation('currency','code','=',$source)
                            ->get();
        $data_dest = Currency_rate::whereBetween('date', [$startDate, $endDate])
                            ->whereRelation('currency','code','=',$dest)
                            ->get();

        if(count($data_source) < count($mock) || count($data_dest) < count($mock)){
            return response()->json(['data'=>[],'variance'=> [],'message' => "Donnée indisponible pour l'instant",'status' => false]);
        }
        $res = $mock->mapWithKeys(fn($x)=> [Carbon::parse($data_dest[$x]->date)->format('Y-m-d') => $data_dest[$x]->value/$data_source[$x]->value]);
        $variance = $mock->mapWithKeys(fn($x)=> [Carbon::parse($data_dest[$x]->date)->format('Y-m-d') => $data_dest[$x]->value/$data_source[$x]->value - $data_dest[$x-1]->value/$data_source[$x-1]->value]);
        return response()->json(['data'=> $res,'variance'=> $variance, 'status' => true]);
    }


}
