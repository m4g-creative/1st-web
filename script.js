/* =========================
   MAG CREATIVE PORTFOLIO
========================= */


/* =========================
   ELEMENTS
========================= */

const navbar = document.querySelector(".navbar");

const hamburger =
  document.getElementById("hamburger");

const mobileMenu =
  document.getElementById("mobileMenu");

const navLinks =
  document.querySelectorAll(".nav-links a");

const mobileLinks =
  document.querySelectorAll(".mobile-menu a");

const allMenuLinks =
  document.querySelectorAll(
    ".nav-links a, .mobile-menu a"
  );

const sections =
  document.querySelectorAll("section");


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 50) {
      navbar.classList.add(
        "navbar-scrolled"
      );
    } else {
      navbar.classList.remove(
        "navbar-scrolled"
      );
    }

  }
);


/* =========================
   HAMBURGER MENU
========================= */

hamburger.addEventListener(
  "click",
  () => {

    hamburger.classList.toggle(
      "active"
    );

    mobileMenu.classList.toggle(
      "active"
    );

  }
);


/* =========================
   CLOSE MOBILE MENU
   AFTER CLICK
========================= */

mobileLinks.forEach(link => {

  link.addEventListener(
    "click",
    () => {

      hamburger.classList.remove(
        "active"
      );

      mobileMenu.classList.remove(
        "active"
      );

    }
  );

});


/* =========================
   SMOOTH SCROLL
========================= */

allMenuLinks.forEach(link => {

  const href =
    link.getAttribute("href");

  /* Instagram links skip */
  if (
    !href ||
    !href.startsWith("#")
  ) {
    return;
  }

  link.addEventListener(
    "click",
    function(e) {

      e.preventDefault();

      const target =
        document.querySelector(
          href
        );

      if (target) {

        target.scrollIntoView({
          behavior: "smooth"
        });

      }

    }
  );

});


/* =========================
   ACTIVE NAV LINK
========================= */

window.addEventListener(
  "scroll",
  () => {

    let current = "";

    sections.forEach(section => {

      const sectionTop =
        section.offsetTop - 150;

      const sectionHeight =
        section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY <
        sectionTop + sectionHeight
      ) {

        current =
          section.getAttribute("id");

      }

    });


    navLinks.forEach(link => {

      link.classList.remove(
        "active-link"
      );

      if (
        link.getAttribute("href") ===
        "#" + current
      ) {

        link.classList.add(
          "active-link"
        );

      }

    });

  }
);


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(
    ".service-card, .portfolio-card, .stat-card, .about-text"
  );


function revealOnScroll() {

  const windowHeight =
    window.innerHeight;

  revealElements.forEach(element => {

    const elementTop =
      element
        .getBoundingClientRect()
        .top;

    if (
      elementTop <
      windowHeight - 80
    ) {

      element.classList.add(
        "show"
      );

    }

  });

}


window.addEventListener(
  "scroll",
  revealOnScroll
);


/* Run once on load */

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
   CLOSE MENU ON RESIZE
========================= */

window.addEventListener(
  "resize",
  () => {

    if (
      window.innerWidth > 900
    ) {

      hamburger.classList.remove(
        "active"
      );

      mobileMenu.classList.remove(
        "active"
      );

    }

  }
);


/* =========================
   PAGE LOAD
========================= */

window.addEventListener(
  "load",
  () => {

    document.body.classList.add(
      "loaded"
    );

    revealOnScroll();

  }
);
