const body = document.getElementById("body");

const changeTheme = () => {
  if (theme === "light__theme") {
    body.setAttribute("class", "dark__theme");
  } else {
    body.setAttribute("class", "light__theme");
  }
};

// fade in animation
const navbarElements = [
  "nav-about",
  "nav-work",
  "nav-experience",
  "nav-contact",
  "nav-resume",
];
const landingElements = [
  "landing__p-1",
  "myName",
  "landing__h2-1",
  "landing__p-2",
  "landing__p-3",
];
const navList = document.getElementById("nav-list");
console.log(navList);

// fade in animation
const addFadeInClass = (idName) => {
  let element = document.getElementById(idName);
  element.classList.remove("d-occult");
  element.classList.add("fade-in-down");
};

window.addEventListener("load", async () => {
  let time = 0;
  for (let i = 0; i < navbarElements.length; ++i) {
    time = i * 200;
    setTimeout(() => addFadeInClass(navbarElements[i]), time);
    console.log(time);
  }
  time = 1400;
  for (let j = 0; j < landingElements.length; ++j) {
    time += 450;
    setTimeout(() => addFadeInClass(landingElements[j]), time);
  }
});
