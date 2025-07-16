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
            'nowhatsap' => '62895424010064',
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
                    'thumbnail' => '"judul-blog-pertama_1751986970_zzBXj1.jpg"',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'title' => 'Judul Blog Kedua',
                    'description' => 'Deskripsi singkat blog kedua.',
                    'content' => '<p>Isi konten lengkap blog kedua.</p>',
                    'thumbnail' => '"judul-blog-keempat_1751985957_PdOGiU.jpg"',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'title' => 'Judul Blog Ketiga',
                    'description' => 'Deskripsi singkat blog ketiga.',
                    'content' => '<p>Isi konten lengkap blog ketiga.</p>',
                    'thumbnail' => '"judul-blog-ketiga_1751985945_JkUp0Y.jpg"',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'title' => 'Judul Blog Keempat',
                    'description' => 'Deskripsi singkat blog keempat.',
                    'content' => '<p>Isi konten lengkap blog keempat.</p>',
                    'thumbnail' => '"judul-blog-keempat_1751985957_PdOGiU.jpg"',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'title' => 'Judul Blog Kelima',
                    'description' => 'Deskripsi singkat blog kelima.',
                    'content' => '<p>Isi konten lengkap blog kelima.</p>',
                    'thumbnail' => '"judul-blog-kelima_1751985968_kfqo7P.jpg"',
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
                'image' => json_encode(["products\/D1lSbrE6z6CkbkVNglL19eZcZ6W9MneAiIWvCZOK.jpg", "products\/o5hJ4IPUBLxoTXFRryFBUiM3psDDYJnd8yJNhDGb.jpg", "products\/H4nRnfbPVTFw3mzTeddsjbOvXbS6e9fgL9uEnmh3.jpg", "products\/cUKZ77WEJALmBS9jZvCoKdp5BlueH6ycJIELTZpy.jpg", "products\/YSck8TekvWG84ujz8ChS8qICLPRkom1788md9UnU.jpg", "products\/2yOUBsaVN8INbUumCtJfqilnpf6lxlYETqOZSv9T.jpg"]),
                'badge' => json_encode(["Baru", "Promo"]),
                'features' => json_encode(['1', '3', '4', '5']),
                'popular' => true,
                'date' => now(),
                'tipe' => 'Rumah',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 1500000000,
                'satuan' => 'm2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti B',
                'location' => 'Bandung',
                'deskripsi' => 'Deskripsi properti B',
                'image' => json_encode(["products\/D1lSbrE6z6CkbkVNglL19eZcZ6W9MneAiIWvCZOK.jpg", "products\/o5hJ4IPUBLxoTXFRryFBUiM3psDDYJnd8yJNhDGb.jpg", "products\/H4nRnfbPVTFw3mzTeddsjbOvXbS6e9fgL9uEnmh3.jpg", "products\/cUKZ77WEJALmBS9jZvCoKdp5BlueH6ycJIELTZpy.jpg", "products\/YSck8TekvWG84ujz8ChS8qICLPRkom1788md9UnU.jpg", "products\/2yOUBsaVN8INbUumCtJfqilnpf6lxlYETqOZSv9T.jpg"]),
                'badge' => json_encode(["Baru", "Promo"]),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => false,
                'date' => now(),
                'tipe' => 'Apartemen',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 900000000,
                 'satuan' => 'm2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti C',
                'location' => 'Surabaya',
                'deskripsi' => 'Deskripsi properti C',
                'image' => json_encode(["products\/D1lSbrE6z6CkbkVNglL19eZcZ6W9MneAiIWvCZOK.jpg", "products\/o5hJ4IPUBLxoTXFRryFBUiM3psDDYJnd8yJNhDGb.jpg", "products\/H4nRnfbPVTFw3mzTeddsjbOvXbS6e9fgL9uEnmh3.jpg", "products\/cUKZ77WEJALmBS9jZvCoKdp5BlueH6ycJIELTZpy.jpg", "products\/YSck8TekvWG84ujz8ChS8qICLPRkom1788md9UnU.jpg", "products\/2yOUBsaVN8INbUumCtJfqilnpf6lxlYETqOZSv9T.jpg"]),
                'badge' => json_encode(["Baru", "Promo"]),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => true,
                'date' => now(),
                'tipe' => 'Ruko',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 2000000000,
                 'satuan' => 'm2',
                'created_at' => now(),
                'updated_at' => now(),
            ],


            [
                'title' => 'Properti 21',
                'location' => 'Depok',
                'deskripsi' => 'Deskripsi properti 21',
                'image' => json_encode(["products\/D1lSbrE6z6CkbkVNglL19eZcZ6W9MneAiIWvCZOK.jpg", "products\/o5hJ4IPUBLxoTXFRryFBUiM3psDDYJnd8yJNhDGb.jpg", "products\/H4nRnfbPVTFw3mzTeddsjbOvXbS6e9fgL9uEnmh3.jpg", "products\/cUKZ77WEJALmBS9jZvCoKdp5BlueH6ycJIELTZpy.jpg", "products\/YSck8TekvWG84ujz8ChS8qICLPRkom1788md9UnU.jpg", "products\/2yOUBsaVN8INbUumCtJfqilnpf6lxlYETqOZSv9T.jpg"]),
                'badge' => json_encode(["Baru", "Promo"]),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => true,
                'date' => now(),
                'tipe' => 'Rumah',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 1750000000,
                 'satuan' => 'm2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 22',
                'location' => 'Bogor',
                'deskripsi' => 'Deskripsi properti 22',
                'image' => json_encode(["products\/D1lSbrE6z6CkbkVNglL19eZcZ6W9MneAiIWvCZOK.jpg", "products\/o5hJ4IPUBLxoTXFRryFBUiM3psDDYJnd8yJNhDGb.jpg", "products\/H4nRnfbPVTFw3mzTeddsjbOvXbS6e9fgL9uEnmh3.jpg", "products\/cUKZ77WEJALmBS9jZvCoKdp5BlueH6ycJIELTZpy.jpg", "products\/YSck8TekvWG84ujz8ChS8qICLPRkom1788md9UnU.jpg", "products\/2yOUBsaVN8INbUumCtJfqilnpf6lxlYETqOZSv9T.jpg"]),
                'badge' => json_encode(["Baru", "Promo"]),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => false,
                'date' => now(),
                'tipe' => 'Apartemen',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 950000000,
                 'satuan' => 'm2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 23',
                'location' => 'Tangerang',
                'deskripsi' => 'Deskripsi properti 23',
                'image' => json_encode(["products\/D1lSbrE6z6CkbkVNglL19eZcZ6W9MneAiIWvCZOK.jpg", "products\/o5hJ4IPUBLxoTXFRryFBUiM3psDDYJnd8yJNhDGb.jpg", "products\/H4nRnfbPVTFw3mzTeddsjbOvXbS6e9fgL9uEnmh3.jpg", "products\/cUKZ77WEJALmBS9jZvCoKdp5BlueH6ycJIELTZpy.jpg", "products\/YSck8TekvWG84ujz8ChS8qICLPRkom1788md9UnU.jpg", "products\/2yOUBsaVN8INbUumCtJfqilnpf6lxlYETqOZSv9T.jpg"]),
                'badge' => json_encode(["Baru", "Promo"]),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => true,
                'date' => now(),
                'tipe' => 'Ruko',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 230000,
                 'satuan' => 'm2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 24',
                'location' => 'Bekasi',
                'deskripsi' => 'Deskripsi properti 24',
                'image' => json_encode(["products\/D1lSbrE6z6CkbkVNglL19eZcZ6W9MneAiIWvCZOK.jpg", "products\/o5hJ4IPUBLxoTXFRryFBUiM3psDDYJnd8yJNhDGb.jpg", "products\/H4nRnfbPVTFw3mzTeddsjbOvXbS6e9fgL9uEnmh3.jpg", "products\/cUKZ77WEJALmBS9jZvCoKdp5BlueH6ycJIELTZpy.jpg", "products\/YSck8TekvWG84ujz8ChS8qICLPRkom1788md9UnU.jpg", "products\/2yOUBsaVN8INbUumCtJfqilnpf6lxlYETqOZSv9T.jpg"]),
                'badge' => json_encode(["Baru", "Promo"]),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => false,
                'date' => now(),
                'tipe' => 'Rumah',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 30000,
                 'satuan' => 'm2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 25',
                'location' => 'Yogyakarta',
                'deskripsi' => 'Deskripsi properti 25',
                'image' => json_encode(["products\/D1lSbrE6z6CkbkVNglL19eZcZ6W9MneAiIWvCZOK.jpg", "products\/o5hJ4IPUBLxoTXFRryFBUiM3psDDYJnd8yJNhDGb.jpg", "products\/H4nRnfbPVTFw3mzTeddsjbOvXbS6e9fgL9uEnmh3.jpg", "products\/cUKZ77WEJALmBS9jZvCoKdp5BlueH6ycJIELTZpy.jpg", "products\/YSck8TekvWG84ujz8ChS8qICLPRkom1788md9UnU.jpg", "products\/2yOUBsaVN8INbUumCtJfqilnpf6lxlYETqOZSv9T.jpg"]),
                'badge' => json_encode(["Baru", "Promo"]),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => true,
                'date' => now(),
                'tipe' => 'Villa',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 2750000,
                 'satuan' => 'm2',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'title' => 'Properti 26',
                'location' => 'Malang',
                'deskripsi' => 'Deskripsi properti 26',
                'image' => json_encode(["products\/D1lSbrE6z6CkbkVNglL19eZcZ6W9MneAiIWvCZOK.jpg", "products\/o5hJ4IPUBLxoTXFRryFBUiM3psDDYJnd8yJNhDGb.jpg", "products\/H4nRnfbPVTFw3mzTeddsjbOvXbS6e9fgL9uEnmh3.jpg", "products\/cUKZ77WEJALmBS9jZvCoKdp5BlueH6ycJIELTZpy.jpg", "products\/YSck8TekvWG84ujz8ChS8qICLPRkom1788md9UnU.jpg", "products\/2yOUBsaVN8INbUumCtJfqilnpf6lxlYETqOZSv9T.jpg"]),
                'badge' => json_encode(["Baru", "Promo"]),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => false,
                'date' => now(),
                'tipe' => 'Rumah',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 1200000,
                 'satuan' => 'm2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 27',
                'location' => 'Semarang',
                'deskripsi' => 'Deskripsi properti 27',
                'image' => json_encode(["products\/D1lSbrE6z6CkbkVNglL19eZcZ6W9MneAiIWvCZOK.jpg", "products\/o5hJ4IPUBLxoTXFRryFBUiM3psDDYJnd8yJNhDGb.jpg", "products\/H4nRnfbPVTFw3mzTeddsjbOvXbS6e9fgL9uEnmh3.jpg", "products\/cUKZ77WEJALmBS9jZvCoKdp5BlueH6ycJIELTZpy.jpg", "products\/YSck8TekvWG84ujz8ChS8qICLPRkom1788md9UnU.jpg", "products\/2yOUBsaVN8INbUumCtJfqilnpf6lxlYETqOZSv9T.jpg"]),
                'badge' => json_encode(["Baru", "Promo"]),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => true,
                'date' => now(),
                'tipe' => 'Villa',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 2500000,
                 'satuan' => 'm2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 28',
                'location' => 'Makassar',
                'deskripsi' => 'Deskripsi properti 28',
                'image' => json_encode(["products\/D1lSbrE6z6CkbkVNglL19eZcZ6W9MneAiIWvCZOK.jpg", "products\/o5hJ4IPUBLxoTXFRryFBUiM3psDDYJnd8yJNhDGb.jpg", "products\/H4nRnfbPVTFw3mzTeddsjbOvXbS6e9fgL9uEnmh3.jpg", "products\/cUKZ77WEJALmBS9jZvCoKdp5BlueH6ycJIELTZpy.jpg", "products\/YSck8TekvWG84ujz8ChS8qICLPRkom1788md9UnU.jpg", "products\/2yOUBsaVN8INbUumCtJfqilnpf6lxlYETqOZSv9T.jpg"]),
                'badge' => json_encode(["Baru", "Promo"]),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => false,
                'date' => now(),
                'tipe' => 'Ruko',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 1000000,
                 'satuan' => 'm2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 29',
                'location' => 'Palembang',
                'deskripsi' => 'Deskripsi properti 29',
                'image' => json_encode(["products\/D1lSbrE6z6CkbkVNglL19eZcZ6W9MneAiIWvCZOK.jpg", "products\/o5hJ4IPUBLxoTXFRryFBUiM3psDDYJnd8yJNhDGb.jpg", "products\/H4nRnfbPVTFw3mzTeddsjbOvXbS6e9fgL9uEnmh3.jpg", "products\/cUKZ77WEJALmBS9jZvCoKdp5BlueH6ycJIELTZpy.jpg", "products\/YSck8TekvWG84ujz8ChS8qICLPRkom1788md9UnU.jpg", "products\/2yOUBsaVN8INbUumCtJfqilnpf6lxlYETqOZSv9T.jpg"]),
                'badge' => json_encode(["Baru", "Promo"]),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => true,
                'date' => now(),
                'tipe' => 'Rumah',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 1600000,
                 'satuan' => 'm2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 30',
                'location' => 'Cirebon',
                'deskripsi' => 'Deskripsi properti 30',
                'image' => json_encode(["products\/D1lSbrE6z6CkbkVNglL19eZcZ6W9MneAiIWvCZOK.jpg", "products\/o5hJ4IPUBLxoTXFRryFBUiM3psDDYJnd8yJNhDGb.jpg", "products\/H4nRnfbPVTFw3mzTeddsjbOvXbS6e9fgL9uEnmh3.jpg", "products\/cUKZ77WEJALmBS9jZvCoKdp5BlueH6ycJIELTZpy.jpg", "products\/YSck8TekvWG84ujz8ChS8qICLPRkom1788md9UnU.jpg", "products\/2yOUBsaVN8INbUumCtJfqilnpf6lxlYETqOZSv9T.jpg"]),
                'badge' => json_encode(["Baru", "Promo"]),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => false,
                'date' => now(),
                'tipe' => 'Ruko',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 11000000,
                 'satuan' => 'm2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Properti 31',
                'location' => 'Bali',
                'deskripsi' => 'Deskripsi properti 31',
                'image' => json_encode(["products\/D1lSbrE6z6CkbkVNglL19eZcZ6W9MneAiIWvCZOK.jpg", "products\/o5hJ4IPUBLxoTXFRryFBUiM3psDDYJnd8yJNhDGb.jpg", "products\/H4nRnfbPVTFw3mzTeddsjbOvXbS6e9fgL9uEnmh3.jpg", "products\/cUKZ77WEJALmBS9jZvCoKdp5BlueH6ycJIELTZpy.jpg", "products\/YSck8TekvWG84ujz8ChS8qICLPRkom1788md9UnU.jpg", "products\/2yOUBsaVN8INbUumCtJfqilnpf6lxlYETqOZSv9T.jpg"]),
                'badge' => json_encode(["Baru", "Promo"]),
                'features' => json_encode(['1', '3', '4', '5']),

                'popular' => true,
                'date' => now(),
                'tipe' => 'Villa',
                'maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.22181806355!2d106.8224306!3d-6.2000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e4b1f3b0b1%3A0x52ffb646e25c123b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1718533159423!5m2!1sen!2sid',
                'properti_detail' => json_encode(["3 Kamar", "2 Kamar Mandi", "1 Teras", "1 Halaman Parkir"]),
                'properti_fasilitas' => json_encode(["WiFi", "Keamanan 24 jam"]),
                'properti_pembayaran' => json_encode(["Cash", "KPR", "Bank"]),

                'price' => 350000000,
                 'satuan' => 'm2',
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
                'icon' => json_encode(["icons\/ZukqVPMN5Ph7O0e0swMCiXBrzxz2K6exZZp5BOhQ.png"]),
                'medsos' => 'https://x.com/',
                'username' => 'About',
                'kategori' => 'About',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'icon' => json_encode(["icons\/AIFvkDlVjzetSAMeXXTRLIGWEyhTIX9aOtqWIxWW.jpg"]),
                'medsos' => 'https://x.com/',
                'username' => 'Ig',
                'kategori' => 'Footer',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'icon' => json_encode(["icons\/o0K80jPTnKxc8kYfRI4TAkiSw8rElch8B5oXZ6rl.png"]),
                'medsos' => 'https://x.com/',
                'username' => 'x',
                'kategori' => 'Footer',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'icon' => json_encode(["icons\/KU7cvucf9CriU0uk546xYfhSFrAs4p0pcWKlKuHa.jpg"]),
                'medsos' => 'https://x.com/',
                'username' => 'wA',
                'kategori' => 'Footer',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'icon' => json_encode(["icons\/WKYazZbZt0oDs6B2QYNZ4NBvef551at4eBDEgL9B.jpg"]),
                'medsos' => 'https://x.com/',
                'username' => 'Contact',
                'kategori' => 'Contact',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'icon' => json_encode(["icons\/xnAOJlsUDYZp4O7ZDt6U7luu0Ut8Cp4BkHOPKeAi.jpg"]),
                'medsos' => 'https://x.com/',
                'username' => 'HiglightSection',
                'kategori' => 'HiglightSection',
                'created_at' => now(),
                'updated_at' => now(),
            ],


        ]);

        DB::table('contents')->insert([
            [
                'content' => json_encode(
                    ["Find Your Dream Property", "We provide quality properties at the best prices in strategic locations. Start your property journey with us.", "View Properties"]
                ),
                'kategori' => 'HighlightSection',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'content' => json_encode(
                    ["EXPLORE THE HOT INVESTMENT AREAS IN BALI", "Explore Our Available Villas In Bali's Most Developing Areas", "investment Strategy", "Get a customized investment plan with ROI projections and location insights.", "Market Analysis", "We provide up-to-date research on Bali's ever-growing property market.", "ROI Analysis", "Advice for Architects & Designers", "Make sure your villa is attractive to investors and guests with successful design tips.", "Our Agency Services", "Sales of villas and land", "We help you find and buy property with full legal support.", "Service support to clients", "Ongoing consultation and assistance through the purchasing process.", "Villa Management", "Property maintenance and guest-ready services after purchase.", "Service support to clients", "450", "Property Sold", "1200+", "Client", "16%", "Average ROI", "91%", "Client Satisfaction"]
                ),
                'kategori' => 'About',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'content' => json_encode(
                    ["Canggu", "120+", "Ubud", "95+", "Sanur", "80+", "Jimbaran", "60+", "EXPLORE THE HOT INVESTMENT AREAS IN BALI", "Explore Our Available Villas In Bali's Most Developing Areas"]
                ),
                'kategori' => 'HighlighProduct',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'content' => json_encode(
                    ["Get personalized service", "You will receive prompt support and guidance. Our expert                     team will provide top-notch assistance.", "REQUEST NOW", "Balimeridianproperty.com", "At Balimeridianproperty.com Real Estate, we guide you through your next property investment with confidence and expertise.", "Visit Us"]
                ),
                'kategori' => 'Footer',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'content' => json_encode(["Enjoy Your Day", "Contact us for the best property services in Bali", "Contact us via WhatsApp"]),
                'kategori' => 'Contact',
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
