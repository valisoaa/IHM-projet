<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Currency;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('currencies', function (Blueprint $table) {
            $table->id();
            $table->string('Devise');
            $table->string('Nom');
            $table->string('Symbole');
            $table->string('Code')->unique();
            $table->string('Territoire');
            $table->timestamps();
        });


        Schema::table('currency_rates', function (Blueprint $table) {
            $table->foreignIdFor(Currency::class);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('currencies');
    }
};
