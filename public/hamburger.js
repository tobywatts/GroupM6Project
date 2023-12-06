function toggleEvent() {
  let links = document.querySelector(".nav-bar");
  links.classList.toggle("show-nav");
}

let hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", toggleEvent);
