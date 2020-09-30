<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class UpdateController extends Controller
{
    public function __invoke(Request $request)
    {
        $name = $request->input('name', '');
        $location = $request->input('location', '');
        $password = $request->input('password', '');
        $about = $request->input('about', '');
        $user = User::find(1);
        $user->fill([
            'name' => $name,
            'location' => $location,
            'about' => $about,
        ]);
        $user->save();

        return response()->json([
            'status' => true,
        ]);
    }
}
