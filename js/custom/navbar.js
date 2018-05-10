window.onscroll = function() {addClassOnScroll()};

var navbar = document.getElementById("my-nav");
var sidenav = document.getElementById("portfolio-side-nav");
var page3 = document.getElementById("page-3");
var btn1 = document.getElementById("portfolio-1-btn");
var btn2 = document.getElementById("portfolio-2-btn");

var navPosition = navbar.offsetTop;
var page3Position = page3.offsetTop;

function addClassOnScroll() {

  if (window.pageYOffset >= navPosition) {
    navbar.classList.add("navTop");
    navbar.classList.remove("navBottom");
    sidenav.classList.remove("hidden");

  } else {
    navbar.classList.remove("navTop");
    navbar.classList.add("navBottom");
    sidenav.classList.add("hidden");
  }

  if (window.pageYOffset >= page3Position) {
    btn1.classList.remove("selected");
    btn2.classList.add("selected");
  } else {
    btn1.classList.add("selected");
    btn2.classList.remove("selected");
  }
}
