//event listeners
// document.getElementsByTagName("BODY")[0].onresize = function() {getNavBar()};
window.onscroll = function() {addClassOnScroll()};

var navbar = document.getElementById("my-nav");

// navbar.onload = getNavBar();


var sidenav = document.getElementById("portfolio-side-nav");
var page3 = document.getElementById("page-3");
var btn1 = document.getElementById("portfolio-1-btn");
var btn2 = document.getElementById("portfolio-2-btn");

var navPosition = navbar.offsetTop;
var page3Position = page3.offsetTop;


//add for small nav at certain pixles

// function getNavBar() {
//   console.log("im here");
//   if (screen.width >= 630) {
//     navbar = document.getElementById("my-nav");
//   } else {
//     navbar = document.getElementById("small-nav");
//   }
// }

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
    btn1.classList.add("selected");
    btn2.classList.remove("selected");
  } else {
    btn1.classList.remove("selected");
    btn2.classList.add("selected");
  }
}

var hamburger = document.getElementById("hamburger");
var navSpan = document.getElementById("nav-span");
// var navSpan1 = document.getElementById("nav-span1");
// var navSpan2 = document.getElementById("nav-span2");
hamburger.onclick = openHamburger;

function openHamburger() {
  // navSpan1.classList.toggle("open");
  // navSpan2.classList.toggle("open");
  navSpan.classList.toggle("open");
}
