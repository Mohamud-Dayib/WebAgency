// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), { zoom: 4, center: uluru });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

//show header when scrool down
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const logo = document.querySelector("#logo span");
  const menu = document.querySelectorAll("header li a");
  const ctabtn = document.querySelector("header .cta");
  menu.forEach(Element => {
    const scroll = window.scrollY;
    const scrollheight = 120;
    if (scroll > scrollheight) {
      header.classList.add("scroll-header");
      logo.classList.add("sroll-logo");
      Element.classList.add("scroll-menu");
      ctabtn.classList.add("scroll-cta");
    } else {
      header.classList.remove("scroll-header");
      logo.classList.remove("sroll-logo");
      Element.classList.remove("scroll-menu");
      ctabtn.classList.remove("scroll-cta");
    }
    console.log(ctabtn);
  });
});

// smooth scrolling
var scroll = new SmoothScroll('header a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});

var scroll = new SmoothScroll('body a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});

window.addEventListener("scroll", back);
function back() {
  const backscrollIcon = document.querySelector(".backscroll");
  const backscrollappear = window.scrollY;
  const backscrollHeight = 1000;
  if (backscrollappear > backscrollHeight) {
    backscrollIcon.classList.add("slide-backicon");
  } else {
    backscrollIcon.classList.remove("slide-backicon");
  }
}


//Responisve menu show and hide
const toggle = document.querySelector(".toggle");
toggle.addEventListener('click', () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("toggle-nav");
})
