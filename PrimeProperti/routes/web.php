<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductPagesController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\SosmedController;




// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [ProductPagesController::class, 'index'])->name('products.index');

// Tampilkan detail produk (sudah ada)
Route::get('/products/{id}', [ProductPagesController::class, 'show'])->name('products.show');


// Hapus produk
Route::delete('/products/{id}', [ProductController::class, 'destroy'])->name('products.destroy');

// Route::get('/detail', function () {
//     return Inertia::render('Detail');
// });
Route::get('/blog', function () {
    return Inertia::render('Blog');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // routes/web.php

Route::resource('products', ProductController::class);


Route::resource('blogs', BlogController::class);

Route::post('/upload-quill-image', function (Request $request) {
    if ($request->hasFile('image')) {
        $path = $request->file('image')->store('uploads', 'public');
        return response()->json([
            'url' => asset("storage/" . $path),
        ]);
    }

    return response()->json(['error' => 'Upload gagal'], 400);
});
Route::get('/blogs/{blog}/edit', [BlogController::class, 'edit'])->name('blogs.edit');
Route::put('/blogs/{blog}', [BlogController::class, 'update'])->name('blogs.update');
Route::get('/blogsPages/{id}', [BlogController::class, 'showPages'])->name('blogsPages.show');
Route::get('/blogs/{id}', [BlogController::class, 'show'])->name('blogs.show');


Route::resource('ratings', RatingController::class);
Route::resource('sosmeds', SosmedController::class);


});

require __DIR__.'/auth.php';
