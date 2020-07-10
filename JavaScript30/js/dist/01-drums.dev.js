"use strict";

function playSoundKey(e) {
  var audio = document.querySelector("audio[data-key=\"".concat(e.keyCode, "\"]"));
  var key = document.querySelector(".key[data-key=\"".concat(e.keyCode, "\"]"));

  if (!audio) {
    return;
  } // mach nichts, wenn keine richtige Taste gespielt wird


  audio.currentTime = 0;
  audio.play();
  key.classList.add("clap");
}

function playSoundClick(c) {
  var click = c.toElement.dataset.key;
  var audio = document.querySelector("audio[data-key=\"".concat(click, "\"]"));
  var key = document.querySelector(".key[data-key=\"".concat(click, "\"]"));
  if (!audio) return; // mach nichts, wenn keine richtige Taste gespielt wird

  audio.currentTime = 0;
  audio.play();
  key.classList.add("clap");
}

var keys = document.querySelectorAll(".key");

function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return;
  }

  this.classList.remove("clap");
}

var rythm;
window.addEventListener("click", function (b) {
  var bpm = b.target.dataset.bpm;
  var btn = b.target;
  var btns = document.querySelectorAll(".btn"); // NodeList

  var tap = document.querySelector("audio.tap");

  if (b.target === document.getElementsByTagName("body")) {
    return;
  }

  btns.forEach(function (element) {
    return element.classList.remove("active");
  }); // entfernt die Klasse active von allen

  btn.classList.add("active");

  if (bpm === 0) {
    return clearInterval(rythm);
  }

  clearInterval(rythm);
  rythm = setInterval(function () {
    tap.currentTime = 0;
    tap.play();
  }, 60000 / bpm);
  console.log(rythm);
});
window.addEventListener("keydown", playSoundKey);
window.addEventListener("click", playSoundClick);
keys.forEach(function (key) {
  return key.addEventListener("transitionend", removeTransition);
});