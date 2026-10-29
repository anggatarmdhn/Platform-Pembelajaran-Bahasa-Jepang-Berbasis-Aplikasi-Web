<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('minigame_configs', function (Blueprint $table) {
            $table->id();
            $table->string('game_id')->unique(); // 'kana-blast', 'sky-defense', 'flash-card', etc.
            $table->string('title');
            $table->integer('duration')->default(60);
            $table->json('sub_modes')->nullable();
            $table->timestamps();
        });

        Schema::create('minigame_questions', function (Blueprint $table) {
            $table->id();
            $table->string('game_id')->index(); // 'kana-blast', 'sky-defense', 'flash-card', etc.
            $table->string('sub_mode')->index(); // 'vocab-hiragana', 'vocab-katakana', 'kanji-n5', 'hiragana', etc.
            $table->string('char'); // 'かさ', 'ねこ', 'パン', '日', dll.
            $table->string('romaji'); // 'kasa', 'neko', 'pan', 'hi', dll.
            $table->string('meaning'); // 'Payung', 'Kucing', 'Roti', 'Matahari', dll.
            $table->text('extra_data')->nullable(); // JSON atau string tambahan (jawaban word builder, contoh kalimat, dll)
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('minigame_questions');
        Schema::dropIfExists('minigame_configs');
    }
};

