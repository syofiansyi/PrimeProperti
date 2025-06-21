<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Users
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@123',
            'email_verified_at' => now(),
            'password' => Hash::make('123'),
            'nowhatsap' => '081234567890',
            'maps' => 'https://maps.google.com',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Blogs
        DB::table('blogs')->insert([
            [
                'title' => 'Judul Blog Pertama',
                'description' => 'Deskripsi singkat blog pertama.',
                'content' => '<p>Isi konten lengkap blog pertama.</p>',
                'thumbnail' => 'blog1.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Judul Blog Kedua',
                'description' => 'Deskripsi singkat blog kedua.',
                'content' => '<p>Isi konten lengkap blog kedua.</p>',
                'thumbnail' => 'blog2.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        // Products
        DB::table('products')->insert([
            [
                'title' => 'Properti A',
                'location' => 'Jakarta Selatan',
                'deskripsi' => 'Deskripsi properti A',
                'image' => 'produk1.jpg',
                'badge' => 'Baru',
                'features' => 'Kolam Renang, AC, Garasi',
                'popular' => true,
                'date' => now(),
                'tipe' => 'Rumah',
                'maps' => 'https://maps.google.com',
                'properti_detail' => '3 Kamar, 2 Kamar Mandi',
                'properti_fasilitas' => 'WiFi, Keamanan 24 jam',
                'properti_pembayaran' => 'Cash/KPR',
                'price' => 1500000000,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        // Ratings
        DB::table('ratings')->insert([
            [
                'nama' => 'Andi',
                'ulasan' => 'Properti bagus dan nyaman!',
                'total_rate' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama' => 'Budi',
                'ulasan' => 'Cukup memuaskan.',
                'total_rate' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        // Sosmeds
        DB::table('sosmeds')->insert([
            [
                'username' => '@syofian',
                'medsos' => 'Instagram',
                'icon' => 'fab fa-instagram',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'username' => '@syofianfb',
                'medsos' => 'Facebook',
                'icon' => 'fab fa-facebook',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
