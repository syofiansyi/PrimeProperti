<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ContentController extends Controller
{
    public function index()
    {
        $contents = Content::all();
        return inertia('Content/Index', [
            'contents' => $contents,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'kategori' => 'required|string',
            'content' => 'required|array',
            'content.*' => 'required|string',
        ]);

        Content::create([
            'kategori' => $validated['kategori'],
            'content' => $validated['content'],
        ]);

        return redirect()->back()->with('success', 'Content berhasil ditambahkan');
    }

    public function update(Request $request, Content $content)
    {
        $validated = $request->validate([
            'kategori' => 'required|string',
            'content' => 'required|array',
            'content.*' => 'required|string',
        ]);

        $content->update([
            'kategori' => $validated['kategori'],
            'content' => $validated['content'],
        ]);

        return redirect()->back()->with('success', 'Content berhasil diperbarui');
    }

    public function destroy(Content $content)
    {
        $content->delete();

        return redirect()->back()->with('success', 'Content berhasil dihapus');
    }
}
