<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'avatar',
        'score',
        'completed_lessons',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'password' => 'hashed',
        'score' => 'integer',
        'completed_lessons' => 'array',
    ];

    public function isGuru(): bool
    {
        return $this->role === 'guru';
    }

    public function isSiswa(): bool
    {
        return $this->role === 'siswa';
    }

    public function getRoleBadgeAttribute(): string
    {
        return $this->isGuru() ? 'Guru Jepang' : 'Siswa';
    }

    public function getRoleBadgeClassAttribute(): string
    {
        return $this->isGuru() ? 'badge-guru' : 'badge-siswa';
    }
}
