<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;



class ProductPagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $Users = DB::table('users')->get();
         $Blog = DB::table('blogs')->get();
         $Rating = DB::table('ratings')->get();
         $PropertiProd = DB::table('products')->get();
        return Inertia::render('Welcome', [
            'PropertiProd' => $PropertiProd,
             'users' => $Users,
            'Blog' => $Blog,
            'Rating' => $Rating,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $DetailProd = DB::table('products')->where('id',$id)->get();
        $allprod = DB::table('products')->get();
                 $Blog = DB::table('blogs')->get();

        $Users = DB::table('users')->get();
         $Rating = DB::table('ratings')->get();
         $PropertiProd = DB::table('products')->get();
        return Inertia::render('Detail', [
            'DetailProd' => $DetailProd,
            'users' => $Users,
            'allprod' =>$allprod,
            'Blog' => $Blog,
            'Rating' => $Rating,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
