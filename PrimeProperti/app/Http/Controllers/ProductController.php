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
    try {
        // 1. Normalisasi string "null" dan bersihkan array kosong
        $arrayKeys = ['badge', 'features', 'properti_detail', 'properti_pembayaran', 'properti_fasilitas'];

        foreach ($arrayKeys as $key) {
            $items = $request->input($key);
            if (is_array($items)) {
                $filtered = array_filter($items, fn($val) => $val !== 'null' && $val !== null && $val !== '');
                $request->merge([$key => array_values($filtered)]);
            } elseif ($items === "null" || $items === null) {
                $request->merge([$key => []]);
            }
        }

        // 2. Validasi input
        $validated = $request->validate([
            'title' => 'required|string',
            'location' => 'required|string',
            'maps' => 'nullable|string',

            'features' => 'nullable|array',
            'features.*' => 'string',

            'badge' => 'nullable|array',
            'badge.*' => 'string',

            'properti_detail' => 'nullable|array',
            'properti_detail.*' => 'string',

            'properti_pembayaran' => 'nullable|array',
            'properti_pembayaran.*' => 'string',

            'properti_fasilitas' => 'nullable|array',
            'properti_fasilitas.*' => 'string',

            'tipe' => 'required|string',
            'deskripsi' => 'required|string',
            'price' => 'required|integer',
            'popular' => 'required|string',
            'satuan' => 'required|string',
            'currency' => 'required|string',
            'images' => 'nullable|array',
            'images.*' => 'nullable|image|max:2048',
        ]);

        // 3. Ambil data untuk disimpan
        $data = $request->only([
            'title', 'price', 'location', 'maps', 'features', 'badge',
            'properti_detail', 'properti_pembayaran', 'properti_fasilitas',
            'tipe', 'deskripsi', 'popular', 'satuan','currency'
        ]);

        // 4. Proses upload gambar
        $data['image'] = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $file) {
                $data['image'][] = $file->store('products', 'public');
            }
        }

        // 5. Simpan ke database
        Product::create($data);

        return redirect()->back()->with('success', 'Product created.');
    } catch (\Throwable $e) {
        // 6. Tangani error
        \Log::error('Gagal menambahkan produk: '.$e->getMessage());

        return redirect()->back()->withErrors([
            'message' => 'Terjadi kesalahan saat menyimpan produk. Silakan coba lagi.',
        ])->withInput();
    }
}

public function update(Request $request, Product $product)
{
    try {
        // 1. Normalisasi input string "null" dan bersihkan array dari "null", null, atau string kosong
        $arrayKeys = ['badge', 'features', 'properti_detail', 'properti_pembayaran', 'properti_fasilitas'];

        foreach ($arrayKeys as $key) {
            $items = $request->input($key);
            if (is_array($items)) {
                $filtered = array_filter($items, fn($val) => $val !== 'null' && $val !== null && $val !== '');
                $request->merge([$key => array_values($filtered)]);
            } elseif ($items === "null" || $items === null) {
                $request->merge([$key => []]);
            }
        }

        // 2. Validasi data
        $validated = $request->validate([
            'title' => 'required|string',
            'location' => 'required|string',
            'maps' => 'nullable|string',

            'features' => 'nullable|array',
            'features.*' => 'string',

            'badge' => 'nullable|array',
            'badge.*' => 'string',

            'properti_detail' => 'nullable|array',
            'properti_detail.*' => 'string',

            'properti_pembayaran' => 'nullable|array',
            'properti_pembayaran.*' => 'string',

            'properti_fasilitas' => 'nullable|array',
            'properti_fasilitas.*' => 'string',

            'tipe' => 'required|string',
            'deskripsi' => 'required|string',
            'price' => 'required|integer',
            'popular' => 'required|string',
            'satuan' => 'required|string',
            'currency' => 'required|string',
            'images' => 'nullable|array',
            'images.*' => 'nullable|image|max:2048',
        ]);

        // 3. Ambil data yang akan diupdate
        $data = $request->only([
            'title', 'price', 'location', 'maps', 'features', 'badge',
            'properti_detail', 'properti_pembayaran', 'properti_fasilitas',
            'tipe', 'deskripsi', 'popular', 'satuan','currency'
        ]);

        // 4. Simpan gambar lama jika ada
        $oldImages = is_array($product->image)
            ? $product->image
            : json_decode($product->image, true) ?? [];

        // 5. Tambah gambar baru jika ada
        if ($request->hasFile('images')) {
            $newImages = [];
            foreach ($request->file('images') as $file) {
                $newImages[] = $file->store('products', 'public');
            }
            $data['image'] = array_merge($oldImages, $newImages);
        } else {
            $data['image'] = $oldImages;
        }

        // 6. Update produk
        $product->update($data);

        return redirect()->back()->with('success', 'Product updated.');
    } catch (\Throwable $e) {
        // 7. Tangani error
        \Log::error('Gagal update produk: ' . $e->getMessage());

        return redirect()->back()->withErrors([
            'message' => 'Terjadi kesalahan saat memperbarui produk. Silakan coba lagi.',
        ])->withInput();
    }
}



   public function destroy($id)
{
    $product = Product::findOrFail($id);
    $product->delete();

    return redirect()->back()->with('message', 'Product deleted successfully!');
}

}
