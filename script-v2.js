document.addEventListener("DOMContentLoaded", function () {
    // Security Alert Timer
    let alertBox = document.getElementById("alert-box");
    let startTimerBtn = document.getElementById("start-timer");
    let securityTips = [
        "🔐 Use strong, unique passwords for each account.",
        "📧 Beware of phishing emails! Never click on suspicious links.",
        "🛡 Enable Multi-Factor Authentication (MFA) for added security.",
        "💾 Always back up your important files regularly.",
        "📲 Keep your software and operating system updated to prevent vulnerabilities.",
        "⚠️ Don't share personal information on public Wi-Fi networks."
    ];

    function showSecurityAlert() {
        let randomTip = securityTips[Math.floor(Math.random() * securityTips.length)];
        alertBox.innerText = "🔔 Reminder: " + randomTip;
        alertBox.style.display = "block";
    }

    startTimerBtn.addEventListener("click", function () {
        let interval = prompt("Enter time (in seconds) for security reminders:", "10");
        let time = parseInt(interval) * 1000;

        if (!isNaN(time) && time > 0) {
            setInterval(showSecurityAlert, time);
            alert("✅ Security reminder activated! You will receive alerts every " + interval + " seconds.");
        } else {
            alert("⛔ Invalid input! Please enter a number.");
        }
    });

    // Hover Effect for Security Tips
    let securityTipsElements = document.querySelectorAll(".security-tip");
    securityTipsElements.forEach((tip) => {
        tip.addEventListener("click", function () {
            let tipMessage;
            if (tip.classList.contains("danger")) {
                tipMessage = "⚠️ This is a critical cybersecurity warning!";
            } else {
                tipMessage = "✅ This is a recommended security practice.";
            }
            alert(tip.innerText + "\n" + tipMessage);
        });
    });

    // Generate a Random Cybersecurity Tip
    document.getElementById("random-tip-btn").addEventListener("click", function () {
        let randomTip = securityTips[Math.floor(Math.random() * securityTips.length)];
        document.getElementById("random-tip-display").innerText = "💡 " + randomTip;
    });
});
