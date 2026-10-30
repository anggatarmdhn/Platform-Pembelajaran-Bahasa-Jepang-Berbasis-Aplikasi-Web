<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GuruMasterController;
use App\Http\Controllers\MateriApiController;

/*
|--------------------------------------------------------------------------
| Web Routes - SIJapanese (Platform Edukasi Bahasa Jepang Interaktif)
|--------------------------------------------------------------------------
*/

// Halaman Utama Siswa & Aplikasi Interaktif
Route::get('/', function () {
    return view('app');
})->name('home');

Route::get('/index.html', function () {
    return redirect()->route('home');
});

// Halaman Login & Register Berdedikasi
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('login.post');
Route::get('/register', [AuthController::class, 'showRegisterForm'])->name('register');
Route::post('/register', [AuthController::class, 'register'])->name('register.post');
Route::match(['get', 'post'], '/logout', [AuthController::class, 'logout'])->name('logout');

// Autentikasi Pengguna & Status API
Route::get('/api/auth/status', [AuthController::class, 'status'])->name('auth.status');
Route::post('/api/auth/login', [AuthController::class, 'login'])->name('auth.login');
Route::post('/api/auth/register', [AuthController::class, 'register'])->name('auth.register');
Route::post('/api/auth/logout', [AuthController::class, 'logout'])->name('auth.logout');
Route::post('/api/auth/profile', [AuthController::class, 'updateProfile'])->name('auth.profile');
Route::post('/api/auth/score', [AuthController::class, 'addScore'])->name('auth.score');
Route::post('/api/auth/assessment', [AuthController::class, 'submitAssessment'])->name('auth.assessment');

// API Dinamis Materi & Level dari SQLite
Route::get('/api/materi/levels', [MateriApiController::class, 'getLevels'])->name('api.materi.levels');
Route::get('/api/materi/lessons/{code}', [MateriApiController::class, 'getLessonsByLevel'])->name('api.materi.lessons');
Route::get('/api/materi/lesson/{id}', [MateriApiController::class, 'getLessonById'])->name('api.materi.lesson.single');
Route::get('/api/materi/quests/{lessonId}', [MateriApiController::class, 'getLessonQuests'])->name('api.materi.quests');

// Proxy Audio Native Japanese TTS dengan File Cache Lokal
Route::get('/api/tts', function (\Illuminate\Http\Request $request) {
    $text = trim($request->query('q', ''));
    if (empty($text)) {
        return response('', 400);
    }
    $hash = md5($text);
    $cacheDir = storage_path('app/tts_cache');
    if (!is_dir($cacheDir)) {
        @mkdir($cacheDir, 0755, true);
    }
    $cacheFile = $cacheDir . '/' . $hash . '.mp3';
    if (!file_exists($cacheFile)) {
        $url = 'https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ja&q=' . urlencode($text);
        $ctx = stream_context_create([
            'http' => [
                'header' => "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\r\n",
                'timeout' => 4
            ]
        ]);
        $data = @file_get_contents($url, false, $ctx);
        if ($data && strlen($data) > 100) {
            @file_put_contents($cacheFile, $data);
        }
    }
    if (file_exists($cacheFile)) {
        return response()->file($cacheFile, [
            'Content-Type' => 'audio/mpeg',
            'Cache-Control' => 'public, max-age=86400',
        ]);
    }
    return redirect()->away('https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ja&q=' . urlencode($text));
})->name('api.tts');

// API Minigames & Bank Soal Kosakata dari Database SQLite
Route::get('/api/minigames/config', [GuruMasterController::class, 'getMinigameConfig'])->name('api.minigames.config');
Route::post('/api/minigames/questions', [GuruMasterController::class, 'storeMinigameQuestion'])->name('api.minigames.questions.store');
Route::put('/api/minigames/questions/{id}', [GuruMasterController::class, 'updateMinigameQuestion'])->name('api.minigames.questions.update');
Route::delete('/api/minigames/questions/{id}', [GuruMasterController::class, 'destroyMinigameQuestion'])->name('api.minigames.questions.destroy');
Route::post('/api/minigames/settings', [GuruMasterController::class, 'saveMinigameConfig'])->name('api.minigames.settings.save');
Route::post('/api/minigames/submodes', [GuruMasterController::class, 'storeMinigameSubMode'])->name('api.minigames.submodes.store');
Route::post('/api/minigames/submodes/toggle', [GuruMasterController::class, 'toggleMinigameSubMode'])->name('api.minigames.submodes.toggle');
Route::delete('/api/minigames/submodes', [GuruMasterController::class, 'deleteMinigameSubMode'])->name('api.minigames.submodes.delete');
Route::post('/api/minigames/reset', [GuruMasterController::class, 'resetMinigameDefault'])->name('api.minigames.reset');

