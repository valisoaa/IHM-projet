<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Historique extends Model
{
    use HasFactory;


    public function tauxChange() {
        return $this->belongsTo(TauxChange::class);
    }
}
