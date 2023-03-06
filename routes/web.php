<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/users', function () {

    /*return \App\Models\User::paginate(10)->through(fn($user)=>[
        'id' => $user->id,
        'name' => $user->name,
        'email' => $user->email
    ]);*/

    return Inertia::render('Users', [
        'users' => \App\Models\User::paginate(10)->through(fn($user)=>[
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email
        ])
    ]);
});

Route::get('/settings', function () {
    // sleep(2);
    return Inertia::render('Settings', [
        'time' => now()->toTimeString()
    ]);
});

Route::post('/logout', function () {
    dd('Login User Out ' . request('foo'));
    return Inertia::render('Settings');
});

