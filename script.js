const logo = document.getElementById("logo");
const aboutTitle = document.getElementById("aboutTitle");

const aboutBtn = document.getElementById("aboutBtn");
const workBtn = document.getElementById("workBtn");
const backBtn = document.getElementById("backBtn");

const home = document.getElementById("home");
const about = document.getElementById("about");


/* =========================
   MAG CREATIVE COLOR
========================= */

let yellow = true;

setInterval(() => {

  if (yellow) {
    logo.style.color = "white";
    aboutTitle.style.color = "white";
  } else {
    logo.style.color = "#ffd400";
    aboutTitle.style.color = "#ffd400";
  }

  yellow = !yellow;

}, 1000);


/* =========================
   ABOUT ME BUTTON
========================= */

aboutBtn.addEventListener("click", () => {

  aboutBtn.classList.add("shake");

  setTimeout(() => {
    aboutBtn.classList.remove("shake");
  }, 500);

  setTimeout(() => {

    home.classList.remove("active");
    about.classList.add("active");

  }, 500);

});


/* =========================
   SEE MY WORK
========================= */

workBtn.addEventListener("click", () => {

  workBtn.classList.add("shake");
  workBtn.classList.toggle("active");

  setTimeout(() => {
    workBtn.classList.remove("shake");
  }, 500);

});


/* =========================
   BACK BUTTON
========================= */

backBtn.addEventListener("click", () => {

  backBtn.classList.add("shake");

  setTimeout(() => {
    backBtn.classList.remove("shake");
  }, 500);

  setTimeout(() => {

    about.classList.remove("active");
    home.classList.add("active");

  }, 500);

});