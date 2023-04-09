<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// API routes

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::redirect('/', env('APP_URL'));

// VERSIOANDO LA API
/*
* mapa de rutas para la api:
* /users/
* /user/{username}/ -- FETCH ALL USER DATA (PROPS: USERNAME, FIRSTNAME, LASTNAME, MAIL, PWD, LAT, LONG, ID, TRYLOGS, TOKEN[REUSABLE PARA LA APP, CODE A B64])
* /submissions - GET JPURNALS DATA AND IMAGES (SUBMIT, UPDATE, DELETE, PRIVACY, TYPE: NSFW/SFW [AUTO], )
* /
*/
Route::prefix('v1')->group(function () {

    Route::get('/login', function () {
        return "Hello world!";
    });

});