<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MinigameQuestion extends Model
{
    use HasFactory;

    protected $fillable = [
        'game_id',
        'sub_mode',
        'char',
        'romaji',
        'meaning',
        'extra_data',
        'order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'order' => 'integer',
    ];

    public function config()
    {
        return $this->belongsTo(MinigameConfig::class, 'game_id', 'game_id');
    }
}
