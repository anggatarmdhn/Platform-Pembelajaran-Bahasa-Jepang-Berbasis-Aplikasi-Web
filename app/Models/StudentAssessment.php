<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

class StudentAssessment extends Model
{
    use HasFactory;

    protected $table = 'student_assessments';

    protected $fillable = [
        'user_id',
        'lesson_id',
        'exercise_title',
        'exercise_type',
        'total_questions',
        'correct_count',
        'wrong_count',
        'score',
        'grade',
        'status',
        'details',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'lesson_id' => 'integer',
        'total_questions' => 'integer',
        'correct_count' => 'integer',
        'wrong_count' => 'integer',
        'score' => 'integer',
        'details' => 'array',
    ];

    /**
     * Memastikan tabel student_assessments sudah terbentuk di SQLite
     */
    public static function ensureTableExists()
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

    /**
     * Menghitung Grade dan Status dari skor 0 - 100
     */
    public static function calculateGradeAndStatus(int $score): array
    {
        if ($score >= 85) {
            return ['grade' => 'A', 'status' => 'lulus'];
        } elseif ($score >= 70) {
            return ['grade' => 'B', 'status' => 'lulus'];
        } elseif ($score >= 60) {
            return ['grade' => 'C', 'status' => 'lulus'];
        } else {
            return ['grade' => 'D', 'status' => 'remedial'];
        }
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function lesson()
    {
        return $this->belongsTo(MateriLesson::class, 'lesson_id');
    }

    public function getGradeBadgeColorAttribute(): string
    {
        return match($this->grade) {
            'A' => '#10B981', // Hijau
            'B' => '#2563EB', // Biru
            'C' => '#F59E0B', // Kuning/Amber
            default => '#DC2626', // Merah (Remedial)
        };
    }
}

