<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sosmed extends Model
{
    use HasFactory;

    protected $fillable = ['username', 'medsos', 'icon','kategori'];
    protected $casts = [
        'icon' => 'array',
       
    ];
}