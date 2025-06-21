<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        // Blogs
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->text('content')->nullable();
            $table->string('thumbnail')->nullable();
            $table->timestamps();
        });

        // Products
        Schema::create('products', function (Blueprint $table) {
            $table->id();
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
            $table->integer('price')->nullable();
            $table->timestamps();
        });

        // Ratings
        Schema::create('ratings', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->text('ulasan');
           $table->unsignedTinyInteger('total_rate');
            $table->timestamps();
// Validasi dilakukan di model / controller, bukan di schema

        });

        // Sosmeds
        Schema::create('sosmeds', function (Blueprint $table) {
            $table->id();
            $table->string('username', 50);
            $table->string('medsos', 50);
            $table->text('icon')->nullable();
            $table->timestamps();
        });

        // Users
        Schema::create('users', function (Blueprint $table) {
            $table->id();
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

      
        

    }

    public function down(): void {
       
        Schema::dropIfExists('users');
        Schema::dropIfExists('sosmeds');
        Schema::dropIfExists('ratings');
        Schema::dropIfExists('products');
        Schema::dropIfExists('blogs');
    }
};
