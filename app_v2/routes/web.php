<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/users', function () {
    return Inertia::render('Users');
});
Route::get('/trend', function () {
    return Inertia::render('Trendes');
});
Route::get('/map', function () {
    return Inertia::render('Map');
});
Route::get('/c/notifications', function () {
    return Inertia::render('Controls/Notifications');
});
Route::get('/c/bookmarks', function () {
    return Inertia::render('Controls/Bookmarks');
});
Route::get('/c/settings', function () {
    return Inertia::render('Controls/Settings');
});


Route::get('/user/{username}', function(){
    return "Imprimes el nombre de usuario";
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
