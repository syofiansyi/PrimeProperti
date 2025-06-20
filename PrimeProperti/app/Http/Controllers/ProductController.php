<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Product/Index', [
            'products' => Product::latest()->get(),
        ]);
    }

   public function store(Request $request)
{
    $data = $request->validate([
        'title' => 'required|string',
           'location' => 'required|array',
    'location.*' => 'string',
        'description' => 'required|string',
        'images.*' => 'nullable|image|max:2048',
    ]);

    $imagePaths = [];

    if ($request->hasFile('images')) {
        foreach ($request->file('images') as $file) {
            $imagePaths[] = $file->store('products', 'public');
        }
    }

    $data['image'] = $imagePaths;

    Product::create($data);

    return redirect()->back()->with('success', 'Product created');
}

//    public function update(Request $request, Product $product)
// {
//     $data = $request->validate([
//         'title' => 'required|string',
//           'location' => 'required|array',
//     'location.*' => 'string',
//         'description' => 'required|string',
//         'images.*' => 'nullable|image|max:2048',
//     ]);

//     $imagePaths = $product->image ?? []; // ambil image lama

//     if ($request->hasFile('images')) {
//         foreach ($request->file('images') as $file) {
//             $imagePaths[] = $file->store('products', 'public');
//         }
//     }

//     $data['image'] = $imagePaths;

//     $product->update($data);

//     return redirect()->back()->with('success', 'Product updated');
// }

public function update(Request $request, Product $product)
{
    $request->validate([
        'title' => 'required|string',
        'description' => 'required|string',
        'location' => 'required|array',
        'location.*' => 'string',
        'images.*' => 'nullable|image|max:2048',
    ]);

    $data = $request->only(['title', 'description', 'location']);

    // 🔁 Hapus gambar lama kalau ada file baru
    if ($request->hasFile('images')) {
        // Hapus gambar lama dari storage
        foreach ((array) $product->image as $oldImage) {
            if (\Storage::disk('public')->exists($oldImage)) {
                \Storage::disk('public')->delete($oldImage);
            }
        }

        // Simpan gambar baru
        $newImages = [];
        foreach ($request->file('images') as $file) {
            $newImages[] = $file->store('products', 'public');
        }
        $data['image'] = $newImages;
    }

    $product->update($data);

    return redirect()->back()->with('success', 'Product updated.');
}


    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()->back()->with('success', 'Product deleted');
    }
}
