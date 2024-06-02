var studentNamesLiteral = [];
var studentNamesObject = new Array();
var stringsArray = ["apple", "banana", "cherry"];
var numbersArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true];
var mixedArray = ["apple", 2, true, "banana", false];
var qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

var studentNames = ["John", "Jane", "Alice"];
var scores = [400, 450, 480];

document.write("<h2>Program 8: Student Scores</h2>");
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (scores[i] / 500) * 100;
    document.write(studentNames[i] + "'s score is " + scores[i] + " and percentage is " + percentage.toFixed(2) + "%<br>");
}

var colorsArray = ["red", "green", "blue"];

var colorToAddStart = prompt("Enter a color to add to the beginning:");
colorsArray.unshift(colorToAddStart);

var colorToAddEnd = prompt("Enter a color to add to the end:");
colorsArray.push(colorToAddEnd);

colorsArray.unshift("purple", "yellow");

colorsArray.shift();

colorsArray.pop();

var colorToAddIndex = prompt("Enter the index to add a color:");
var colorToAddName = prompt("Enter the color name:");
colorsArray.splice(colorToAddIndex, 0, colorToAddName);

var deleteIndex = prompt("Enter the index to delete colors from:");
var deleteCount = prompt("Enter the number of colors to delete:");
colorsArray.splice(deleteIndex, deleteCount);

document.write("<h2>Program 9: Updated Colors Array</h2>");
document.write(colorsArray.join(", ") + "<br>");

var studentScores = [75, 80, 60, 90, 70];
document.write("<h2>Program 10: Sorted Student Scores</h2>");
studentScores.sort(function(a, b){return a - b;});
document.write(studentScores.join(", ") + "<br>");

var cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"];
var selectedCities = cities.slice(0, 3);

var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");

var fifoArray = [];
fifoArray.push("first");
fifoArray.push("second");
fifoArray.push("third");

var lifoArray = [];
lifoArray.unshift("first");
lifoArray.unshift("second");
lifoArray.unshift("third");

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h2>Program 15: Phone Manufacturers Dropdown</h2>");
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");