<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LogoController extends Controller
{
    public function store(Request $request)
    {
        if ($request->hasFile('logo')) {
            $file = $request->file('logo');
            $filename = $file->getClientOriginalName();
            $path = $file->storeAs('public', 'logo.png');

            $image = new Image();
            $image->alt = 'Logo';
            $image->src = Storage::url($path);
            $image->webp_src = '';
            $image->save();

            return response()->json(['path' => $image->src]);
        } else {
            return response()->json(['error' => 'No logo provided'], 400);
        }
    }


    public function destroy()
    {
        $image = Image::where('alt', 'Logo')->first();
        if ($image) {
            Storage::delete('public/' . basename($image->src));
            $image->delete();
        }
        return response()->json(['success' => true]);
    }
}
