<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// API routes

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::redirect('/', env('APP_URL'));

Route::get('/login', function () {
    return "Hello world!";
});