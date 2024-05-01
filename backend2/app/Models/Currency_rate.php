<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Currency_rate extends Model
{
    use HasFactory;


    protected $fillable = [
        'value',
        'date'
    ];

    public $timestamps = false;

    public function currency(){
        return $this->belongsTo(Currency::class);
    }
}
