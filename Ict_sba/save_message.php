<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $message = $_POST['message'];

    if (!empty($name) && !empty($message)) {
        $textToSave = $name . ": " . $message . "\n";
        $file = fopen("messages.txt", "a");
        fwrite($file, $textToSave);
        fclose($file);
    }
}

header("Location: index.html");
exit();
?>