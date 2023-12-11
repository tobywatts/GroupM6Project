document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const title = document.createElement("h2");
      title.textContent = data.homePage.Main.header;

      
    });
});
