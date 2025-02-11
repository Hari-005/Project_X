document.getElementById('submit').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessageDiv = document.querySelector('.error-message');

    // Clear previous error messages
    errorMessageDiv.style.display = 'none';
    errorMessageDiv.textContent = '';

    // Simple validation
    if (!username || !password) {
        errorMessageDiv.textContent = 'Please enter both username and password.';
        errorMessageDiv.style.display = 'block';
        return;
    }

    // Example of checking against hardcoded credentials (for demonstration)
    const validUsername = 'user@example.com';
    const validPassword = 'password123';

    if (username !== validUsername || password !== validPassword) {
        errorMessageDiv.textContent = 'Incorrect username or password.';
        errorMessageDiv.style.display = 'block';
    } else {
        // Proceed with login (you can add your actual login logic here)
        alert('Login successful!');
    }
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Redirect to the home page
    window.location.href = 'home.html'; // Change 'home.html' to your actual home page URL
});