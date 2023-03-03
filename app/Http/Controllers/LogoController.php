<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LogoController extends Controller
{
    public function store(Request $request)
    {
        if ($request->hasFile('logo')) {
            $path = $request->file('logo')->store('public');
            return response()->json(['path' => Storage::url($path)]);
        } else {
            return response()->json(['error' => 'No logo provided'], 400);
        }
    }

    public function destroy()
    {
        Storage::delete('public/logo');
        return response()->json(['success' => true]);
    }
}
