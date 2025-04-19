document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('remember').checked;
  
// Enhanced validation in login.js
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
  }
  
  if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
  }
  
  // Proceed with login...
});
  
  // Here you would typically send the data to your server
  console.log('Login attempt with:', { email, password, rememberMe });
  
  // For demo purposes, just show a success message
  alert('Login successful! (This is a demo)');
  
  // In a real app, you would redirect after successful login
  // window.location.href = 'dashboard.html';
});