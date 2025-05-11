<?php
$secretKey = "6LfqRjUrAAAAAGhm9y3NL5-fA48KRVqX1g_UVRkl";
$response = $_POST['g-recaptcha-response'];
$remoteIp = $_SERVER['REMOTE_ADDR'];

$verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$response&remoteip=$remoteIp");
$responseData = json_decode($verify);

if ($responseData->success) {
    echo "Berhasil, form dikirim!";
} else {
    echo "Gagal verifikasi reCAPTCHA.";
}
?>
