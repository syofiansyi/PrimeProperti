<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    protected $fillable = [
        'kategori',
        'content',
    ];

    protected $casts = [
        'content' => 'array',
    ];
}
