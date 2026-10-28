<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MateriLevel extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'sub',
        'accent_color',
        'order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'order' => 'integer',
    ];

    public function lessons()
    {
        return $this->hasMany(MateriLesson::class, 'level_id')->orderBy('order', 'asc');
    }
}
