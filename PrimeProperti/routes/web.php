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
use App\Http\Controllers\ContentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;




// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [ProductPagesController::class, 'index'])->name('productsPages.index');

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
Route::get('/blogs/{id}', [BlogController::class, 'show'])->name('blogs.show');


Route::resource('ratings', RatingController::class);

// Route::resource('sosmeds', SosmedController::class);
// Route::resource('content', ContentController::class);


});
Route::get('/blogsPages/{id}', [BlogController::class, 'showPages'])->name('blogsPages.show');


Route::post('/video', function (Request $request) {
    // Validate the request
    $request->validate([
        'video' => [
            'required',
            'file',
            'mimetypes:video/mp4,video/quicktime,video/x-msvideo,video/x-flv,video/webm',
            'max:102400' // 100MB in kilobytes
        ]
    ]);

    try {
        if (!$request->hasFile('video')) {
            return response()->json([
                'error' => 'No video file uploaded'
            ], 400);
        }

        $file = $request->file('video');
        
        // Generate a unique filename
        $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('videos', $filename, 'public');

        // Get additional video metadata
        $size = $file->getSize();
        $duration = 0; // You would need a package like pbmedia/laravel-ffmpeg to get duration
        
        // Generate public URL
        $url = Storage::disk('public')->url($path);

        return response()->json([
            'name' => $filename,
            'url' => $url,
            'size' => $size,
            'duration' => $duration,
            'mime_type' => $file->getMimeType(),
            'uploaded_at' => now()->toDateTimeString()
        ]);

    } catch (FileException $e) {
        return response()->json([
            'error' => 'File upload failed',
            'message' => $e->getMessage()
        ], 500);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'An unexpected error occurred',
            'message' => $e->getMessage()
        ], 500);
    }
})->name('video.upload');

Route::delete('/video/{filename}', function (Request $request, $filename) {
    try {
        // Validate filename to prevent directory traversal
        if (!preg_match('/^[a-f0-9\-]{36}\.[a-z0-9]+$/i', $filename)) {
            return response()->json([
                'error' => 'Invalid filename format'
            ], 400);
        }

        $filePath = 'videos/' . $filename;

        // Check if file exists
        if (!Storage::disk('public')->exists($filePath)) {
            return response()->json([
                'error' => 'Video not found'
            ], 404);
        }

        // Delete the file
        $deleted = Storage::disk('public')->delete($filePath);

        if (!$deleted) {
            return response()->json([
                'error' => 'Failed to delete video'
            ], 500);
        }

        return response()->json([
            'message' => 'Video deleted successfully',
            'filename' => $filename
        ]);

    } catch (\Exception $e) {
        return response()->json([
            'error' => 'An error occurred while deleting the video',
            'message' => $e->getMessage()
        ], 500);
    }
})->name('video.delete');
require __DIR__.'/auth.php';
