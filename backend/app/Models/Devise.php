<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Devise extends Model
{
    use HasFactory;
    // protected $primaryKey = 'id';

    public function tauxChangeSources(){
        return $this->hasMany(TauxChange::class, 'devise_source_id', 'id');
    }
    public function tauxChangeDestinations(){
        return $this->hasMany(TauxChange::class, 'devise_source_id', 'id');
    }


}
