document.addEventListener("DOMContentLoaded", function () {
  // Fetch JSON data
  fetch("aboutPageData.json")
    .then((response) => response.json())
    .then((data) => {
      // whole nav bar
      const navContainer = document.getElementById("main-nav");
      updateNav(navContainer, data.body.container.nav);

      // about page main section
      const Main = document.getElementById("team-main");
      updateMain(Main, data.body.main);

      // create footer
      const footer = document.querySelector("footer");
      updateFooter(footer, data.body.footer);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function updateNav(navContainer, navData) {
  // Create the nav bar
  const navList = document.createElement("ul");
  navList.className = navData.ul.class;

  navData.ul.li.forEach((navItemData) => {
    const navItem = document.createElement("li");
    navItem.className = navItemData.class;

    const link = document.createElement("a");
    link.href = navItemData.a.href;
    link.textContent = navItemData.a.text;

    navItem.appendChild(link);
    navList.appendChild(navItem);
  });

  const hamburger = document.createElement("a");
  hamburger.id = navData.ul.a.id;

  const icon = document.createElement("i");
  icon.className = navData.ul.a.i.class;

  hamburger.appendChild(icon);

  navContainer.appendChild(navList);
  navContainer.appendChild(hamburger);
}

function updateMain(Main, teamData) {
  // Create the team information HTML structure dynamically
  const teamTitle = document.createElement("h1");
  teamTitle.id = teamData.h1.id;
  teamTitle.textContent = teamData.h1.text;

  const teamText = document.createElement("div");
  teamText.id = teamData.div.id;

  teamData.div.section.forEach((memberData) => {
    const member = document.createElement("section");
    member.className = memberData.class;

    const profilePicture = document.createElement("img");
    profilePicture.src = memberData.img.src;
    profilePicture.alt = memberData.img.alt;
    profilePicture.className = memberData.img.class;

    const memberName = document.createElement("h3");
    memberName.className = memberData.h3.class;
    memberName.textContent = memberData.h3.text;

    const memberBio = document.createElement("p");
    memberBio.className = memberData.p.class;
    memberBio.textContent = memberData.p.text;

    member.appendChild(profilePicture);
    member.appendChild(memberName);
    member.appendChild(memberBio);

    teamText.appendChild(member);
  });

  Main.appendChild(teamTitle);
  Main.appendChild(teamText);
}

function updateFooter(footer, footerData) {
  // Create the footer HTML structure dynamically
  const copyright = document.createElement("small");
  const copyrightText = document.createElement("i");
  copyrightText.textContent = footerData.small[0].i.text;
  copyright.appendChild(copyrightText);

  const groupLink = document.createElement("small");
  const groupLinkText = document.createElement("i");
  const groupLinkAnchor = document.createElement("a");
  groupLinkAnchor.href = footerData.small[1].i.a.href;
  groupLinkAnchor.textContent = footerData.small[1].i.a.text;
  groupLinkText.appendChild(groupLinkAnchor);
  groupLink.appendChild(groupLinkText);

  footer.appendChild(copyright);
  footer.appendChild(groupLink);
}
