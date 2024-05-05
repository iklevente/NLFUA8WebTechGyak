<?php
if ($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
    if (isset($_POST['email']) && isset($_POST['message'])) {
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Köszönjük, üzenetét megkaptuk: " . $message;
        } else {
            echo "Hibás email formátum.";
        }
    } else {
        echo "Hiányzó adatok.";
    }
} else {
    echo "Invalid request";
}
?>
