<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        // Blogs
        Schema::create('blogs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->longText('content')->nullable(); // ✅ TANPA change()
            $table->string('thumbnail')->nullable();
            $table->timestamps();
        });

        // Products
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->text('location');
            $table->text('deskripsi');
            $table->text('image')->nullable();
            $table->text('badge')->nullable();
            $table->text('features')->nullable();
            $table->boolean('popular')->nullable();
            $table->date('date')->nullable();
            $table->string('tipe')->nullable();
            $table->text('maps')->nullable();
            $table->text('properti_detail')->nullable();
            $table->text('properti_fasilitas')->nullable();
            $table->text('properti_pembayaran')->nullable();
            $table->bigInteger('price')->nullable();
            $table->timestamps();
        });

        // Ratings
        Schema::create('ratings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nama');
            $table->text('ulasan');
            $table->unsignedTinyInteger('total_rate');
            $table->timestamps();
        });

        // Sosmeds
        Schema::create('sosmeds', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('username')->nullable();
            $table->text('medsos')->nullable();
            $table->text('icon')->nullable();
            $table->text('kategori')->nullable();
            $table->timestamps();
        });

        // Users
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->string('nowhatsap')->nullable();
            $table->text('maps')->nullable();
        });
        Schema::create('contents', function (Blueprint $table) {
            $table->id();
            $table->string('kategori');
            $table->text('content')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('sosmeds');
        Schema::dropIfExists('ratings');
        Schema::dropIfExists('products');
        Schema::dropIfExists('blogs');
    }
};
