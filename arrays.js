//  arrays.js
const steps = ["one", "two", "three"];
//this function shuold return an html list itemp for the next step
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate).join("");
document.querySelector("#myList").innerHTML = stepsHtml;
//  ------------------------------------------------------
const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}

const gpaPoints = grades.map(convertGradeToPoints);
console.log(gpaPoints); // [4, 3, 4]
//  ------------------------------------------------------
// You already have gpaPoints from Activity 2
const totalPoints = gpaPoints.reduce(function (total, item) {
  return total + item;
});

const gpa = totalPoints / gpaPoints.length;
console.log(gpa); // Should be 3.67 (rounded)

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
//  ------------------------------------------------------

const shortWords = words.filter(function (word) {
  return word.length < 6;
});

console.log(shortWords); // ["peach", "apple", "grape"]
//  ------------------------------------------------------

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;

const luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex); // Should print 2