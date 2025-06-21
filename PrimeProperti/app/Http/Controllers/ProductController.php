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
            'location' => 'required|string',
            'features' => 'required|array',
            'features.*' => 'string',
            'badge' => 'required|array',
            'badge.*' => 'string',
            'properti_detail' => 'required|array',
            'properti_detail.*' => 'string',
            'properti_pembayaran' => 'required|array',
            'properti_pembayaran.*' => 'string',
            'properti_fasilitas' => 'required|array',
            'properti_fasilitas.*' => 'string',
            'tipe' => 'required|string',
            'deskripsi' => 'required|string',
            'price' => 'required|int',
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
            'location' => 'required|string',
            'features' => 'required|array',
            'features.*' => 'string',
            'badge' => 'required|array',
            'badge.*' => 'string',
            'properti_detail' => 'required|array',
            'properti_detail.*' => 'string',
            'properti_pembayaran' => 'required|array',
            'properti_pembayaran.*' => 'string',
            'properti_fasilitas' => 'required|array',
            'properti_fasilitas.*' => 'string',
            'tipe' => 'required|string',
            'deskripsi' => 'required|string',
            'price' => 'required|int',
            'images.*' => 'nullable|image|max:2048',
        ]);

        $data = $request->only(['title', 'price', 'location', 'features','badge','properti_detail','properti_pembayaran','properti_fasilitas','tipe','tipe','deskripsi']);

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


   public function destroy($id)
{
    $product = Product::findOrFail($id);
    $product->delete();

    return redirect()->back()->with('message', 'Product deleted successfully!');
}

}
