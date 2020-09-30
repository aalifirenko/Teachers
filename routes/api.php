<?php
;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\User\UserResource;

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
Route::group(['middleware' => ['guest:api'], 'namespace' => 'Api', 'as' => 'api.'], function() {

    # Login
    Route::group(['namespace' => 'Auth', 'as' => 'auth.'], function() {
        Route::post('auth/login', ['as' => 'auth.login', 'uses' => 'LoginController']);
    });

    # Only auth
    Route::group(['middleware' => ['auth:sanctum']], function() {

        #  Profile
        Route::group(['namespace' => 'Profile', 'as' => 'user.'], function() {
            Route::post('user/update', ['as' => 'user.update', 'uses' => 'UpdateController']);
        });

        # Test
        Route::get('auth/me', function () {
            return UserResource::make(auth()->user());
        });
    });
});


