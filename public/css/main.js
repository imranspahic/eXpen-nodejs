var header = document.getElementById('header');
var c3 = document.getElementById('c3');
var c2 = document.getElementById('c2');
var c1 = document.getElementById('c1');
var logo_center = document.getElementById('logo_center');
var loginForm = document.getElementById('login-form');
var userLogo = document.getElementById('user-logo');

window.onload = function get_body() {

  body = document.getElementsByTagName('body')[0];
  body.onload = function () {
    funkcija();
  }
}
function funkcija() {
  setTimeout(setPocetni, 3000);
}

function setPocetni() {

  header.style.display = 'block';
  header.style.animation = 'fadeIn 2s 1';
  c3.style.animation = 'splash-horizontal 1.3s 1';
  logo_center.style.animation = 'logo_move 1s 1';
  loginForm.style.display='block';
  loginForm.style.animation = 'fadeIn 3s 1';
  userLogo.style.display = 'inline-block';
  userLogo.style.animation = 'fadeIn 3s 1';

  setTimeout(function() {c3.style.display = 'none'}, 1300);
  c2.style.animation = 'splash-horizontal 1.3s 0.1s 1';
  setTimeout(function() {c2.style.display = 'none'}, 1400);
  c1.style.animation = 'splash-horizontal 1.3s 0.1s 1';
  setTimeout(function() {c1.style.display = 'none'}, 1400);
  setTimeout(function() {logo_center.style.display = 'none'}, 1000);



}
