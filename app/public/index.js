document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const title = document.createElement("h1");
      title.textContent = data.homePage.Main.header;

      const pageContent = document.createElement("div");
      pageContent.id = "page-content";

      const goal1 = document.createElement("section");
      goal1.id = "goal1";
      goal1.className = "goals";

      const goal1HeadingDiv = document.createElement("div");
      goal1HeadingDiv.className = "goal-heading";

      const goal1Heading = document.createElement("h3");
      goal1Heading.textContent =
        data.homePage.Main.pageContent.goal1.goal1Heading;

      const goal1Text = document.createElement("p");
      goal1Text.className = "goal-text";
      goal1Text.textContent = data.homePage.Main.pageContent.goal1.goal1Text;

      const goal1Button = document.createElement("button");
      goal1Button.className = "goal-button";
      const button1Link = document.createElement("a");
      button1Link.className = "button-text";
      button1Link.href = data.homePage.Main.pageContent.goal1.goal1Button.href;
      button1Link.textContent =
        data.homePage.Main.pageContent.goal1.goal1Button.text;

      const goal2 = document.createElement("section");
      goal2.id = "goal2";
      goal2.className = "goals";

      const goal2HeadingDiv = document.createElement("div");
      goal2HeadingDiv.className = "goal-heading";

      const goal2Heading = document.createElement("h3");
      goal2Heading.textContent =
        data.homePage.Main.pageContent.goal2.goal2Heading;

      const goal2Text = document.createElement("p");
      goal2Text.className = "goal-text";
      goal2Text.textContent = data.homePage.Main.pageContent.goal2.goal2Text;

      const goal2Button = document.createElement("button");
      goal2Button.className = "goal-button";
      const button2Link = document.createElement("a");
      button2Link.className = "button-text";
      button2Link.href = data.homePage.Main.pageContent.goal2.goal2Button.href;
      button2Link.textContent =
        data.homePage.Main.pageContent.goal2.goal2Button.text;

      const goal3 = document.createElement("section");
      goal3.id = "goal3";
      goal3.className = "goals";

      const goal3HeadingDiv = document.createElement("div");
      goal3HeadingDiv.className = "goal-heading";

      const goal3Heading = document.createElement("h3");
      goal3Heading.textContent =
        data.homePage.Main.pageContent.goal2.goal2Heading;

      const goal3Text = document.createElement("p");
      goal3Text.className = "goal-text";
      goal3Text.textContent = data.homePage.Main.pageContent.goal2.goal2Text;

      const goal3Button = document.createElement("button");
      goal3Button.className = "goal-button";
      const button3Link = document.createElement("a");
      button3Link.className = "button-text";
      button3Link.href = data.homePage.Main.pageContent.goal3.goal3Button.href;
      button3Link.textContent =
        data.homePage.Main.pageContent.goal3.goal3Button.text;

      goal1HeadingDiv.appendChild(goal1Heading);
      goal2HeadingDiv.appendChild(goal2Heading);
      goal3HeadingDiv.appendChild(goal3Heading);

      const goal1div = document.createElement("div");
      goal1div.appendChild(goal1HeadingDiv);
      goal1div.appendChild(goal1Text);

      const goal2div = document.createElement("div");
      goal2div.appendChild(goal2HeadingDiv);
      goal2div.appendChild(goal2Text);

      const goal3div = document.createElement("div");
      goal3div.appendChild(goal3HeadingDiv);
      goal3div.appendChild(goal3Text);

      goal1.appendChild(goal1div);
      goal2.appendChild(goal2div);
      goal3.appendChild(goal3div);

      goal1Button.appendChild(button1Link);
      goal1.appendChild(goal1Button);

      goal2Button.appendChild(button2Link);
      goal2.appendChild(goal2Button);

      goal3Button.appendChild(button3Link);
      goal3.appendChild(goal3Button);

      document.body.appendChild(pageContent);
      document.getElementById("page-content").appendChild(goal1);
      document.getElementById("home-page").appendChild(title);
      document.getElementById("page-content").appendChild(goal2);
      document.getElementById("page-content").appendChild(goal3);
      document.getElementById("home-page").appendChild(pageContent);
    });
});
