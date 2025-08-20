document.addEventListener("DOMContentLoaded", function () {
    // ✅ Select form and feedback division
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // ✅ Form submission event listener
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // prevent form from submitting to server

        // ✅ Retrieve and trim input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // ✅ Initialize validation tracking
        let isValid = true;
        let messages = [];

        // ✅ Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // ✅ Email Validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // ✅ Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // ✅ Display Feedback
        feedbackDiv.style.display = "block"; // make feedback visible
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // green for success
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // red for errors
        }
    });
});
