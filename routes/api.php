<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes - SIJapanese Educational Platform
|--------------------------------------------------------------------------
*/

Route::get('/ping', function () {
    return response()->json(['status' => 'ok', 'app' => 'SIJapanese']);
});
