function SubmitForm() {

    // Your custom code here
    console.log('Submit button clicked!');

    // Get input values
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value;
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const termsCheckbox = document.getElementById("check-box");

    let isValid = true;

    // Name validation
    if (firstName === "" || lastName === "") {
        alert("First and Last name are required.");
        isValid = false;
    }

    // Email validation
    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        isValid = false;
    }

    // Date of birth validation
    if (dob === "") {
        alert("Please enter your date of birth.");
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        isValid = false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        isValid = false;
    }

    // Terms and conditions checkbox validation
    if (!termsCheckbox.checked) {
        alert("You must agree to the terms and conditions.");
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert("Form submitted successfully!");
        form.submit(); // You can replace this with actual form submission logic
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
};

