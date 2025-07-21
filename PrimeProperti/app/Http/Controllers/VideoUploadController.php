<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'video' => 'required|file|mimes:mp4,webm,ogg|max:10240', // max 10MB
        ]);

        if ($request->hasFile('video')) {
            $file = $request->file('video');
            $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('public/videos', $filename);

            return response()->json([
                'url' => asset(str_replace('public', 'storage', $path)),
                'filename' => $filename,
            ]);
        }

        return response()->json(['error' => 'No video uploaded'], 400);
    }
}