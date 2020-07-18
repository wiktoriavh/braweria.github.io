"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var list = "https://dog.ceo/api/breeds/list";
var breedsMenu = document.querySelector("#breeds");
var breeds = [];
fetch(list).then(function (blob) {
  return blob.json();
}).then(function (data) {
  breeds.push.apply(breeds, _toConsumableArray(data.message));
  addBreeds(breeds);
  change; //const btn = document.querySelector("#btn");
  //btn.addEventListener("click", function (e) {
  //	change;
  //	console.log(e);
  //})
});

function addBreeds(breeds) {
  breeds.forEach(function (breed) {
    breedsMenu.innerHTML += "<option value='" + breed + "'>" + breed + "</option>";
  });
}

var change = breedsMenu.addEventListener("change", function (e) {
  var index = e.target.selectedIndex;
  var breed = breeds[index];
  var img = document.querySelector(".dog");
  var url = "https://dog.ceo/api/breed/" + breed + "/images/random";
  fetch(url).then(function (blob) {
    return blob.json();
  }).then(function (data) {
    var dogPic = data.message;
    img.src = dogPic;
  });
});