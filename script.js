/* =========================
   MAG CREATIVE PORTFOLIO
========================= */


/* =========================
   ELEMENTS
========================= */

const navbar = document.querySelector(".navbar");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

const navLinks = document.querySelectorAll(".nav-links a");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

const allMenuLinks = document.querySelectorAll(
  ".nav-links a, .mobile-menu a"
);

const sections = document.querySelectorAll("section");


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});


/* =========================
   HAMBURGER MENU
========================= */

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
}


/* =========================
   CLOSE MOBILE MENU
========================= */

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (hamburger) {
      hamburger.classList.remove("active");
    }

    if (mobileMenu) {
      mobileMenu.classList.remove("active");
    }
  });
});


/* =========================
   SMOOTH SCROLL
========================= */

allMenuLinks.forEach((link) => {
  const href = link.getAttribute("href");

  if (!href || !href.startsWith("#")) {
    return;
  }

  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* =========================
   ACTIVE NAV LINK
========================= */

function updateActiveNav() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active-link");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
  ".service-card, .portfolio-card, .stat-card, .about-text"
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    const elementTop = rect.top;
    const elementBottom = rect.bottom;

    /*
      Element screen mein aaye
    */

    if (
      elementTop < windowHeight - 80 &&
      elementBottom > 80
    ) {
      element.classList.add("show");
    }

    /*
      Element screen se bahar jaye
    */

    else {
      element.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("resize", revealOnScroll);


/* =========================
   RUN ON PAGE LOAD
========================= */

revealOnScroll();
updateActiveNav();


/* =========================
   PORTFOLIO CARD FLIP
========================= */

const portfolioCards = document.querySelectorAll(
  ".portfolio-card"
);

portfolioCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("portfolio-active");
  });
});


/* =========================
   CLOSE MENU ON RESIZE
========================= */

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    if (hamburger) {
      hamburger.classList.remove("active");
    }

    if (mobileMenu) {
      mobileMenu.classList.remove("active");
    }
  }
});


/* =========================
   PAGE LOAD
========================= */

window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  revealOnScroll();
  updateActiveNav();
});


/* =========================
   BACK TO TOP BUTTON
========================= */

const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
