<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;


class BlogController extends Controller
{
    public function index()
    {
        return Inertia::render('Blogs/Index', [
            'blogs' => Blog::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Blogs/Create');
    }

    public function store(Request $request)
    {
      $validated = $request->validate([
    'title' => 'required|string|max:255',
    'description' => 'nullable|string',
    'content' => 'required|string',
    'thumbnail' => 'nullable|image|max:2048',
]);

if ($request->hasFile('thumbnail')) {
    $file = $request->file('thumbnail');
$slug = Str::slug($request->title);
$filename = $slug . '_' . time() . '_' . Str::random(6) . '.' . $file->getClientOriginalExtension();
    $file->storeAs('thumbnails', $filename, 'public'); // disimpan ke storage
    $validated['thumbnail'] = $filename; // HANYA nama file
}


Blog::create($validated);

          return redirect()->route('blogs.index')->with('success', 'Blog berhasil ditambahkan!');
    }

    public function show(Blog $blog)
    {
        return Inertia::render('Blogs/Show', [
            'blog' => $blog,
        ]);
    }
   public function showPages(string $id)
    {        
        $blog = DB::table('blogs')->where('id', $id)->first();

        return Inertia::render('Blog', [
            'blog' => $blog,
        ]);

     
    }

   public function edit(Blog $blog)
{
    return Inertia::render('Blogs/Edit', [
        'blog' => $blog,
    ]);
}


   public function update(Request $request, Blog $blog)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'nullable|string',
        'content' => 'required|string',
        'thumbnail' => 'nullable|image|max:2048',
    ]);

   if ($request->hasFile('thumbnail')) {
    // Hapus thumbnail lama jika ada
    if ($blog->thumbnail && Storage::disk('public')->exists('thumbnails/' . $blog->thumbnail)) {
        Storage::disk('public')->delete('thumbnails/' . $blog->thumbnail);
    }

    // Simpan thumbnail baru dengan nama kustom
    $file = $request->file('thumbnail');
$slug = Str::slug($request->title);
$filename = $slug . '_' . time() . '_' . Str::random(6) . '.' . $file->getClientOriginalExtension();
    $file->storeAs('thumbnails', $filename, 'public');

    // Simpan hanya nama file ke database
    $validated['thumbnail'] = $filename;
}


    $blog->update($validated);

    return redirect()->route('blogs.index')->with('success', 'Blog berhasil diperbarui!');
}


    public function destroy(Blog $blog)
    {
        $blog->delete();

        return redirect()->route('blogs.index');
    }

    
}
