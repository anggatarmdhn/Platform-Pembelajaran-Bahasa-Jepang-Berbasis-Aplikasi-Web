<?php

// Direct Ultra-Fast HLS handler (bypasses full Laravel framework bootstrap for ~0.5ms response time)
$reqUri = $_SERVER['REQUEST_URI'] ?? '';
$reqPath = parse_url($reqUri, PHP_URL_PATH) ?? '';
if (preg_match('#^/hls/([A-Za-z0-9\-_]+)/([A-Za-z0-9\-_.]+)$#', $reqPath, $m)) {
    $channel  = $m[1];
    $file     = $m[2];
    $baseDir  = dirname(__FILE__) . DIRECTORY_SEPARATOR . 'hls' . DIRECTORY_SEPARATOR . $channel;
    $filePath = $baseDir . DIRECTORY_SEPARATOR . $file;

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Methods: GET, HEAD, OPTIONS');

    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
        http_response_code(200);
        exit;
    }

    clearstatcache(true, $filePath);
    if (str_ends_with($file, '.m3u8') && $file !== 'stream.m3u8.tmp') {
        $tmpPath = $baseDir . DIRECTORY_SEPARATOR . $file . '.tmp';
        clearstatcache(true, $tmpPath);
        if (!file_exists($filePath) || filesize($filePath) === 0) {
            if (file_exists($tmpPath) && filesize($tmpPath) > 0) {
                $filePath = $tmpPath;
            }
        } elseif (file_exists($tmpPath) && filesize($tmpPath) > 0 &&
                  filemtime($tmpPath) > filemtime($filePath) &&
                  (time() - filemtime($filePath)) > 2) {
            $filePath = $tmpPath;
        }
    }

    if (!file_exists($filePath) || filesize($filePath) === 0) {
        for ($retry = 0; $retry < 4; $retry++) {
            usleep(25000); // 25ms
            clearstatcache(true, $filePath);
            if (file_exists($filePath) && filesize($filePath) > 0) break;
        }
    }

    if (!file_exists($filePath) || filesize($filePath) === 0) {
        http_response_code(404);
        echo 'Segment not ready';
        exit;
    }

    $mime = str_ends_with($file, '.m3u8') ? 'application/vnd.apple.mpegurl' : 'video/mp2t';
    header('Content-Type: ' . $mime);
    header('Cache-Control: no-cache, no-store, must-revalidate, max-age=0');
    header('Pragma: no-cache');
    header('Expires: 0');

    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'HEAD') {
        header('Content-Length: ' . filesize($filePath));
        exit;
    }

    // Windows file lock tolerance read
    $data = false;
    for ($i = 0; $i < 4; $i++) {
        $data = @file_get_contents($filePath);
        if ($data !== false && strlen($data) > 0) break;
        usleep(15000);
    }

    if ($data === false) {
        http_response_code(404);
        echo 'Segment read error';
        exit;
    }

    // Anti-ENDLIST filter for live streams
    if (str_ends_with($file, '.m3u8')) {
        $data = str_replace("#EXT-X-ENDLIST\n", '', $data);
        $data = str_replace("#EXT-X-ENDLIST\r\n", '', $data);
        $data = str_replace("#EXT-X-ENDLIST", '', $data);
    }

    header('Content-Length: ' . strlen($data));
    echo $data;
    exit;
}

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

/*
|--------------------------------------------------------------------------
| Check If The Application Is Under Maintenance
|--------------------------------------------------------------------------
|
| If the application is in maintenance / demo mode via the "down" command
| we will load this file so that any pre-rendered content can be shown
| instead of starting the framework, which could cause an exception.
|
*/
if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| this application. We just need to utilize it! We'll simply require it
| into the script here so we don't need to manually load our classes.
|
*/
require __DIR__.'/../vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
|
| Once we have the application, we can handle the incoming request using
| the application's HTTP kernel. Then, we will send the response back
| to this client's browser, allowing them to enjoy the creative
| and wonderful application we have prepared for them.
|
*/
$app = require_once __DIR__.'/../bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Request::capture()
)->send();

$kernel->terminate($request, $response);
