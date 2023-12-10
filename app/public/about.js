document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const title = document.createElement("h1");
      title.id = "team-title";
      title.textContent = data.aboutPage.Main.header;

      const teamTextDiv = document.createElement("div");
      teamTextDiv.id = "team-text";

      const person1Section = document.createElement("section");
      person1Section.className = "person";
      teamTextDiv.appendChild(person1Section);

      const person1Img = document.createElement("img");
      person1Img.className = "profile-picture";
      person1Img.src = data.aboutPage.Main.teamText.person1.img.src;
      person1Img.alt = data.aboutPage.Main.teamText.person1.img.alt;
      person1Section.appendChild(person1Img);

      const person1Name = document.createElement("h3");
      person1Name.className = "team-member-name";
      person1Name.textContent = data.aboutPage.Main.teamText.person1.name;
      person1Section.appendChild(person1Name);

      const person1Bio = document.createElement("p");
      person1Bio.className = "team-bio";
      person1Bio.textContent = data.aboutPage.Main.teamText.person1.bio;
      person1Section.appendChild(person1Bio);

      const person2Section = document.createElement("section");
      person2Section.className = "person";
      teamTextDiv.appendChild(person2Section);

      const person2Img = document.createElement("img");
      person2Img.className = "profile-picture";
      person2Img.src = data.aboutPage.Main.teamText.person2.img.src;
      person2Img.alt = data.aboutPage.Main.teamText.person2.img.alt;
      person2Section.appendChild(person2Img);

      const person2Name = document.createElement("h3");
      person2Name.className = "team-member-name";
      person2Name.textContent = data.aboutPage.Main.teamText.person2.name;
      person2Section.appendChild(person2Name);

      const person2Bio = document.createElement("p");
      person2Bio.className = "team-bio";
      person2Bio.textContent = data.aboutPage.Main.teamText.person2.bio;
      person2Section.appendChild(person2Bio);

      const person3Section = document.createElement("section");
      person3Section.className = "person";
      teamTextDiv.appendChild(person3Section);

      const person3Img = document.createElement("img");
      person3Img.className = "profile-picture";
      person3Img.src = data.aboutPage.Main.teamText.person3.img.src;
      person3Img.alt = data.aboutPage.Main.teamText.person3.img.alt;
      person3Section.appendChild(person3Img);

      const person3Name = document.createElement("h3");
      person3Name.className = "team-member-name";
      person3Name.textContent = data.aboutPage.Main.teamText.person3.name;
      person3Section.appendChild(person3Name);

      const person3Bio = document.createElement("p");
      person3Bio.className = "team-bio";
      person3Bio.textContent = data.aboutPage.Main.teamText.person3.bio;
      person3Section.appendChild(person3Bio);

      // Append the section element to the HTML body
      document.body.appendChild(teamTextDiv);
      document.getElementById("team-main").appendChild(title);
      document.getElementById("team-main").appendChild(teamTextDiv);
    });
});
