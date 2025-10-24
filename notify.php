<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $botToken = "8263387121:AAFYyBiL4N8xgm5qaqHp5m1kMGTegznVeTQ";
    $chatId = "1612742326";

    $time = date("d M Y, h:i:s A");
    $msg = "💬 Someone just logged in!\n🕒 Time: $time";

    $url = "https://api.telegram.org/bot$botToken/sendMessage";
    $data = [
        'chat_id' => $chatId,
        'text' => $msg
    ];

    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        ]
    ];

    $context  = stream_context_create($options);
    file_get_contents($url, false, $context);
}
?>