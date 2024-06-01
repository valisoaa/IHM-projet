<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('taux_changes', function (Blueprint $table) {
            $table->id();
            $table->decimal('taux');
            $table->foreignId('devise_source_id')->constrained()->onDelete('cascade');
            $table->foreignId('devise_destination_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('taux_changes');
    }
};