// ========================================================
// DASHBOARD MASTER GURU (Khusus Guru Bahasa Jepang)
// ========================================================
Route::prefix('guru')->middleware(['web'])->group(function () {
    // Middleware pengecekan peran guru
    Route::group(['middleware' => function ($request, $next) {
        if (!auth()->check()) {
            return redirect()->route('login')->with('warning', 'Silakan login dengan Akun Guru untuk mengakses Dashboard Master.');
        }
        if (!auth()->user()->isGuru()) {
            return redirect()->route('login')->with('error', 'Akses ditolak. Akun Anda bukan Guru. Silakan login dengan Akun Guru.');
        }
        return $next($request);
    }], function () {
        Route::get('/', [GuruMasterController::class, 'index'])->name('guru.dashboard');
        Route::post('/profile', [AuthController::class, 'updateProfile'])->name('guru.profile.update');

        // CRUD Kotak Level Materi
        Route::post('/levels', [GuruMasterController::class, 'storeLevel'])->name('guru.levels.store');
        Route::post('/levels/preset', [GuruMasterController::class, 'addPresetLevel'])->name('guru.levels.preset');
        Route::put('/levels/{id}', [GuruMasterController::class, 'updateLevel'])->name('guru.levels.update');
        Route::delete('/levels/{id}', [GuruMasterController::class, 'destroyLevel'])->name('guru.levels.destroy');

        // CRUD Modul Materi
        Route::post('/lessons', [GuruMasterController::class, 'storeLesson'])->name('guru.lessons.store');
        Route::put('/lessons/{id}', [GuruMasterController::class, 'updateLesson'])->name('guru.lessons.update');
        Route::delete('/lessons/{id}', [GuruMasterController::class, 'destroyLesson'])->name('guru.lessons.destroy');

        // CRUD Bank Soal Quest & Kuis
        Route::post('/quests', [GuruMasterController::class, 'storeQuest'])->name('guru.quests.store');
        Route::put('/quests/{id}', [GuruMasterController::class, 'updateQuest'])->name('guru.quests.update');
        Route::delete('/quests/{id}', [GuruMasterController::class, 'destroyQuest'])->name('guru.quests.destroy');

        // CRUD Minigames & Bank Soal Kosakata (Database)
        Route::post('/minigames/questions', [GuruMasterController::class, 'storeMinigameQuestion'])->name('guru.minigames.questions.store');
        Route::put('/minigames/questions/{id}', [GuruMasterController::class, 'updateMinigameQuestion'])->name('guru.minigames.questions.update');
        Route::delete('/minigames/questions/{id}', [GuruMasterController::class, 'destroyMinigameQuestion'])->name('guru.minigames.questions.destroy');
        Route::post('/minigames/settings', [GuruMasterController::class, 'saveMinigameConfig'])->name('guru.minigames.settings.save');
        Route::post('/minigames/submodes', [GuruMasterController::class, 'storeMinigameSubMode'])->name('guru.minigames.submodes.store');
        Route::post('/minigames/submodes/toggle', [GuruMasterController::class, 'toggleMinigameSubMode'])->name('guru.minigames.submodes.toggle');
        Route::delete('/minigames/submodes', [GuruMasterController::class, 'deleteMinigameSubMode'])->name('guru.minigames.submodes.delete');
        Route::post('/minigames/reset', [GuruMasterController::class, 'resetMinigameDefault'])->name('guru.minigames.reset');
    });
});

