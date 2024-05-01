<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RateController;
use App\Http\Controllers\CurrencyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);


Route::middleware('auth:sanctum')->get('/rate', function (Request $request) {
    return $request->user();
});

//Currency routes
Route::get('/currencies',[CurrencyController::class, 'index']);
Route::post('/currencies', [CurrencyController::class, 'store']);
Route::get('/currencies/{id}',[CurrencyController::class, 'show'])->where(['id'=> '[0-9]+']);
Route::put('/currencies/{id}',[CurrencyController::class, 'modify'])->where(['id'=> '[0-9]+']);
Route::delete('/currencies/{id}',[CurrencyController::class, 'destroy'])->where(['id'=> '[0-9]+']);
Route::post('/currencies-update',[CurrencyController::class, 'update']);

//Currency rate routes
Route::get('/rates', [RateController::class, 'index']);
Route::post('/rates', [RateController::class, 'store']);
Route::put('/rates/{id}', [RateController::class, 'modify'])->where(['id'=> '[0-9]+']);
Route::delete('/rates/{id}', [RateController::class, 'destroy'])->where(['id'=> '[0-9]+']);
Route::get('/rates/{id}', [RateController::class, 'show'])->where(['id'=> '[0-9]+']);
Route::get('/rates/{code}', [RateController::class, 'val'])->where(['code'=> '[a-zA-Z0-9]+']);
Route::post('/rates-update', [RateController::class, 'update2']);

//currency converter route
Route::get('/converter/{source}-{value}-{dest}',[RateController::class, 'converter']);
Route::get('/historique/{source}-{dest}',[RateController::class, 'getHistorique']);
