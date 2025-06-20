<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/Product.php
class Product extends Model
{
    protected $fillable = ['title', 'location', 'description', 'image'];
   protected $casts = [
    'image' => 'array',
    'location' => 'array',
];


}

