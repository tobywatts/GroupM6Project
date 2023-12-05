let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function () {
  let links = document.querySelector("nav-bar");
  links.classList.toggle("show-nav");
});
