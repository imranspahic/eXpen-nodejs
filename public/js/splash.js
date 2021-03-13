var body =document.getElementsByTagName("body")[0];

body.onload = function() {funkcija};

function funkcija() {
  console.log("OVDJE SAM");
  setTimeout(function() {alert('Hello');}, 3000);

}
