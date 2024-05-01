<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    use HasFactory;

    protected $fillable = [
        'Devise',
        'Nom',
        'Symbole',
        'Code',
        'Territoire',
    ];

    public function rate(){
        return $this->hasMany(Currency_rate::class);
    }
}
