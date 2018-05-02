window.onscroll = function() {addClassOnScroll()};

var navbar = document.getElementById("my-nav");
var sidenav = document.getElementById("portfolio-side-nav");

var navPosition = navbar.offsetTop;

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
}
