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
const navList = document.getElementById("nav-list");
console.log(navList);
const addFadeInClass = (idName) => {
  let element = document.getElementById(idName);
  element.classList.remove("d-none");
  element.classList.add("fade-in");
};

window.addEventListener("load", async () => {
  for (let i = 0; i < navbarElements.length; ++i) {
    let time = i * 350;
    setTimeout(() => addFadeInClass(navbarElements[i]), time);
  }
});
