<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HistoriqueController;
use App\Http\Controllers\DeviseController;
use App\Http\Controllers\TauxChangeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

/*
--------------------------------------------------------------------------
 Pour le devise
--------------------------------------------------------------------------
*/

Route::get('/devises', [DeviseController::class, 'index']);
Route::post('/devises', [DeviseController::class, 'store']);
Route::get('/devises/{id}', [DeviseController::class, 'show']);
Route::put('/devises/{id}', [DeviseController::class, 'update']);
Route::delete('/devises/{id}', [DeviseController::class, 'destroy']);

/*
--------------------------------------------------------------------------
 Pour le cours de change
--------------------------------------------------------------------------
*/
Route::get('/historique', [HistoriqueController::class, 'index']);
Route::post('/historique', [HistoriqueController::class, 'store']);
Route::get('/historique/{id}', [HistoriqueController::class, 'show']);
Route::put('/historique/{id}', [HistoriqueController::class, 'update']);
Route::delete('/historique/{id}', [HistoriqueController::class, 'destroy']);

/*
--------------------------------------------------------------------------
 Pour le taux de change
--------------------------------------------------------------------------
*/
Route::get('/taux', [TauxChangeController::class, 'index']);
Route::post('/taux', [TauxChangeController::class, 'store']);
Route::get('/taux/{id}', [TauxChangeController::class, 'show']);
Route::put('/taux/{id}', [TauxChangeController::class, 'update']);
Route::delete('/taux/{id}', [TauxChangeController::class, 'destroy']);


/*
--------------------------------------------------------------------------
 Pour les différents fonctionnalités
 --------------------------------------------------------------------------
 */
Route::post('/devises/devise/convert', [DeviseController::class, 'convert']);
Route::get('/taux/daily/{id}', [TauxChangeController::class, 'getDailyCours']);
Route::get('/tauxWithdevises', [TauxChangeController::class, 'getAllTauxChangeWithDevises']);


