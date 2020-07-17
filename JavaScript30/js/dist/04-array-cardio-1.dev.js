"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with
console.log("JavaScript 30 by Wesbos");
console.log("Exercise 04: Array Cardio 01");
console.log("Three different Arrays: 'inventors', 'people' and 'data'.");
var inventors = [{
  first: 'Albert',
  last: 'Einstein',
  year: 1879,
  passed: 1955
}, {
  first: 'Isaac',
  last: 'Newton',
  year: 1643,
  passed: 1727
}, {
  first: 'Galileo',
  last: 'Galilei',
  year: 1564,
  passed: 1642
}, {
  first: 'Marie',
  last: 'Curie',
  year: 1867,
  passed: 1934
}, {
  first: 'Johannes',
  last: 'Kepler',
  year: 1571,
  passed: 1630
}, {
  first: 'Nicolaus',
  last: 'Copernicus',
  year: 1473,
  passed: 1543
}, {
  first: 'Max',
  last: 'Planck',
  year: 1858,
  passed: 1947
}, {
  first: 'Katherine',
  last: 'Blodgett',
  year: 1898,
  passed: 1979
}, {
  first: 'Ada',
  last: 'Lovelace',
  year: 1815,
  passed: 1852
}, {
  first: 'Sarah E.',
  last: 'Goode',
  year: 1855,
  passed: 1905
}, {
  first: 'Lise',
  last: 'Meitner',
  year: 1878,
  passed: 1968
}, {
  first: 'Hanna',
  last: 'Hammarström',
  year: 1829,
  passed: 1909
}];
var people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
var data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
console.log(inventors);
console.log(people);
console.log(data); // Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

var born1500s = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
});
console.log("#1");
console.log(born1500s); // Array.prototype.map()
// 2. Give us an array of the inventors first and last names

var fullName = inventors.map(function (inventor) {
  return inventor.first + " " + inventor.last;
});
console.log("#2");
console.log(fullName); // Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

var sort = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  }

  if (a.year < b.year) {
    return -1;
  }

  return 0;
});
console.log("#3");
console.log(sort); // Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

var reduce = inventors.reduce(function (total, inventor) {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log("#4");
console.log(reduce); // 5. Sort the inventors by years lived

var lived = inventors.sort(function (a, b) {
  return a.passed - a.year < b.passed - b.year ? 1 : -1;
});
console.log("#5");
console.log(lived); // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const cat = document.querySelector(".mw-category");
// const links = Array.from(cat.querySelectorAll("a"));
// const de = links
//			  .map(link => { return link.textContent })
//			  .filter(a => { return a.includes("de") });

console.log("#5 Paste the following code into the console of the webpage:");
console.log('const cat = document.querySelector(".mw-category");  const links = Array.from(cat.querySelectorAll("a"));	  const de = links.map(link => { return link.textContent }) .filter(a => { return a.includes("de") }); console.log(de);'); // 7. sort Exercise
// Sort the people alphabetically by last name

var alpha = people.sort(function (a, b) {
  var _a$split = a.split(", "),
      _a$split2 = _slicedToArray(_a$split, 2),
      aLast = _a$split2[0],
      aFirst = _a$split2[1];

  var _b$split = b.split(", "),
      _b$split2 = _slicedToArray(_b$split, 2),
      bLast = _b$split2[0],
      bFirst = _b$split2[1];

  return aLast > bLast ? 1 : -1;
});
console.log("#6");
console.log(alpha); // 8. Reduce Exercise
// Sum up the instances of each of these

var tally = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }

  obj[item]++;
  return obj;
}, {});
console.log("#7");
console.log(tally);