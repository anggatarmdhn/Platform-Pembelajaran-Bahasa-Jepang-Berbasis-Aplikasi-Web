<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('role')->default('siswa'); // 'guru' or 'siswa'
            $table->string('avatar')->default('👦');
            $table->integer('score')->default(0);
            $table->text('completed_lessons')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('materi_levels', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique(); // n5, n4, n3, n2, n1
            $table->string('name');            // N5 Dasar, N4 Percakapan
            $table->string('sub');             // Fondasi & Aksara
            $table->string('accent_color')->default('#D9383A');
            $table->integer('order')->default(1);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('materi_lessons', function (Blueprint $table) {
            $table->id();
            $table->foreignId('level_id')->constrained('materi_levels')->onDelete('cascade');
            $table->integer('lesson_number')->default(1);
            $table->string('title');
            $table->string('subtitle')->nullable();
            $table->string('badge')->default('Dasar');
            $table->string('badge_class')->default('badge-red');
            $table->integer('est_minutes')->default(15);
            $table->string('accent_color')->default('#D9383A');
            $table->string('num_bg')->default('#FEE2E2');
            $table->text('intro_content')->nullable();
            $table->integer('order')->default(1);
            $table->boolean('is_published')->default(true);
            $table->timestamps();
        });

        Schema::create('lesson_quests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lesson_id')->constrained('materi_lessons')->onDelete('cascade');
            $table->integer('question_number')->default(1);
            $table->text('question');
            $table->string('badge_text')->default('Tantangan Kuis');
            $table->text('options'); // JSON encoded options
            $table->text('explanation')->nullable();
            $table->integer('points')->default(25);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('lesson_quests');
        Schema::dropIfExists('materi_lessons');
        Schema::dropIfExists('materi_levels');
        Schema::dropIfExists('users');
    }
};
