<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/Product.php
class Product extends Model
{
    protected $fillable = ['title', 'popular', 'location', 'maps', 'price', 'image', 'features', 'badge', 'properti_detail', 'properti_pembayaran', 'properti_fasilitas', 'tipe','deskripsi', 'satuan'];
    protected $casts = [
        'image' => 'array',
        'features' => 'array',
        'badge' => 'array',
        'properti_fasilitas' => 'array',
        'properti_detail' => 'array',
        'properti_pembayaran' => 'array',
    ];
}
