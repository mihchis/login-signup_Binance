// Toggle between Login and Signup
const toggleFormLink = document.getElementById('toggle-form');
const formTitle = document.getElementById('form-title');
const submitButton = document.getElementById('submit-btn');
const confirmText = document.getElementById('confirm-text');
const emailPhoneInput = document.getElementById('email-phone');
const passwordInput = document.getElementById('password');
const loadingSpinner = document.getElementById('loading-spinner');

// Toggle password visibility
document.getElementById("toggle-password").addEventListener("click", function() {
  const passwordField = document.getElementById("password");
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;
  this.classList.toggle("fa-eye-slash");
});

// Toggle Login and Signup Forms
toggleFormLink.addEventListener('click', function(e) {
  e.preventDefault();

  if (formTitle.textContent === 'Welcome to Binance') {
    formTitle.textContent = 'Create an Account';
    submitButton.textContent = 'Sign Up';
    toggleFormLink.textContent = 'Already have an account? Log In';
    confirmText.style.display = 'block';
  } else {
    formTitle.textContent = 'Welcome to Binance';
    submitButton.textContent = 'Log In';
    toggleFormLink.textContent = "Don't have an account? Sign Up";
    confirmText.style.display = 'none';
  }

  emailPhoneInput.value = '';
  passwordInput.value = '';
});

// Client-Side Validation for Email and Password
document.getElementById('auth-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = emailPhoneInput.value;
  const password = passwordInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate email
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate password length
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  // Show loading state
  submitButton.style.display = "none";  // Hide submit button
  loadingSpinner.style.display = "inline-block";  // Show loading spinner

  setTimeout(() => {
    // Simulate form submission delay
    alert("Form submitted successfully!");
    submitButton.style.display = "inline-block";  // Show submit button again
    loadingSpinner.style.display = "none";  // Hide loading spinner
  }, 2000);
});
