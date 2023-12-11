document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      var title = document.createElement("h2");
      title.textContent = data.goal1.Main.header;
      console.log(title)

      var goalimage = document.createElement("img");
      goalimage.src = data.goal1.Main.goal1Image.src;
      console.log(data.goal1.Main.goal1Image.src)
      //goalimage.className = data.goal1.Main.goal1Image.class;

      var goaltext = document.createElement("p");
      goaltext.textContent = data.goal1.Main.goal1text.text;
      goaltext.className = data.goal1.Main.goal1text.class




      var src = document.getElementById("info");
      document.getElementById("info").appendChild(title);
      document.getElementById("info").appendChild(goalimage);
      document.getElementById("info").appendChild(goaltext);
    });
  });
  
