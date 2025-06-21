<?php

namespace App\Http\Controllers;
use App\Models\Rating;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RatingController extends Controller
{
    public function index()
    {
        return Inertia::render('Rating/Index', [
            'ratings' => Rating::latest()->get()
        ]);
    }

    
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'ulasan' => 'required|string',
            'total_rate' => 'required|integer|between:1,5',
        ]);

        Rating::create($request->all());

        return redirect()->back()->with('success', 'Rating berhasil ditambahkan!');
    }

    public function update(Request $request, Rating $rating)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'ulasan' => 'required|string',
            'total_rate' => 'required|integer|between:1,5',
        ]);

        $rating->update($request->all());

        return redirect()->back()->with('success', 'Rating berhasil diperbarui!');
    }

    public function destroy(Rating $rating)
    {
        $rating->delete();

        return redirect()->back()->with('success', 'Rating berhasil dihapus!');
    }
}

