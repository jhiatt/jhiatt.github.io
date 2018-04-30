window.onscroll = function() {addClassOnScroll()};

var navbar = document.getElementById("my-nav");

var navPosition = navbar.offsetTop;

function addClassOnScroll() {

  if (window.pageYOffset >= navPosition) {
    navbar.classList.add("navTop");
    navbar.classList.remove("navBottom");
    console.log(navbar.classList);

  } else {
    navbar.classList.remove("navTop");
    navbar.classList.add("navBottom");
  }
}
