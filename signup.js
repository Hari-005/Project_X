document.addEventListener('DOMContentLoaded', function () {
    const signupBtn = document.querySelector('.submit-btn');
    const formBox = document.querySelector('.form-box');

    signupBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const fullName = document.querySelector('.input-field[placeholder="Full Name"]').value.trim();
        const email = document.querySelector('.input-field[placeholder="Email"]').value.trim();
        const password = document.querySelector('.input-field[placeholder="Password"]').value.trim();
        const confirmPassword = document.querySelector('.input-field[placeholder="Confirm Password"]').value.trim();

        // Clear existing error messages
        const existingErrors = document.querySelectorAll('.error-message');
        existingErrors.forEach(error => error.remove());

        let isValid = true;

        // Validate Full Name
        if (fullName === '') {
            showError('Full Name is required', document.querySelector('.input-field[placeholder="Full Name"]'));
            isValid = false;
        }

        // Validate Email
        if (email === '') {
            showError('Email is required', document.querySelector('.input-field[placeholder="Email"]'));
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('Invalid email format', document.querySelector('.input-field[placeholder="Email"]'));
            isValid = false;
        }

        // Validate Password
        if (password === '') {
            showError('Password is required', document.querySelector('.input-field[placeholder="Password"]'));
            isValid = false;
        } else if (password.length < 8) {
            showError('Password must be at least 8 characters', document.querySelector('.input-field[placeholder="Password"]'));
            isValid = false;
        }

        // Validate Confirm Password
        if (confirmPassword === '') {
            showError('Confirm Password is required', document.querySelector('.input-field[placeholder="Confirm Password"]'));
            isValid = false;
        } else if (password !== confirmPassword) {
            showError('Passwords do not match', document.querySelector('.input-field[placeholder="Confirm Password"]'));
            isValid = false;
        }

        // If all fields are valid, submit the form (or handle further logic)
        if (isValid) {
            alert('Form submitted successfully!');
            // document.querySelector('form').submit(); // Uncomment to submit the form
        }
    });

    // Function to display error messages
    function showError(message, inputElement) {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.innerText = message;
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '12px';
        errorMessage.style.marginTop = '5px';
        inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
    }

    // Email validation function
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});