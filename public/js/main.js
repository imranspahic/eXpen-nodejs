var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var errorMessage = document.getElementsByClassName('login-error');

usernameInput.addEventListener('input', () => {
  errorMessage[0].style.display = 'none';
});

passwordInput.addEventListener('input', () => {
  errorMessage[0].style.display = 'none';
});