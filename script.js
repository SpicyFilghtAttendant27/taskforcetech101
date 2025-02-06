<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cybersecurity Interactivity</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1a1a1a;
            color: white;
            text-align: center;
        }
        .security-tip {
            padding: 10px;
            margin: 10px auto;
            width: 50%;
            border-radius: 5px;
            background-color: #222;
            transition: background-color 0.3s ease;
            cursor: pointer;
        }
        .danger:hover {
            background-color: red;
        }
        .safe:hover {
            background-color: green;
        }
        #alert-box {
            display: none;
            padding: 15px;
            margin: 20px auto;
            width: 60%;
            background-color: orange;
            color: black;
            font-weight: bold;
            border-radius: 5px;
        }
    </style>
</head>
<body>

    <h1>Cybersecurity Best Practices</h1>

    <div class="security-tip danger">🚨 Beware of phishing emails!</div>
    <div class="security-tip safe">🔒 Always enable Multi-Factor Authentication (MFA).</div>

    <button id="start-timer">Start Security Alert</button>
    <div id="alert-box">🔔 Reminder: Time to update your passwords and run a security scan!</div>

    <script>
        // Timer-based cybersecurity alert
        document.getElementById("start-timer").addEventListener("click", function() {
            setTimeout(() => {
                document.getElementById("alert-box").style.display = "block";
            }, 5000); // Alert triggers after 5 seconds
        });
    </script>

</body>
</html>
