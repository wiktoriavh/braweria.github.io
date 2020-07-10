"use strict";

window.addEventListener("keydown", function (e) {
  var audio = document.querySelector("audio[data-key=\"".concat(e.keyCode, "\"]"));
  var key = document.querySelector(".key[data-key=\"".concat(e.keyCode, "\"]"));
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("clap");
});
var keys = document.querySelectorAll(".key");

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("clap");
}

keys.forEach(function (key) {
  return key.addEventListener("transitionend", removeTransition);
});