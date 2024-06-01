<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TauxChange extends Model
{
    use HasFactory;

    public function deviseSource(){
        return $this->belongsTo(Devise::class, 'devise_source_id', 'id');
    }

    public function deviseDestination(){
        return $this->belongsTo(Devise::class, 'devise_destination_id', 'id');
    }

    public function historiques(){
        return $this->hasMany(Historique::class);

    }


}
