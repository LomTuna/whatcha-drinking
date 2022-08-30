function coldCoffee() {
  var element = document.getElementById("coldCoffee"); 
  element.classList.toggle("Cold-Coffee");
}
function hotCoffee() {
  var element = document.getElementById("hotCoffee"); 
  element.classList.toggle("Hot-Coffee");
}function coldNonCoffee() {
  var element = document.getElementById("ColdNonCoffee"); 
  element.classList.toggle("Cold-Non-Coffee");
}function hotNonCoffee() {
  var element = document.getElementById("HotNonCoffee"); 
  element.classList.toggle("Hot-Non-Coffee");
}
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}