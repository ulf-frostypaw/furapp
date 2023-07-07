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
Route::get('/map', function () {
    return Inertia::render('Map');
});

// PREFIXES
Route::prefix('c')->group(function(){
    Route::get('/notifications', function () {
        return Inertia::render('Controls/Notifications');
    });
    Route::get('/bookmarks', function () {
        return Inertia::render('Controls/Bookmarks');
    });
});
// SETTINGS
Route::prefix('settings')->group(function(){
    Route::get('/', function () {
        return Inertia::render('Controls/Settings/Index');
    });
});
// USER PROFILE
Route::prefix('user')->group(function(){
    Route::get('/{username}', function(){
        return "Imprimes el nombre de usuario";
    });
    Route::get('/{username}/gallery', function(){
        return "Imprimes el nombre de usuario";
    });
    Route::get('/{username}/journals', function(){
        return "Imprimes el nombre de usuario";
    });
    Route::get('/{username}/following', function(){
        return "Imprimes el nombre de usuario";
    });
    Route::get('/{username}/followers', function(){
        return "Imprimes el nombre de usuario";
    });
    Route::get('/{username}/favorites', function(){
        return "Imprimes el nombre de usuario";
    });
    Route::get('/{username}/album', function(){
        return "Imprimes el nombre de usuario";
    });
});
Route::prefix('f')->group(function(){
    Route::get('/login', function(){
        return Inertia::render('Auth/Login');
    });
    Route::get('/register', function(){ /* SOLO USAR EN EL REGISTRO DE MAIL */
        return Inertia::render('Auth/Login');
    });
    Route::get('/reset_password', function(){
        return Inertia::render('Auth/Login');
    });
    Route::get('/forgot_password', function(){
        return Inertia::render('Auth/Login');
    });
    
});

Route::prefix('dashboard')->group(function(){
    Route::get('/', function(){
        return "MIRAS EL PANEL DE ADMINISTRADOR OWO";
    });
});

/* Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');*/

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
