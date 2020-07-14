"use strict";

var secHand = document.querySelector(".sec");
var minHand = document.querySelector(".min");
var hourHand = document.querySelector(".hour");
var hand = document.querySelectorAll("div.hand");
var bg = document.querySelector(".bg");
var credits = document.querySelector(".credit");

function deg90() {
  // Problem: smooth transition needed when changing into a new min
  hand.forEach(function (hand) {
    hand.style.transition = "none";
  });
  secHand.style.transform = "rotate(90deg)";
}

function timeChange() {
  var now = new Date();
  var hours = now.getHours();

  if (hours >= 18 && hours <= 22) {
    // evening
    bg.style.backgroundImage = 'url("img/ernest-brillo-Qi8CvonsYnM-unsplash.jpg")';
    document.documentElement.style.setProperty("--clock", "#AB5788");
    credits.innerHTML = 'Photo by <a href="https://unsplash.com/@ernest_brillo?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ernest Brillo</a> on <a href="https://unsplash.com/s/photos/evening?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>';
  } else if (hours >= 13 && hours <= 17) {
    // midday
    bg.style.backgroundImage = 'url("img/humberto-arellano-vh_gSEGcbhk-unsplash.jpg")';
    document.documentElement.style.setProperty("--clock", "#87ceeb");
    credits.innerHTML = 'Photo by <a href="https://unsplash.com/@bto16180?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Humberto Arellano</a> on <a href="https://unsplash.com/s/photos/midday?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>';
  } else if (hours >= 5 && hours <= 12) {
    // morning
    bg.style.backgroundImage = 'url("img/jake-givens-landscape-sunrise-unsplash.jpg")';
    document.documentElement.style.setProperty("--clock", "#bf9d43");
    credits.innerHTML = 'Photo by <a href="https://unsplash.com/@jakegivens?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jake Givens</a> on <a href="https://unsplash.com/s/photos/sun?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>';
  } else {
    // night
    bg.style.backgroundImage = 'url("img/gabriele-motter-q3rUTmpZB-Q-unsplash.jpg")';
    document.documentElement.style.setProperty("--clock", "#131862");
    credits.innerHTML = 'Photo by <a href="https://unsplash.com/@wide_leaf?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Gabriele Motter</a> on <a href="https://unsplash.com/s/photos/night?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a';
  }
}

function setDate() {
  var now = new Date();
  var seconds = now.getSeconds();
  var minutes = now.getMinutes();
  var hours = now.getHours();
  var secDeg = seconds / 60 * 360 + 90;
  var minDeg = minutes / 60 * 360 + 90;
  var hourDeg = hours / 12 * 360 + 90;

  if (secDeg === 90) {
    secHand.style.transform = "rotate(450deg)";
    deg90();
  } else {
    hand.forEach(function (hand) {
      hand.style.transition = "all .5s cubic-bezier(0, 1.38, 0.54, 0.83)";
    });
    secHand.style.transform = "rotate(".concat(secDeg, "deg)");
  }

  minHand.style.transform = "rotate(".concat(minDeg, "deg)");
  hourHand.style.transform = "rotate(".concat(hourDeg, "deg)");
}

timeChange();
document.addEventListener('DOMContentLoaded', function () {
  setInterval(setDate, 1000);
  setDate();
});