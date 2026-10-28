<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LessonQuest extends Model
{
    use HasFactory;

    protected $fillable = [
        'lesson_id',
        'question_number',
        'question',
        'badge_text',
        'image_url',
        'audio_text',
        'audio_label',
        'options',
        'explanation',
        'points',
    ];

    protected $casts = [
        'options' => 'array',
        'question_number' => 'integer',
        'points' => 'integer',
    ];

    public function lesson()
    {
        return $this->belongsTo(MateriLesson::class, 'lesson_id');
    }
}
