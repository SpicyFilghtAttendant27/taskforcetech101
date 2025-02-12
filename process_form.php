<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Optional: Store in a database or send via email
    // mail($to, $subject, $message, $headers);

    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Submission Successful</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #1a1a1a;
                color: white;
                text-align: center;
                padding: 50px;
            }
            .container {
                background-color: #222;
                padding: 20px;
                border-radius: 8px;
                width: 50%;
                margin: auto;
            }
            a {
                color: #008CBA;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <h2>Thank you, $name!</h2>
            <p>Your message has been received. We will contact you at <strong>$email</strong> soon.</p>
            <a href='index.html'>Go back to Home</a>
        </div>
    </body>
    </html>";
} else {
    echo "<h2>Form submission error.</h2>";
}
?>
