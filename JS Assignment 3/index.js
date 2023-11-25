//Q1 Declare an empty array using JS literal notation to store student names in the future:
//var studentNamesLiteral = [];

//Q2  Declare an empty array using JS object notation to store student names in the future:
//var studentNamesObject = new Array();

//Q3 Declare and initialize a strings array:
//var stringsArray = ["apple", "banana", "orange"];

//Q4 Declare and initialize a numbers array:
//var numbersArray = [1, 2, 3, 4, 5];

//Q5 Declare and initialize a boolean array:
//var booleanArray = [true, false];

//Q6 Declare and initialize a mixed array:
//var mixedArray = ["John", 25, true, "apple", false];

//Q7 Declare and initialize an array and store available education qualifications in Pakistan:
//var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

//Q8 Write a program to store 3 student names in an array.e:

// Declare arrays to store student names and scores
//var studentNames = ["John", "Alice", "Bob"];
//var scores = [320, 450, 380];

// Assume total marks for each student is 500

// Display scores and percentages for each student without using a loop
//var studentName1 = studentNames[0];
//var score1 = scores[0];
//var percentage1 = (score1 / totalMarks) * 100;
//console.log("Score of " + studentName1 + " is " + score1 + ". Percentage is " + percentage1.toFixed(2) + "%");

//var studentName2 = studentNames[1];
//var score2 = scores[1];
//var percentage2 = (score2 / totalMarks) * 100;
//console.log("Score of " + studentName2 + " is " + score2 + ". Percentage is " + percentage2.toFixed(2) + "%");

//var studentName3 = studentNames[2];
//var score3 = scores[2];
//var percentage3 = (score3 / totalMarks) * 100;
//console.log("Score of " + studentName3 + " is " + score3 + ". Percentage is " + percentage3.toFixed(2) + "%");

//Q9
// Initialize an array with color names
//var colors = ["Red", "Green", "Blue"];

// Display the array elements
//console.log("Initial Array: " + colors);

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array
//var colorToAddAtStart = prompt("Enter a color to add to the beginning:");
//colors.unshift(colorToAddAtStart);

// Display the updated array
//console.log("After adding to the beginning: " + colors);

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array
//var colorToAddAtEnd = prompt("Enter a color to add to the end:");
//colors.push(colorToAddAtEnd);

// Display the updated array
//console.log("After adding to the end: " + colors);

// c. Add two more colors to the beginning of the array
//colors.unshift("Purple", "Yellow");

// Display the updated array
//console.log("After adding two more colors to the beginning: " + colors.join);

// d. Delete the first color in the array
//colors.shift();

// Display the updated array
//console.log("After deleting the first color: " + colors);

// e. Delete the last color in the array
//colors.pop();

// Display the updated array
//console.log("After deleting the last color: " + colors);

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to the desired position/index
//var indexToAddColor = parseInt(prompt("Enter the index to add a color:"));
//var colorToAddAtIndex = prompt("Enter the color to add at the specified index:");
//colors.splice(indexToAddColor, 0, colorToAddAtIndex);

// Display the updated array
//console.log("After adding color at the specified index: " + colors);

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
// Then remove the same number of color(s) from the user-defined position/index.
//var indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
//var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
//colors.splice(indexToDelete, numberOfColorsToDelete);

// Display the updated array
//console.log("After deleting color(s) at the specified index: " + colors);

//Q10 Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
// Declare an array to store student scores
//var studentScores = [75, 90, 60, 85, 70];

// Display the original array
//console.log("Original Array: " + studentScores);

// Sort the array in ascending order
//studentScores.sort();

// Display the sorted array
//console.log("Sorted Array (Ascending Order): " + studentScores);

//Q11 Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.
// Initialize an array with city names
//var cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

// Display the original array
//console.log("Original Cities Array: " + cities);

// Initialize a new array called selectedCities and copy 3 elements from cities array
//var selectedCities = cities.slice(1, 4); // Copy elements at index 1, 2, and 3

// Display the selectedCities array
//console.log("Selected Cities Array: " + selectedCities);

//Q11 Write a program to create a single string
// Initialize an array
//var arr = ["This", "is", "my", "cat"];

// Use the join method to create a single string
//var resultString = arr.join(", ");

// Display the result
//console.log( "Array " + resultString);

// Use the join method to create a single string
//var resultString = arr.join(" ");

// Display the result
//console.log( "Array " + resultString);

//Q12 Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
// Initialize an empty array to simulate a queue
//var fifoQueue = [];

// Enqueue values
//fifoQueue.push("keyboard");
//fifoQueue.push("mouse");
//fifoQueue.push("printer");
//fifoQueue.push("monitor");

// Display the current state of the queue
//console.log("Current Queue: " + fifoQueue.join(", "));

// Dequeue values
//var dequeuedValue1 = fifoQueue.shift();
//var dequeuedValue2 = fifoQueue.shift();
//var dequeuedValue3 = fifoQueue.shift();
//var dequeuedValue4 = fifoQueue.shift();

// Display the dequeued values
//console.log("Dequeued Values: " + dequeuedValue1 + ", " + dequeuedValue2 + ", " + dequeuedValue3 + ", " + dequeuedValue4);

//Q13 Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)
//fifoQueue.push("keyboard");
//fifoQueue.push("mouse");
//fifoQueue.push("printer");
//fifoQueue.push("monitor");

// Display the current state of the queue
//console.log("Current Queue: " + fifoQueue.join(", "));

// Dequeue values
//var dequeuedValue1 = fifoQueue.pop();
//var dequeuedValue2 = fifoQueue.pop();
//var dequeuedValue3 = fifoQueue.pop();
//var dequeuedValue4 = fifoQueue.pop();

// Display the dequeued values
//console.log("Dequeued Values: " + dequeuedValue1 + ", " + dequeuedValue2 + ", " + dequeuedValue3 + ", " + dequeuedValue4);

//Q14 Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in your browser using document.write() method:
var phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

// Start building the select menu
document.write("<select>");

// Manually write options for the select menu
document.write(
  "<option value='" +
    phoneManufacturers[0] +
    "'>" +
    phoneManufacturers[0] +
    "</option>"
);
document.write(
  "<option value='" +
    phoneManufacturers[1] +
    "'>" +
    phoneManufacturers[1] +
    "</option>"
);
document.write(
  "<option value='" +
    phoneManufacturers[2] +
    "'>" +
    phoneManufacturers[2] +
    "</option>"
);
document.write(
  "<option value='" +
    phoneManufacturers[3] +
    "'>" +
    phoneManufacturers[3] +
    "</option>"
);
document.write(
  "<option value='" +
    phoneManufacturers[4] +
    "'>" +
    phoneManufacturers[4] +
    "</option>"
);
document.write(
  "<option value='" +
    phoneManufacturers[5] +
    "'>" +
    phoneManufacturers[5] +
    "</option>"
);

// End the select menu
document.write("</select>");
