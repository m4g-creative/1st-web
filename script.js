/* =========================
MAG CREATIVE PORTFOLIO
SCRIPT.JS
========================= */

/* =========================
NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {
navbar.classList.add("navbar-scrolled");
} else {
navbar.classList.remove("navbar-scrolled");
}

});

/* =========================
SMOOTH SCROLL
========================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

link.addEventListener("click", function(e) {

e.preventDefault();

const targetId = this.getAttribute("href");

document
  .querySelector(targetId)
  .scrollIntoView({
    behavior: "smooth"
  });

});

});

/* =========================
ACTIVE NAVIGATION LINK
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
  section.offsetTop - 150;

const sectionHeight =
  section.clientHeight;

if (
  pageYOffset >= sectionTop &&
  pageYOffset < sectionTop + sectionHeight
) {

  current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active-link");

if (
  link.getAttribute("href") ===
  "#" + current
) {

  link.classList.add("active-link");

}

});

});

/* =========================
SCROLL REVEAL ANIMATION
========================= */

const revealElements =
document.querySelectorAll(
".service-card, .portfolio-card, .stat-card, .about-text"
);

const revealOnScroll = () => {

const windowHeight =
window.innerHeight;

revealElements.forEach(element => {

const elementTop =
  element.getBoundingClientRect().top;


if (
  elementTop <
  windowHeight - 80
) {

  element.classList.add("show");

}

});

};

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* =========================
PORTFOLIO CARD CLICK
========================= */

const portfolioCards =
document.querySelectorAll(
".portfolio-card"
);

portfolioCards.forEach(card => {

card.addEventListener(
"click",
() => {

  card.classList.toggle(
    "portfolio-active"
  );

}

);

});

/* =========================
PAGE LOAD EFFECT
========================= */

window.addEventListener(
"load",
() => {

document.body.classList.add(
  "loaded"
);

}
);
