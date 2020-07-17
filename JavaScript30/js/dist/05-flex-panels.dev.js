"use strict";

var panel = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);

  if (e.propertyName.includes("flex")) {
    this.classList.toggle("active");
  }
}

panel.forEach(function (panel) {
  return panel.addEventListener("click", toggleOpen);
});
panel.forEach(function (panel) {
  return panel.addEventListener("transitionend", toggleActive);
});