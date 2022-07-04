<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StaysController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ImageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([
    'middleware' => 'api',
    'prefix' => 'admin'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
});


Route::group([
    'middleware' => 'api',
    'prefix' => 'admin'
], function ($router) {
    Route::post('/add_stay', [StaysController::class, 'addStay']);
    Route::get('/stays', [StaysController::class, 'getAllStays']);
   Route::post('/getStayById', [StaysController::class, 'getStayById']);
   Route::post('/addLike', [StaysController::class, 'addLike']);
   Route::post('/getCategoryIdByCategoryName', [StaysController::class, 'getCategoryIdByCategoryName']);
   Route::post('/getStayByCategoryId', [StaysController::class, 'getStayByCategoryId']);
   
});



Route::group([
    'middleware' => 'api',
    'prefix' => 'admin'
], function ($router) {
    Route::post('/add_category', [CategoryController::class, 'addCategory']);
    Route::get('/categories', [CategoryController::class, 'getAllCategories']);
   Route::post('/getCategoryById', [CategoryController::class, 'getCategoryById']);
});


Route::group([
    'middleware' => 'api',
    'prefix' => 'admin'
], function ($router) {
    Route::post('/add_image', [ImageController::class, 'addImage']);
   Route::post('/getImagesByStayId', [ImageController::class, 'getImagesByStayId']);
});