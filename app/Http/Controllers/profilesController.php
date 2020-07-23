<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\User;

class profilesController extends Controller
{
    public function index($user)
    {
        dd(User::find($user));
        return view('home');
    }
}
