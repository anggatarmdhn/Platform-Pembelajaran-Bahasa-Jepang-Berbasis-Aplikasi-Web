<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MateriLesson extends Model
{
    use HasFactory;

    protected $fillable = [
        'level_id',
        'lesson_number',
        'title',
        'subtitle',
        'badge',
        'badge_class',
        'est_minutes',
        'accent_color',
        'num_bg',
        'comic_image',
        'audio_text',
        'audio_label',
        'mascot_tip',
        'intro_content',
        'order',
        'is_published',
    ];

    protected $casts = [
        'is_published' => 'boolean',
        'lesson_number' => 'integer',
        'est_minutes' => 'integer',
        'order' => 'integer',
    ];

    public function level()
    {
        return $this->belongsTo(MateriLevel::class, 'level_id');
    }

    public function quests()
    {
        return $this->hasMany(LessonQuest::class, 'lesson_id')->orderBy('question_number', 'asc');
    }
}
