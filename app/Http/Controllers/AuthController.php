<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class AuthController extends Controller
{
    // Tampilkan Halaman Login Berdedikasi
    public function showLoginForm()
    {
        if (Auth::check()) {
            return Auth::user()->isGuru() 
                ? redirect()->route('guru.dashboard') 
                : redirect()->route('home');
        }

        return view('auth.login');
    }

    // Tampilkan Halaman Register Berdedikasi
    public function showRegisterForm()
    {
        if (Auth::check()) {
            return Auth::user()->isGuru() 
                ? redirect()->route('guru.dashboard') 
                : redirect()->route('home');
        }

        return view('auth.register');
    }
    // Cek status user aktif
    public function status()
    {
        if (Auth::check()) {
            return response()->json([
                'logged_in' => true,
                'user' => [
                    'id' => Auth::user()->id,
                    'name' => Auth::user()->name,
                    'email' => Auth::user()->email,
                    'role' => Auth::user()->role,
                    'avatar' => Auth::user()->avatar,
                    'score' => Auth::user()->score,
                    'completed_lessons' => Auth::user()->completed_lessons ?? [],
                    'is_guru' => Auth::user()->isGuru(),
                ]
            ]);
        }

        return response()->json([
            'logged_in' => false,
            'user' => null
        ]);
    }

    // Login Form / Ajax
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials, true)) {
            $request->session()->regenerate();

            if ($request->wantsJson()) {
                return response()->json([
                    'success' => true,
                    'message' => 'Selamat datang kembali, ' . Auth::user()->name . '!',
                    'user' => Auth::user(),
                    'redirect' => Auth::user()->isGuru() ? route('guru.dashboard') : route('home')
                ]);
            }

            return Auth::user()->isGuru() 
                ? redirect()->route('guru.dashboard') 
                : redirect()->route('home')->with('success', 'Selamat datang kembali!');
        }

        if ($request->wantsJson()) {
            return response()->json([
                'success' => false,
                'message' => 'Email atau kata sandi tidak cocok. Silakan coba lagi.'
            ], 422);
        }

        return back()->withErrors([
            'email' => 'Email atau kata sandi tidak cocok.',
        ]);
    }

    // Quick Demo Switch Account (Siswa <-> Guru)
    public function quickSwitch(Request $request)
    {
        $role = $request->input('role', 'guru');
        $targetEmail = $role === 'guru' ? 'guru@sijapanese.sch.id' : 'kenji@sijapanese.sch.id';
        
        $user = User::where('email', $targetEmail)->first();
        if ($user) {
            Auth::login($user, true);
            $request->session()->regenerate();
            
            return response()->json([
                'success' => true,
                'message' => 'Beralih ke akun demo: ' . $user->name . ' (' . ucfirst($user->role) . ')',
                'user' => $user,
                'redirect' => $user->isGuru() ? route('guru.dashboard') : route('home')
            ]);
        }

        return response()->json(['success' => false, 'message' => 'Akun tidak ditemukan'], 404);
    }

    // Register Akun Baru
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
            'avatar' => ['nullable', 'string'],
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => 'siswa', // Default pendaftaran umum sebagai siswa
            'avatar' => $validated['avatar'] ?? '👦',
            'score' => 0,
            'completed_lessons' => [],
        ]);

        Auth::login($user, true);
        $request->session()->regenerate();

        if ($request->wantsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Akun berhasil dibuat! Selamat belajar bahasa Jepang.',
                'user' => $user,
                'redirect' => route('home')
            ]);
        }

        return redirect()->route('home')->with('success', 'Akun berhasil dibuat!');
    }

    // Logout
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'redirect' => route('home')]);
        }

        return redirect()->route('home')->with('info', 'Kamu telah keluar dari akun.');
    }

    // Update Profil
    public function updateProfile(Request $request)
    {
        if (!Auth::check()) {
            return response()->json(['success' => false, 'message' => 'Unauthorized'], 401);
        }

        $user = Auth::user();
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'avatar' => ['nullable', 'string', 'max:10'],
            'password' => ['nullable', 'string', 'min:6'],
        ]);

        $user->name = $validated['name'];
        if (!empty($validated['avatar'])) {
            $user->avatar = $validated['avatar'];
        }
        if (!empty($validated['password'])) {
            $user->password = Hash::make($validated['password']);
        }
        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Profil berhasil diperbarui!',
            'user' => $user
        ]);
    }

    // Tambah Poin Siswa (dari Kuis Quest / Mini Games)
    public function addScore(Request $request)
    {
        $points = (int) $request->input('points', 0);
        $lessonId = $request->input('lesson_id');

        if (Auth::check() && $points > 0) {
            $user = Auth::user();
            $user->score += $points;

            if ($lessonId) {
                $completed = $user->completed_lessons ?? [];
                if (!in_array($lessonId, $completed)) {
                    $completed[] = (int) $lessonId;
                    $user->completed_lessons = $completed;
                }
            }

            $user->save();

            return response()->json([
                'success' => true,
                'new_score' => $user->score,
                'added' => $points,
                'completed_lessons' => $user->completed_lessons,
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'User belum login'
        ]);
    }
}
