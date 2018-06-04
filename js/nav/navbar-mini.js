
var hamburger = document.getElementById("hamburger");
var navSpan = document.getElementById("nav-span");

hamburger.onclick = openHamburger;

function openHamburger() {
  navSpan.classList.toggle("open");
}
