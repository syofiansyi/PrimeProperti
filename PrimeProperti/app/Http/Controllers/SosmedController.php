<?php

namespace App\Http\Controllers;
use App\Models\Sosmed;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SosmedController extends Controller
{
    public function index()
    {
        return Inertia::render('Sosmed/Index', [
            'sosmeds' => Sosmed::latest()->get()
        ]);
    }

    
    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'icon' => 'required|string',
            'medsos' => 'required|string',
        ]);

        Sosmed::create($request->all());

        return redirect()->back()->with('success', 'Sosmed berhasil ditambahkan!');
    }

    public function update(Request $request, Sosmed $sosmed)
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'icon' => 'required|string',
            'medsos' => 'required|string',
        ]);

        $sosmed->update($request->all());

        return redirect()->back()->with('success', 'Sosmed berhasil diperbarui!');
    }

    public function destroy(Sosmed $sosmed)
    {
        $sosmed->delete();

        return redirect()->back()->with('success', 'Sosmed berhasil dihapus!');
    }
}

