<?php
// Ambil data dari form
$username = $_POST['username'] ?? '';
$nomor = $_POST['nomor'] ?? '';
$password = $_POST['password'] ?? '';
$ukuran = $_POST['ukuran'] ?? '';

// Konfigurasi panel
$domain = "https://bintang.mujibstore.my.id/"; // ganti dengan domain panel kamu
$apikey = "ptla_DkNO31Fj0hjWHHFt3ygcvYawkAYH3OoVJJUy0Kz88hW"; // ganti dengan API Key Pterodactyl
$egg = 5;
$location = 1;
$email = $username . rand(1000, 9999) . "@gmail.com";

// Atur spesifikasi
if ($ukuran === 'unli') {
    $memo = 0;
    $disk = 0;
} else {
    $memo = $ukuran * 1024;
    $disk = $ukuran * 1024;
}
$cpu = 250;

// Buat user di Pterodactyl pakai cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $domain . "/api/application/users");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Accept: application/json",
    "Authorization: Bearer $apikey"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "username" => $username,
    "email" => $email,
    "first_name" => $username,
    "last_name" => $nomor,
    "password" => $password
]));
$userRes = curl_exec($ch);
$userData = json_decode($userRes, true);
curl_close($ch);

// Ambil user ID
$userId = $userData['attributes']['id'] ?? null;

if ($userId) {
    // Buat server jika user berhasil dibuat
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $domain . "/api/application/servers");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Content-Type: application/json",
        "Accept: application/json",
        "Authorization: Bearer $apikey"
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        "name" => "Server-$username",
        "user" => $userId,
        "egg" => $egg,
        "docker_image" => "ghcr.io/pterodactyl/yolks:java_17",
        "startup" => "java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar server.jar nogui",
        "environment" => [
            "SERVER_JARFILE" => "server.jar",
            "BUILD_NUMBER" => "latest",
            "STARTUP_CMD" => "java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar server.jar nogui"
        ],
        "limits" => [
            "memory" => $memo,
            "swap" => 0,
            "disk" => $disk,
            "io" => 500,
            "cpu" => $cpu
        ],
        "feature_limits" => [
            "databases" => 1,
            "allocations" => 1,
            "backups" => 2
        ],
        "allocation" => [
            "default" => 1
        ],
        "deploy" => [
            "locations" => [$location],
            "dedicated_ip" => false,
            "port_range" => []
        ],
        "start_on_completion" => true
    ]));
    $serverRes = curl_exec($ch);
    curl_close($ch);

    echo "✅ Panel berhasil dibuat untuk $username.";
} else {
    echo "❌ Gagal membuat user. Respon: " . $userRes;
}
?>
