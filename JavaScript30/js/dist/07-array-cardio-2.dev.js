"use strict";

// ## Array Cardio Day 2
var people = [{
  name: 'Wes',
  year: 1988
}, {
  name: 'Kait',
  year: 1986
}, {
  name: 'Irv',
  year: 1970
}, {
  name: 'Lux',
  year: 2015
}];
var comments = [{
  text: 'Love this!',
  id: 523423
}, {
  text: 'Super good',
  id: 823423
}, {
  text: 'You are the best',
  id: 2039842
}, {
  text: 'Ramen is my fav food ever',
  id: 123523
}, {
  text: 'Nice Nice Nice!',
  id: 542328
}];
var date = new Date();
var year = date.getFullYear(); // Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

var some19 = people.some(function (person) {
  if (year - person.year > 18) {
    return true;
  }
});
console.log(some19); // Array.prototype.every() // is everyone 19 or older?

var every19 = people.every(function (person) {
  if (year - person.year > 18) {
    return true;
  }
});
console.log(every19); // Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

var comment = comments.find(function (comment) {
  return comment.id === 823423;
});
console.log(comment); // Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

var index = comments.findIndex(function (comment) {
  return comment.id === 823423;
});
comments.splice(index, 1);
console.log(comments);