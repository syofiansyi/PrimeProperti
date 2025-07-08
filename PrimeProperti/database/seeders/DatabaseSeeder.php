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
            'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Blogs
        DB::table('blogs')->insert(
            [
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
                ],
                [
                    'title' => 'Judul Blog Ketiga',
                    'description' => 'Deskripsi singkat blog ketiga.',
                    'content' => '<p>Isi konten lengkap blog ketiga.</p>',
                    'thumbnail' => 'blog3.jpg',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'title' => 'Judul Blog Keempat',
                    'description' => 'Deskripsi singkat blog keempat.',
                    'content' => '<p>Isi konten lengkap blog keempat.</p>',
                    'thumbnail' => 'blog4.jpg',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'title' => 'Judul Blog Kelima',
                    'description' => 'Deskripsi singkat blog kelima.',
                    'content' => '<p>Isi konten lengkap blog kelima.</p>',
                    'thumbnail' => 'blog5.jpg',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'title' => 'Judul Blog Keenam',
                    'description' => 'Deskripsi singkat blog keenam.',
                    'content' => '<p>Isi konten lengkap blog keenam.</p>',
                    'thumbnail' => 'blog6.jpg',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'title' => 'Judul Blog Ketujuh',
                    'description' => 'Deskripsi singkat blog ketujuh.',
                    'content' => '<p>Isi konten lengkap blog ketujuh.</p>',
                    'thumbnail' => 'blog7.jpg',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'title' => 'Judul Blog Kedelapan',
                    'description' => 'Deskripsi singkat blog kedelapan.',
                    'content' => '<p>Isi konten lengkap blog kedelapan.</p>',
                    'thumbnail' => 'blog8.jpg',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'title' => 'Judul Blog Kesembilan',
                    'description' => 'Deskripsi singkat blog kesembilan.',
                    'content' => '<p>Isi konten lengkap blog kesembilan.</p>',
                    'thumbnail' => 'blog9.jpg',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'title' => 'Judul Blog Kesepuluh',
                    'description' => 'Deskripsi singkat blog kesepuluh.',
                    'content' => '<p>Isi konten lengkap blog kesepuluh.</p>',
                    'thumbnail' => 'blog10.jpg',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]
        );

        // Products
        DB::table('products')->insert([
            [
                'title' => 'Properti A',
                'location' => 'Jakarta Selatan',
                'deskripsi' => 'Deskripsi properti A',
                'image' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
                'badge' => json_encode(['Baru, Promo']),
                'features' => json_encode(['1', '3', '4', '5']),
                'popular' => true,
                'date' => now(),
                'tipe' => 'Rumah',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 1500000000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti B',
                'location' => 'Bandung',
                'deskripsi' => 'Deskripsi properti B',
                'image' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
                'badge' => json_encode(['Baru, Promo']),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => false,
                'date' => now(),
                'tipe' => 'Apartemen',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 900000000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti C',
                'location' => 'Surabaya',
                'deskripsi' => 'Deskripsi properti C',
                'image' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
                'badge' => json_encode(['Baru, Promo']),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => true,
                'date' => now(),
                'tipe' => 'Ruko',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 2000000000,
                'created_at' => now(),
                'updated_at' => now(),
            ],


            [
                'title' => 'Properti 21',
                'location' => 'Depok',
                'deskripsi' => 'Deskripsi properti 21',
                'image' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
                'badge' => json_encode(['Baru, Promo']),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => true,
                'date' => now(),
                'tipe' => 'Rumah',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 1750000000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 22',
                'location' => 'Bogor',
                'deskripsi' => 'Deskripsi properti 22',
                'image' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
                'badge' => json_encode(['Baru, Promo']),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => false,
                'date' => now(),
                'tipe' => 'Apartemen',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 950000000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 23',
                'location' => 'Tangerang',
                'deskripsi' => 'Deskripsi properti 23',
                'image' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
                'badge' => json_encode(['Baru, Promo']),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => true,
                'date' => now(),
                'tipe' => 'Ruko',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 230000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 24',
                'location' => 'Bekasi',
                'deskripsi' => 'Deskripsi properti 24',
                'image' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
                'badge' => json_encode(['Baru, Promo']),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => false,
                'date' => now(),
                'tipe' => 'Rumah',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 30000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 25',
                'location' => 'Yogyakarta',
                'deskripsi' => 'Deskripsi properti 25',
                'image' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
                'badge' => json_encode(['Baru, Promo']),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => true,
                'date' => now(),
                'tipe' => 'Villa',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 2750000,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'title' => 'Properti 26',
                'location' => 'Malang',
                'deskripsi' => 'Deskripsi properti 26',
                'image' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
                'badge' => json_encode(['Baru, Promo']),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => false,
                'date' => now(),
                'tipe' => 'Rumah',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 1200000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 27',
                'location' => 'Semarang',
                'deskripsi' => 'Deskripsi properti 27',
                'image' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
                'badge' => json_encode(['Baru, Promo']),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => true,
                'date' => now(),
                'tipe' => 'Villa',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 2500000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 28',
                'location' => 'Makassar',
                'deskripsi' => 'Deskripsi properti 28',
                'image' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
                'badge' => json_encode(['Baru, Promo']),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => false,
                'date' => now(),
                'tipe' => 'Ruko',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 1000000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 29',
                'location' => 'Palembang',
                'deskripsi' => 'Deskripsi properti 29',
                'image' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
                'badge' => json_encode(['Baru, Promo']),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => true,
                'date' => now(),
                'tipe' => 'Rumah',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 1600000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 30',
                'location' => 'Cirebon',
                'deskripsi' => 'Deskripsi properti 30',
                'image' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
                'badge' => json_encode(['Baru, Promo']),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => false,
                'date' => now(),
                'tipe' => 'Ruko',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 11000000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 31',
                'location' => 'Bali',
                'deskripsi' => 'Deskripsi properti 31',
                'image' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
                'badge' => json_encode(['Baru, Promo']),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => true,
                'date' => now(),
                'tipe' => 'Villa',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 350000000,
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
            ],

            [
                'nama' => 'Citra',
                'ulasan' => 'Lokasi strategis dan pelayanan ramah.',
                'total_rate' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama' => 'Dedi',
                'ulasan' => 'Harga sesuai dengan kualitas.',
                'total_rate' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama' => 'Eka',
                'ulasan' => 'Kondisi properti perlu diperbaiki.',
                'total_rate' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama' => 'Fani',
                'ulasan' => 'Lingkungan sekitar nyaman dan aman.',
                'total_rate' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama' => 'Gilang',
                'ulasan' => 'Desain rumah modern dan menarik.',
                'total_rate' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama' => 'Hana',
                'ulasan' => 'Proses transaksi mudah dan cepat.',
                'total_rate' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nama' => 'Ivan',
                'ulasan' => 'Kurang puas dengan fasilitas yang disediakan.',
                'total_rate' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ]


        ]);

        // Sosmeds
       DB::table('sosmeds')->insert([
    [
        'icon' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
        'medsos' => 'https://x.com/',
        'username' => '@syofian',
        'kategori' => 'footer',
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'icon' => json_encode(["icons\/OZx8Q1bVdTUZ09hCOU1xslEA8MFRZK0Y49Badbf1.jpg"]),
        'medsos' => 'https://x.com/',
        'username' => '@syofianfb',
         'kategori' => 'footer',
        'created_at' => now(),
        'updated_at' => now(),
    ],
]);

 DB::table('contents')->insert([
            [
                'content' => json_encode([
                    "Find Your Dream Property",
                    "We provide quality properties at the best prices in strategic locations. Start your property journey with us.",
                    "View Properties"
                ]),
                'kategori' => 'HighlightSection',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
