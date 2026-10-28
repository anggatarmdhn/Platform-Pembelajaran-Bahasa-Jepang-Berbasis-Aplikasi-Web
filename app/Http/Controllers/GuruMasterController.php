<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\MateriLevel;
use App\Models\MateriLesson;
use App\Models\LessonQuest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GuruMasterController extends Controller
{
    // Pastikan hanya Guru yang bisa mengakses
    public function __construct()
    {
        // Auth check disematkan di route middleware
    }

    // Dashboard Utama Master Guru
    public function index()
    {
        $levels = MateriLevel::with(['lessons' => function($q) {
            $q->withCount('quests');
        }])->orderBy('order', 'asc')->get();

        $lessons = MateriLesson::with(['level', 'quests'])->orderBy('order', 'asc')->get();
        $quests = LessonQuest::with('lesson.level')->orderBy('id', 'desc')->get();
        $students = User::where('role', 'siswa')->orderBy('score', 'desc')->get();

        $stats = [
            'total_students' => $students->count(),
            'total_levels' => $levels->count(),
            'active_levels' => $levels->where('is_active', true)->count(),
            'total_lessons' => $lessons->count(),
            'total_quests' => $quests->count(),
            'highest_score' => $students->max('score') ?? 0,
        ];

        return view('guru.dashboard', compact('levels', 'lessons', 'quests', 'students', 'stats'));
    }

    // ==========================================
    // 1. MANAJEMEN KOTAK LEVEL (N5, N4, N3, N2, N1, Kustom)
    // ==========================================
    public function storeLevel(Request $request)
    {
        $validated = $request->validate([
            'code' => ['required', 'string', 'max:15', 'unique:materi_levels,code'],
            'name' => ['required', 'string', 'max:50'],
            'sub' => ['required', 'string', 'max:100'],
            'accent_color' => ['nullable', 'string', 'max:20'],
            'order' => ['nullable', 'integer'],
        ]);

        $maxOrder = MateriLevel::max('order') ?? 0;

        $level = MateriLevel::create([
            'code' => strtolower(trim($validated['code'])),
            'name' => $validated['name'],
            'sub' => $validated['sub'],
            'accent_color' => $validated['accent_color'] ?? '#2563EB',
            'order' => $validated['order'] ?? ($maxOrder + 1),
            'is_active' => true,
        ]);

        if ($request->wantsJson()) {
            return response()->json([
                'success' => true,
                'message' => "Kotak level {$level->name} berhasil ditambahkan!",
                'level' => $level
            ]);
        }

        return back()->with('success', "Kotak level {$level->name} berhasil ditambahkan!");
    }

    // Preset One-Click Add (N3 / N2 / N1)
    public function addPresetLevel(Request $request)
    {
        $preset = strtolower($request->input('preset', 'n3'));
        $presets = [
            'n3' => [
                'name' => 'N3 Menengah',
                'sub' => 'Pemahaman Konteks & Kalimat Majemuk',
                'accent_color' => '#F59E0B',
            ],
            'n2' => [
                'name' => 'N2 Lanjutan',
                'sub' => 'Artikel, Berita & Bahasa Formal',
                'accent_color' => '#10B981',
            ],
            'n1' => [
                'name' => 'N1 Mahir',
                'sub' => 'Kelancaran Total & Nuansa Tinggi',
                'accent_color' => '#8B5CF6',
            ],
        ];

        if (!isset($presets[$preset])) {
            return response()->json(['success' => false, 'message' => 'Preset tidak valid'], 400);
        }

        $existing = MateriLevel::where('code', $preset)->first();
        if ($existing) {
            $existing->is_active = true;
            $existing->save();
            return response()->json([
                'success' => true,
                'message' => "Kotak level {$existing->name} sudah ada dan diaktifkan kembali!",
                'level' => $existing
            ]);
        }

        $maxOrder = MateriLevel::max('order') ?? 0;
        $level = MateriLevel::create([
            'code' => $preset,
            'name' => $presets[$preset]['name'],
            'sub' => $presets[$preset]['sub'],
            'accent_color' => $presets[$preset]['accent_color'],
            'order' => $maxOrder + 1,
            'is_active' => true,
        ]);

        // Buat 1 materi pembuka otomatis agar level tidak kosong
        MateriLesson::create([
            'level_id' => $level->id,
            'lesson_number' => 1,
            'title' => "Pengantar {$level->name}",
            'subtitle' => "Pondasi dan sasaran kurikulum tingkat {$level->name}",
            'badge' => 'Modul Baru',
            'badge_class' => 'badge-blue',
            'est_minutes' => 20,
            'accent_color' => $level->accent_color,
            'num_bg' => '#EFF6FF',
            'order' => 1,
            'is_published' => true,
        ]);

        return response()->json([
            'success' => true,
            'message' => "Kotak level {$level->name} berhasil ditambahkan dan langsung aktif di materi siswa!",
            'level' => $level
        ]);
    }

    public function updateLevel(Request $request, $id)
    {
        $level = MateriLevel::findOrFail($id);

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:50'],
            'sub' => ['required', 'string', 'max:100'],
            'accent_color' => ['nullable', 'string', 'max:20'],
            'is_active' => ['nullable', 'boolean'],
            'order' => ['nullable', 'integer'],
        ]);

        $level->update([
            'name' => $validated['name'],
            'sub' => $validated['sub'],
            'accent_color' => $validated['accent_color'] ?? $level->accent_color,
            'is_active' => $request->has('is_active') ? (bool) $request->input('is_active') : $level->is_active,
            'order' => $validated['order'] ?? $level->order,
        ]);

        if ($request->wantsJson()) {
            return response()->json([
                'success' => true,
                'message' => "Level {$level->name} berhasil diperbarui!",
                'level' => $level
            ]);
        }

        return back()->with('success', "Level {$level->name} berhasil diperbarui!");
    }

    public function destroyLevel($id)
    {
        $level = MateriLevel::findOrFail($id);
        $name = $level->name;
        $level->delete();

        return response()->json([
            'success' => true,
            'message' => "Kotak level {$name} beserta materinya berhasil dihapus."
        ]);
    }

    // ==========================================
    // 2. MANAJEMEN MODUL MATERI
    // ==========================================
    public function storeLesson(Request $request)
    {
        $validated = $request->validate([
            'level_id' => ['required', 'exists:materi_levels,id'],
            'lesson_number' => ['required', 'integer'],
            'title' => ['required', 'string', 'max:150'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'badge' => ['nullable', 'string', 'max:50'],
            'badge_class' => ['nullable', 'string', 'max:30'],
            'est_minutes' => ['nullable', 'integer'],
            'accent_color' => ['nullable', 'string', 'max:20'],
            'comic_image' => ['nullable', 'string', 'max:255'],
            'comic_file' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,svg,webp', 'max:3072'],
            'audio_text' => ['nullable', 'string'],
            'audio_label' => ['nullable', 'string', 'max:100'],
            'mascot_tip' => ['nullable', 'string'],
        ]);

        $level = MateriLevel::findOrFail($validated['level_id']);

        $comicPath = !empty($validated['comic_image']) ? trim($validated['comic_image']) : null;
        if ($request->hasFile('comic_file')) {
            $file = $request->file('comic_file');
            $filename = 'lesson_new_' . time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/lessons'), $filename);
            $comicPath = 'uploads/lessons/' . $filename;
        }

        $lesson = MateriLesson::create([
            'level_id' => $level->id,
            'lesson_number' => $validated['lesson_number'],
            'title' => $validated['title'],
            'subtitle' => $validated['subtitle'] ?? '',
            'badge' => $validated['badge'] ?? 'Materi Baru',
            'badge_class' => $validated['badge_class'] ?? 'badge-blue',
            'est_minutes' => $validated['est_minutes'] ?? 15,
            'accent_color' => $validated['accent_color'] ?? $level->accent_color,
            'comic_image' => $comicPath,
            'audio_text' => !empty($validated['audio_text']) ? trim($validated['audio_text']) : null,
            'audio_label' => !empty($validated['audio_label']) ? trim($validated['audio_label']) : null,
            'mascot_tip' => $validated['mascot_tip'] ?? '',
            'num_bg' => '#EFF6FF',
            'order' => $validated['lesson_number'],
            'is_published' => true,
        ]);

        if ($request->wantsJson()) {
            return response()->json([
                'success' => true,
                'message' => "Materi '{$lesson->title}' berhasil ditambahkan ke {$level->name}!",
                'lesson' => $lesson
            ]);
        }

        return back()->with('success', "Materi '{$lesson->title}' berhasil ditambahkan!");
    }

    public function updateLesson(Request $request, $id)
    {
        $lesson = MateriLesson::findOrFail($id);

        $validated = $request->validate([
            'title' => ['required', 'string', 'max:150'],
            'subtitle' => ['nullable', 'string', 'max:255'],
            'badge' => ['nullable', 'string', 'max:50'],
            'est_minutes' => ['nullable', 'integer'],
            'accent_color' => ['nullable', 'string', 'max:20'],
            'comic_image' => ['nullable', 'string', 'max:255'],
            'comic_file' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,svg,webp', 'max:3072'],
            'remove_comic_image' => ['nullable', 'string'],
            'audio_text' => ['nullable', 'string'],
            'audio_label' => ['nullable', 'string', 'max:100'],
            'mascot_tip' => ['nullable', 'string'],
            'is_published' => ['nullable', 'boolean'],
        ]);

        $updateData = [
            'title' => $validated['title'],
            'subtitle' => $validated['subtitle'] ?? '',
            'badge' => $validated['badge'] ?? $lesson->badge,
            'est_minutes' => $validated['est_minutes'] ?? $lesson->est_minutes,
            'audio_text' => !empty($validated['audio_text']) ? trim($validated['audio_text']) : null,
            'audio_label' => !empty($validated['audio_label']) ? trim($validated['audio_label']) : null,
            'mascot_tip' => $validated['mascot_tip'] ?? '',
        ];

        if (isset($validated['accent_color'])) {
            $updateData['accent_color'] = $validated['accent_color'];
        }

        if ($request->input('remove_comic_image') === '1' || $request->input('remove_comic_image') === 'true') {
            $updateData['comic_image'] = null;
        } elseif ($request->hasFile('comic_file')) {
            $file = $request->file('comic_file');
            $filename = 'lesson_' . $lesson->id . '_' . time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/lessons'), $filename);
            $updateData['comic_image'] = 'uploads/lessons/' . $filename;
        } elseif (array_key_exists('comic_image', $validated)) {
            $updateData['comic_image'] = !empty($validated['comic_image']) ? trim($validated['comic_image']) : null;
        }

        $lesson->update($updateData);

        if ($request->wantsJson()) {
            return response()->json([
                'success' => true,
                'message' => "Materi '{$lesson->title}' berhasil diperbarui!",
                'lesson' => $lesson
            ]);
        }

        return back()->with('success', "Materi & pembahasan komik '{$lesson->title}' berhasil diperbarui!");
    }

    public function destroyLesson($id)
    {
        $lesson = MateriLesson::findOrFail($id);
        $title = $lesson->title;
        $lesson->delete();

        return response()->json([
            'success' => true,
            'message' => "Materi '{$title}' berhasil dihapus."
        ]);
    }

    // ==========================================
    // 3. MANAJEMEN SOAL QUEST / KUIS
    // ==========================================
    public function storeQuest(Request $request)
    {
        $validated = $request->validate([
            'lesson_id' => ['required', 'exists:materi_lessons,id'],
            'question' => ['required', 'string'],
            'badge_text' => ['nullable', 'string', 'max:100'],
            'image_url' => ['nullable', 'string', 'max:255'],
            'image_file' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,svg,webp', 'max:3072'],
            'points' => ['nullable', 'integer'],
            'explanation' => ['nullable', 'string'],
            'audio_text' => ['nullable', 'string'],
            'audio_label' => ['nullable', 'string', 'max:100'],
            'opt_a' => ['required', 'string'],
            'opt_b' => ['required', 'string'],
            'opt_c' => ['required', 'string'],
            'opt_d' => ['required', 'string'],
            'correct_opt' => ['required', 'in:A,B,C,D'],
        ]);

        $options = [
            ['label' => 'A', 'text' => trim($validated['opt_a']), 'isCorrect' => $validated['correct_opt'] === 'A'],
            ['label' => 'B', 'text' => trim($validated['opt_b']), 'isCorrect' => $validated['correct_opt'] === 'B'],
            ['label' => 'C', 'text' => trim($validated['opt_c']), 'isCorrect' => $validated['correct_opt'] === 'C'],
            ['label' => 'D', 'text' => trim($validated['opt_d']), 'isCorrect' => $validated['correct_opt'] === 'D'],
        ];

        $nextNum = (LessonQuest::where('lesson_id', $validated['lesson_id'])->max('question_number') ?? 0) + 1;

        $imageUrl = !empty($validated['image_url']) ? trim($validated['image_url']) : null;
        if ($request->hasFile('image_file')) {
            $file = $request->file('image_file');
            $filename = 'quest_' . time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/quests'), $filename);
            $imageUrl = 'uploads/quests/' . $filename;
        }

        $quest = LessonQuest::create([
            'lesson_id' => $validated['lesson_id'],
            'question_number' => $nextNum,
            'question' => $validated['question'],
            'badge_text' => $validated['badge_text'] ?: "Soal {$nextNum} • Quest Latihan",
            'image_url' => $imageUrl,
            'audio_text' => !empty($validated['audio_text']) ? trim($validated['audio_text']) : null,
            'audio_label' => !empty($validated['audio_label']) ? trim($validated['audio_label']) : null,
            'options' => $options,
            'explanation' => $validated['explanation'] ?? '',
            'points' => $validated['points'] ?? 25,
        ]);

        if ($request->wantsJson()) {
            return response()->json([
                'success' => true,
                'message' => "Soal quest baru berhasil ditambahkan!",
                'quest' => $quest
            ]);
        }

        return back()->with('success', "Soal quest baru berhasil ditambahkan!");
    }

    public function updateQuest(Request $request, $id)
    {
        $quest = LessonQuest::findOrFail($id);

        $validated = $request->validate([
            'lesson_id' => ['nullable', 'exists:materi_lessons,id'],
            'question' => ['required', 'string'],
            'badge_text' => ['nullable', 'string', 'max:100'],
            'image_url' => ['nullable', 'string', 'max:255'],
            'image_file' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,svg,webp', 'max:3072'],
            'remove_image' => ['nullable', 'string'],
            'points' => ['nullable', 'integer'],
            'explanation' => ['nullable', 'string'],
            'audio_text' => ['nullable', 'string'],
            'audio_label' => ['nullable', 'string', 'max:100'],
            'opt_a' => ['required', 'string'],
            'opt_b' => ['required', 'string'],
            'opt_c' => ['required', 'string'],
            'opt_d' => ['required', 'string'],
            'correct_opt' => ['required', 'in:A,B,C,D'],
        ]);

        $options = [
            ['label' => 'A', 'text' => trim($validated['opt_a']), 'isCorrect' => $validated['correct_opt'] === 'A'],
            ['label' => 'B', 'text' => trim($validated['opt_b']), 'isCorrect' => $validated['correct_opt'] === 'B'],
            ['label' => 'C', 'text' => trim($validated['opt_c']), 'isCorrect' => $validated['correct_opt'] === 'C'],
            ['label' => 'D', 'text' => trim($validated['opt_d']), 'isCorrect' => $validated['correct_opt'] === 'D'],
        ];

        $updateData = [
            'question' => $validated['question'],
            'badge_text' => $validated['badge_text'] ?: $quest->badge_text,
            'options' => $options,
            'explanation' => $validated['explanation'] ?? '',
            'points' => $validated['points'] ?? $quest->points,
            'audio_text' => !empty($validated['audio_text']) ? trim($validated['audio_text']) : null,
            'audio_label' => !empty($validated['audio_label']) ? trim($validated['audio_label']) : null,
        ];

        if (!empty($validated['lesson_id'])) {
            $updateData['lesson_id'] = $validated['lesson_id'];
        }

        if ($request->input('remove_image') === '1' || $request->input('remove_image') === 'true') {
            $updateData['image_url'] = null;
        } elseif ($request->hasFile('image_file')) {
            $file = $request->file('image_file');
            $filename = 'quest_' . time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/quests'), $filename);
            $updateData['image_url'] = 'uploads/quests/' . $filename;
        } elseif (array_key_exists('image_url', $validated)) {
            $updateData['image_url'] = !empty($validated['image_url']) ? trim($validated['image_url']) : null;
        }

        $quest->update($updateData);

        if ($request->wantsJson()) {
            return response()->json([
                'success' => true,
                'message' => "Soal quest #{$quest->id} berhasil diperbarui!",
                'quest' => $quest
            ]);
        }

        return back()->with('success', "Soal quest #{$quest->id} berhasil diperbarui!");
    }

    public function destroyQuest($id)
    {
        $quest = LessonQuest::findOrFail($id);
        $quest->delete();

        return response()->json([
            'success' => true,
            'message' => "Soal quest berhasil dihapus."
        ]);
    }
}
