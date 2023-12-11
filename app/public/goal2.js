document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        var title = document.createElement("h2");
        title.textContent = data.goal2.Main.header;
        console.log(title)
  
        var goalimage = document.createElement("img");
        goalimage.src = data.goal2.Main.goal2Image.src;
        console.log(data.goal2.Main.goal2Image.src)
        //goalimage.className = data.goal1.Main.goal1Image.class;
  
        var goaltext = document.createElement("p");
        goaltext.textContent = data.goal2.Main.goal2text.text;
        goaltext.className = data.goal2.Main.goal2text.class
  
  
  
  
        var src = document.getElementById("info");
        document.getElementById("info").appendChild(title);
        document.getElementById("info").appendChild(goalimage);
        document.getElementById("info").appendChild(goaltext);
      });
    });
    
