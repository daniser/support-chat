<?php

use Illuminate\Support\Facades\Route;
use TTBooking\SupportChat\Http\Controllers\MessageAttachmentController;
use TTBooking\SupportChat\Http\Controllers\MessageController;
use TTBooking\SupportChat\Http\Controllers\MessageReactionController;
use TTBooking\SupportChat\Http\Controllers\RoomController;
use TTBooking\SupportChat\Http\Controllers\UserController;

Route::prefix('api/v1')->group(function () {
    Route::apiResource('users', '\\'.UserController::class, ['only' => ['index', 'show']]);

    Route::apiResources([
        'rooms' => '\\'.RoomController::class,
        'rooms.messages' => '\\'.MessageController::class,
        //'messages.attachments' => '\\'.MessageAttachmentController::class,
    ], ['shallow' => true]);

    Route::apiResource(
        'messages.attachments',
        '\\'.MessageAttachmentController::class,
        ['only' => ['store', 'show', 'destroy']]
    )->scoped(['attachment' => 'name']);

    Route::scopeBindings()->apiResource(
        'messages.reactions',
        '\\'.MessageReactionController::class,
        ['only' => ['store', 'destroy']]
    );
});
