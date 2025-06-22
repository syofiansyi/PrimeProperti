<?php

namespace App\Http\Controllers;

use App\Models\Sosmed;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SosmedController extends Controller
{
    public function index()
    {
        $sosmeds = Sosmed::all();
        return Inertia::render('Sosmed/Index', [
            'sosmeds' => $sosmeds,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string|max:255',
            'medsos' => 'required|string|max:255',
            'icon.*' => 'nullable|image|mimes:png,jpg,jpeg,svg|max:2048',
        ]);

        $iconPaths = [];
        if ($request->hasFile('icon')) {
            foreach ($request->file('icon') as $file) {
                $iconPaths[] = $file->store('icons', 'public');
            }
        }

        Sosmed::create([
            'username' => $validated['username'],
            'medsos' => $validated['medsos'],
            'icon' => $iconPaths,
        ]);

        return back();
    }

    public function update(Request $request, Sosmed $sosmed)
    {
        $validated = $request->validate([
            'username' => 'required|string|max:255',
            'medsos' => 'required|string|max:255',
            'icon.*' => 'nullable|image|mimes:png,jpg,jpeg,svg|max:2048',
        ]);

        $iconPaths = $sosmed->icon ?? [];

        if ($request->hasFile('icon')) {
            // Optional: delete old icons
            if (!empty($iconPaths)) {
                foreach ($iconPaths as $oldIcon) {
                    Storage::disk('public')->delete($oldIcon);
                }
            }

            $iconPaths = [];
            foreach ($request->file('icon') as $file) {
                $iconPaths[] = $file->store('icons', 'public');
            }
        }

        $sosmed->update([
            'username' => $validated['username'],
            'medsos' => $validated['medsos'],
            'icon' => $iconPaths,
        ]);

        return back();
    }

    public function destroy(Sosmed $sosmed)
    {
        if (!empty($sosmed->icon)) {
            foreach ($sosmed->icon as $icon) {
                Storage::disk('public')->delete($icon);
            }
        }

        $sosmed->delete();
        return back();
    }
}
