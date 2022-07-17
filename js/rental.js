"use strict";
import "../main.js";
import "../scss/rental.scss";
import "bootstrap/js/dist/dropdown";
import Rellax from "rellax";
new Rellax(".rellax");

const btnIcon = document.querySelector(".heroBtnIcon");
btnIcon.addEventListener("click", function () {
  document.querySelector("#steps").scrollIntoView({ behavior: "smooth" });
});
