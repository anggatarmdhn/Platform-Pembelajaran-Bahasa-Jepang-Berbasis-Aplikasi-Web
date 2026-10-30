<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('student_assessments')) {
            Schema::create('student_assessments', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('user_id');
                $table->unsignedBigInteger('lesson_id')->nullable();
                $table->string('exercise_title');
                $table->string('exercise_type')->default('quest');
                $table->integer('total_questions')->default(0);
                $table->integer('correct_count')->default(0);
                $table->integer('wrong_count')->default(0);
                $table->integer('score')->default(0);
                $table->string('grade', 5)->default('C');
                $table->string('status', 20)->default('lulus');
                $table->text('details')->nullable();
                $table->timestamps();

                $table->index('user_id');
                $table->index('lesson_id');
                $table->index('created_at');
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('student_assessments');
    }
};

