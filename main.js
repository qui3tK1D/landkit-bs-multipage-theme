"use strict";
import "./style.scss";
import * as bootstrap from "bootstrap";
import Typed from "typed.js";
import "waypoints/lib/noframework.waypoints.min";
import counterUp from "counterup2";
import ScrollReveal from "scrollreveal";

// toggle nav open, close
const btnMobile = document.querySelector(".btn-mobile");
btnMobile.addEventListener("click", function () {
  this.classList.toggle("open");
  this.closest(".myNav").classList.toggle("nav-open");
});

// carousel
const btnPrev = document.querySelectorAll(".carLeft");
const btnNext = document.querySelectorAll(".carRight");
const [...myCarousel] = document.querySelectorAll("#myCarousel");
const [...carousels] = myCarousel.map((cur) => new bootstrap.Carousel(cur));

btnNext.forEach((cur) =>
  cur.addEventListener("click", function () {
    carousels.map((cur) => cur.next());
  })
);

btnPrev.forEach((cur) =>
  cur.addEventListener("click", function () {
    carousels.map((cur) => cur.prev());
  })
);

// typed.js
const options = {
  strings: ["founders.", "developers.", "designers."],
  typeSpeed: 40,
  backDelay: 1000,
  backSpeed: 40,
  loop: true,
  smartBackspace: false,
};

new Typed(".typed1", options);

// counter & waypoint
const [...count] = document.querySelectorAll(".counter");

count.map((cur) => {
  return new Waypoint({
    element: cur,
    handler: function () {
      counterUp(cur, {
        duration: 1500,
        delay: 20,
      });
      this.destroy();
    },
    offset: "bottom-in-view",
  });
});

// switcher

let check = false;
const switcher = document.querySelector(".switcher");
const monthlyCost = document.querySelector(".monthly-cost");

const costCounter = function () {
  return counterUp(monthlyCost, {
    duration: 500,
  });
};

switcher.addEventListener("change", function () {
  this.dataset.checked = !check;
  check = !check;

  if (this.dataset.checked === "true") {
    monthlyCost.textContent = "49";
    costCounter();
  }

  if (this.dataset.checked === "false") {
    monthlyCost.textContent = "29";
    costCounter();
  }
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

// footer ani
const slideTopAtOnce = {
  distance: "50px",
  origin: "top",
  interval: 5,
  duration: 1000,
  cleanup: true,
  delay: 200,
};
ScrollReveal().reveal(".slideTopAll", slideTopAtOnce);

const slideBotAtOnce = {
  distance: "50px",
  origin: "bottom",
  interval: 5,
  duration: 1000,
  cleanup: true,
  delay: 200,
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
