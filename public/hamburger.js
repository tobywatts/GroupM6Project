const navBar = document.querySelector(".nav-bar");
const hamburger = document.getElementById("hamburger");

function toggleEvent() {
  navBar.classList.toggle("show-nav");
}

hamburger.addEventListener("click", toggleEvent);
