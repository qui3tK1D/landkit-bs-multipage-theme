"use strict";
import "../scss/home.scss";
import "../main.js";
import * as bootstrap from "bootstrap";
import "waypoints/lib/noframework.waypoints.min";
import counterUp from "counterup2";
import Typed from "typed.js";

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
