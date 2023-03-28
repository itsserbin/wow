<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LogoController extends Controller
{
    public function store(Request $request)
    {
        $logoImage = Image::where('alt', 'Logo')->first();

        if ($logoImage) {
            Storage::delete('public/' . basename($logoImage->src));
        } else {
            $logoImage = new Image();
            $logoImage->alt = 'Logo';
        }

        $file = $request->file('logo');
        $path = $file->store('public');
        $logoImage->src = Storage::url($path);
        $logoImage->webp_src = '';
        $logoImage->save();

        return response()->json(['path' => $logoImage->src]);
    }

    public function destroy()
    {
        $logoImage = Image::where('alt', 'Logo')->first();

        if ($logoImage) {
            Storage::delete('public/' . basename($logoImage->src));
            $logoImage->delete();
        }

        return response()->json(['success' => true]);
    }
}
