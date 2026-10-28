<?php

namespace App\Http\Controllers;

use App\Models\MateriLevel;
use App\Models\MateriLesson;
use App\Models\LessonQuest;
use Illuminate\Http\Request;

class MateriApiController extends Controller
{
    // Ambil semua kotak level aktif
    public function getLevels()
    {
        $levels = MateriLevel::where('is_active', true)
            ->withCount(['lessons' => function($q) {
                $q->where('is_published', true);
            }])
            ->orderBy('order', 'asc')
            ->get();

        return response()->json([
            'success' => true,
            'levels' => $levels
        ]);
    }

    // Ambil daftar materi berdasarkan kode level (contoh: 'n5', 'n4', 'n3')
    public function getLessonsByLevel($code)
    {
        $level = MateriLevel::where('code', strtolower($code))->first();

        if (!$level) {
            return response()->json([
                'success' => false,
                'message' => 'Level tidak ditemukan'
            ], 404);
        }

        $lessons = MateriLesson::where('level_id', $level->id)
            ->where('is_published', true)
            ->withCount('quests')
            ->orderBy('order', 'asc')
            ->get();

        return response()->json([
            'success' => true,
            'level' => $level,
            'lessons' => $lessons
        ]);
    }

    // Ambil detail soal quest untuk pelajaran tertentu
    public function getLessonQuests($lessonId)
    {
        $quests = LessonQuest::where('lesson_id', $lessonId)
            ->orderBy('question_number', 'asc')
            ->get();

        return response()->json([
            'success' => true,
            'quests' => $quests
        ]);
    }

    // Ambil detail satu materi pelajaran (beserta komik, audio & catatan)
    public function getLessonById($id)
    {
        $lesson = MateriLesson::with('level')->find($id);
        if (!$lesson) {
            return response()->json(['success' => false, 'message' => 'Materi tidak ditemukan'], 404);
        }
        return response()->json(['success' => true, 'lesson' => $lesson]);
    }
}
