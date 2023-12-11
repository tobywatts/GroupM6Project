document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {



      var path = window.location.pathname;
      var page = path.split("/").pop();
      var name = page.split(".");
      name = page.split(".")[0];
      if(name = "goal1"){
        const title = document.createElement("h2");
        title.textContent = data.goal1.Main.header;

        const goalimage = document.createElement("img");
        goalimage.src = data.goal1.Main.goal1Image.src;
      }
    });
});
