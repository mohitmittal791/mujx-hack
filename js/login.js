document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation
    if (email === '' || password === '') {
        errorMessage.textContent = 'Please fill out both fields';
        return;
    }

    // Simulate login success (you can replace this with actual authentication)
    if (email === "user@example.com" && password === "password123") {
        // Clear error message
        errorMessage.textContent = '';
        // Redirect to dashboard page
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = 'Invalid email or password';
    }
});
