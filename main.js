"use strict";
import "./style.scss";
import Typed from "typed.js";
import "waypoints/lib/noframework.waypoints.min";
import ScrollReveal from "scrollreveal";

// toggle nav open, close
const btnMobile = document.querySelector(".btn-mobile");
btnMobile.addEventListener("click", function () {
  this.classList.toggle("open");
  this.closest(".myNav").classList.toggle("nav-open");
});

// ani(scroll reveal )

//main content ani
const slideBot = {
  distance: "90px",
  origin: "bottom",
  duration: 600,
  interval: 100,
  cleanup: true,
  easing: "ease-out",
  delay: 200,
};
ScrollReveal().reveal(".slideBot", slideBot);

const slideLeft = {
  distance: "90px",
  origin: "left",
  duration: 800,
  cleanup: true,
  easing: "ease-out",
  delay: 200,
};
ScrollReveal().reveal(".slideLeft", slideLeft);

const slideRight = {
  distance: "90px",
  origin: "right",
  duration: 800,
  cleanup: true,
  easing: "ease-out",
  delay: 200,
};
ScrollReveal().reveal(".slideRight", slideRight);

const slideBotCard = {
  distance: "90px",
  origin: "bottom",
  duration: 600,
  interval: 100,
  cleanup: true,
  easing: "ease-out",
  delay: 500,
};
ScrollReveal().reveal(".slideBotCard", slideBotCard);

// footer ani
const slideTopAtOnce = {
  distance: "50px",
  origin: "top",
  interval: 5,
  duration: 1000,
  cleanup: true,
  delay: 400,
};
ScrollReveal().reveal(".slideTopAll", slideTopAtOnce);

const slideBotAtOnce = {
  distance: "50px",
  origin: "bottom",
  interval: 5,
  duration: 1000,
  cleanup: true,
  delay: 400,
};
ScrollReveal().reveal(".slideBotAll", slideBotAtOnce);

// type footer quote
const footerText = {
  strings: ["A better way to build."],
  typeSpeed: 40,
  backDelay: 1000,
  backSpeed: 40,
  smartBackspace: false,
  showCursor: false,
};

new Waypoint({
  element: document.querySelector(".footerQuote"),
  handler: function () {
    new Typed(".footerQuote", footerText);
    this.destroy();
  },
  offset: "bottom-in-view",
});
