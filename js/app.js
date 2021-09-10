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
  "icon-linkedin",
  "icon-github",
];

// ------------------------------------------------------------------- Load animation
const addClass = (idName, className) => {
  let element = document.getElementById(idName);
  element.classList.remove("d-occult");
  element.classList.add(`${className}`);
};

window.addEventListener("load", async () => {
  const screenScrollY =
    document.documentElement.scrollHeight - window.innerHeight;
  console.log(`Scroleable: ${screenScrollY}`);

  let time = 0;
  for (let i = 0; i < navbarElements.length; ++i) {
    time = i * 150;
    setTimeout(() => addClass(navbarElements[i], "fade-in-down"), time);
  }
  for (let j = 0; j < landingElements.length; ++j) {
    time += 280;
    setTimeout(() => addClass(landingElements[j], "fade-in-up"), time);
  }
});

// ------------------------------------------------------------------- Scroll fade in-up animation
const aboutSection = [
  "about__title",
  "about__p-1",
  "about__p-2",
  "mosaic",
  "about__p-3",
];
const mySkillsArticle = [
  "skills__title",
  "skills__description",
  "java-card",
  "html-card",
  "css-card",
  "js-card",
  "mysql-card",
  "mongodb-card",
  "react-card",
  "sass-card",
  "git",
];
const experienceSection = [
  "experience__title",
  "experience-text-1",
  "experience-li-1",
  "experience-text-2",
  "experience-text-3",
];
const workSection = ["work__title", "work-text-1", "card-1", "card-2"];
const contactSectionAndFooter = [
  "contact__title",
  "contact-text-1",
  "contact-button",
  "footer",
];

window.addEventListener("scroll", () => {
  const screenScrollY =
    document.documentElement.scrollHeight - window.innerHeight + 0.001;
  //4866
  const aboutScroll = screenScrollY * 0.0616;
  let aboutBool = false;
  const mySkillsScroll = screenScrollY * 0.23;
  let mySkillsBool = false;
  const experienceScroll = screenScrollY * 0.47;
  let experienceBool = false;
  const workScroll = screenScrollY * 0.65;
  let workBool = false;
  const contactScroll = screenScrollY * 0.883;
  let contactBool = false;
  const currentScroll = window.scrollY;
  let time = 10;

  if (currentScroll >= aboutScroll && aboutBool === false) {
    for (let i = 0; i < aboutSection.length; ++i) {
      setTimeout(() => addClass(aboutSection[i], "fade-in-up"), time);
      time += Math.random(100) + 150;
    }
  }
  if (currentScroll >= mySkillsScroll && mySkillsBool === false) {
    time = 100;
    for (let i = 0; i < mySkillsArticle.length; ++i) {
      setTimeout(() => addClass(mySkillsArticle[i], "fade-in-up"), time);
      time += Math.random(100) + 150;
    }
  }
  if (currentScroll >= experienceScroll && experienceBool === false) {
    time = 100;
    for (let i = 0; i < experienceSection.length; ++i) {
      setTimeout(() => addClass(experienceSection[i], "fade-in-up"), time);
      time += Math.random(100) + 150;
    }
  }
  if (currentScroll >= workScroll && workBool === false) {
    time = 100;
    for (let i = 0; i < workSection.length; ++i) {
      setTimeout(() => addClass(workSection[i], "fade-in-up"), time);
      time += Math.random(100) + 150;
    }
  }
  if (currentScroll >= contactScroll && contactBool === false) {
    time = 100;
    for (let i = 0; i < contactSectionAndFooter.length; ++i) {
      setTimeout(
        () => addClass(contactSectionAndFooter[i], "fade-in-up"),
        time
      );
      time += Math.random(100) + 150;
    }
  }
});
