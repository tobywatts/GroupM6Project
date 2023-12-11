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
        goalimage.className = data.goal1.Main.goal1Image.class;

        const goaltext = document.createElement("p");
        goaltext.textContent = data.goal1.Main.goal1text.text;
        goaltext.className = data.goal1.Main.goal1text.class;
      }

      if(name = "goal2"){
        const title = document.createElement("h2");
        title.textContent = data.goal2.Main.header;

        const goalimage = document.createElement("img");
        goalimage.src = data.goal2.Main.goal2Image.src;
        goalimage.className = data.goal2.Main.goal2Image.class;

        const goaltext = document.createElement("p");
        goaltext.textContent = data.goal1.Main.goal1text.text;
        goaltext.className = data.goal1.Main.goal1text.class;
      }

      if(name = "goal3"){
        const title = document.createElement("h2");
        title.textContent = data.goal3.Main.header;

        const goalimage = document.createElement("img");
        goalimage.src = data.goal3.Main.goal3Image.src;
        goalimage.className = data.goal3.Main.goal3Image.class;

        const goaltext = document.createElement("p");
        goaltext.textContent = data.goal1.Main.goal1text.text;
        goaltext.className = data.goal1.Main.goal1text.class;
      }
    });
});
