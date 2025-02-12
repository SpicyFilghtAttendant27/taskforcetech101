<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Optional: Store in a database or send via email
    // mail($to, $subject, $message, $headers);

    echo "<h2>Thank you, $name!</h2>";
    echo "<p>Your message has been received. We will contact you at <strong>$email</strong> soon.</p>";
} else {
    echo "<h2>Form submission error.</h2>";
}
?>
