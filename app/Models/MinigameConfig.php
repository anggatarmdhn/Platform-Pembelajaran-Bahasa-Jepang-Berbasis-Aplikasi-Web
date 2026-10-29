<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MinigameConfig extends Model
{
    use HasFactory;

    protected $fillable = [
        'game_id',
        'title',
        'duration',
        'sub_modes',
    ];

    protected $casts = [
        'sub_modes' => 'array',
        'duration' => 'integer',
    ];

    public function questions()
    {
        return $this->hasMany(MinigameQuestion::class, 'game_id', 'game_id');
    }
}
