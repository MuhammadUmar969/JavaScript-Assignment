////////////////////////////////////////////////

// CH 5

// Question 1

// var number1 = 3;
// var number2 = 5;
// var result = number1 + number2;

// document.write("Sum of " + number1 + " and " + number2 + " is " + result);

// Question 2

// Subtraction

// var number1 = 3;
// var number2 = 5;
// var result = number2 - number1;

// document.write("Sum of " + number1 + " and " + number2 + " is " + result);

// Multiplication

// var number1 = 3;
// var number2 = 5;
// var result = number2 * number1;

// document.write("Sum of " + number1 + " and " + number2 + " is " + result);

// Division

// var number1 = 3;
// var number2 = 5;
// var result = number2 / number1;

// document.write("Sum of " + number1 + " and " + number2 + " is " + result);

// Modulus

// var number1 = 3;
// var number2 = 5;
// var result = number2 % number1;

// document.write("Sum of " + number1 + " and " + number2 + " is " + result);

//Question 3

// var value;
// document.write("Value after variable declaration is: ??");
// value = 5;
// document.write("Initialvalue: " + value);
// value += 5;
// document.write("Value after increment is:" + value);
// value = 5 + 7;
// document.write("Value after addition is: " + value);
// value -= 5;
// document.write("Value after decrement is:" + value);
// value = 14 % 7;
// document.write("The remainder is : " + value);

// Question 4
// var price = 600 * 5;
// document.write("Total cost to b buy 5 tickets to a movie is " + price + "PKR");

// Question 6

// Step 1: Store a Celsius temperature into a variable
//var celsiusTemperature = 30;

// Step 2: Convert Celsius to Fahrenheit
//var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

// Step 3: Output the result
//console.log(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");

// Step 4: Store a Fahrenheit temperature into a variable
//var fahrenheitTemperature2 = 86; // Change this to the Fahrenheit temperature you want to convert

// Step 5: Convert Fahrenheit to Celsius
//var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;

// Step 6: Output the result
//console.log(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");

// Question 7

// var price1 = 650;
// var price2 = 100;
// var order1 = 3;
// var order2 = 7;
// var charges = 100;
// var total = price1 * order1 + price2 * order2 + charges;

// document.write("Price of item 1 is " + price1);
// document.write("Quantity of item 1 is " + order1);
// document.write("Price of item 2 is " + price1);
// document.write("Quantity of item 2 is " + order2);
// document.write("Shipping Charges " + charges);
// document.write("Total Cost of your order is " + total);

// Question 8

// var total = 980;
// var marks = 804;
// var percent = (marks / total) * 100;

// document.write("Toatl Marks: " + total);
// document.write("Marks Obtained: " + marks);
// document.write("Percentage: " + percent);

// Question 9

// Define the amounts in USD and Saudi Riyals
// var usdAmount = 10;
// var riyalAmount = 25;

// Define the exchange rates
// var usdToPkrRate = 104.8;
// var riyalToPkrRate = 28;

// Convert the amounts to Pakistani Rupees in a single expression
//var totalPkr = usdAmount * usdToPkrRate + riyalAmount * riyalToPkrRate;

//console.log("Total in Pakistani Rupees: " + totalPkr);

// Question 10

// Initialize a variable with some number
//var initialNumber = 15;

// Perform the arithmetic operations in a single expression
//var result = ((initialNumber + 5) * 10) / 2;

//document.write("Result: " + result);

// Question 11

// Store the current year in a variable
// var currentYear = new Date().getFullYear();

// Store their birth year in a variable
//var birthYear = 2003;

// Calculate their two possible ages based on the stored values
//const age1 = currentYear - birthYear;
//const age2 = age1 - 1; // For the other possible age (if their birthday hasn't occurred yet)

// Output their ages to the screen
//document.write("They are either " + age1 + " or " + age2 + " years old.");

// Question 12

// Store the radius of the circle in a variable
//var radius = 5;

// Calculate the circumference using the formula C = 2 * π * r
//var circumference = 2 * Math.PI * radius;

// Calculate the area using the formula A = π * r^2
//var area = Math.PI * Math.pow(radius, 2);

// Output the circumference and area to the screen
//document.write("The circumference is " + circumference);
//document.write("The area is " + area);

// Question 13

// var favoriteSnack = "chocolate";
// var currentAge = 20;
// var maximumAge = 80;
// var amountPerDay = 2;

// var yearsRemaining = maximumAge - currentAge;
// var totalAmountNeeded = yearsRemaining * 365 * amountPerDay;

// Output the result to the screen
// document.write(
//   "You will need " +
//     totalAmountNeeded +
//     favoriteSnack +
//     " to last you until the ripe old age of " +
//     maximumAge
// );

////////////////////////////////////////////////

// CH 6 - 9

// Question 1

// var value = 10;

// console.log("Result:");
// console.log("The value of a is: " + value);

// ++value;

// console.log("The value of ++a is: " + value);
// console.log("Now the value of a is: " + value);

// console.log("The value of a++ is: " + value);
// value++;
// console.log("Now the value of a++ is: " + value);

// --value;

// console.log("The value of --a is: " + value);
// console.log("Now the value of a is: " + value);

// console.log("The value of a-- is: " + value);
// value--;
// console.log("Now the value of a-- is: " + value);

// Question 2

// Question 3

// var name = prompt("What is your name?");
// alert("Hello, " + name);

// Question 6
// Step 1: Take three subjects' names from the user and store them in variables.
// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// // Step 2: Total marks for each subject is 100, store it in another variable.
// var totalMarks = 100;

// // Step 3: Take obtained marks for the first subject from the user and store it in a variable.
// var obtainedMarks1 = parseFloat(prompt("Enter the obtained marks for " + subject1 + ":"));

// // Step 4: Take obtained marks for the remaining 2 subjects from the user and store them in variables.
// var obtainedMarks2 = parseFloat(prompt("Enter the obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseFloat(prompt("Enter the obtained marks for " + subject3 + ":"));

// // Step 5: Calculate total marks and percentage.
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// // Step 6: Display the result in the browser using alerts.
// var message = "Results:\n";
// message += subject1 + ": " + obtainedMarks1 + " out of " + totalMarks + "\n";
// message += subject2 + ": " + obtainedMarks2 + " out of " + totalMarks + "\n";
// message += subject3 + ": " + obtainedMarks3 + " out of " + totalMarks + "\n";
// message += "Total Marks: " + totalObtainedMarks + " out of " + (totalMarks * 3) + "\n";
// message += "Percentage: " + percentage.toFixed(2) + "%";

// alert(message);

////////////////////////////////////////////////

// CH 9 - 11

//Question 1
// var city = prompt("Enter city name:");

// if (city.toLowerCase() === "karachi") {
//   alert("Welcome to the city of lights");
// }

//Question 2
// var gender = prompt("Enter your gender (male or female):");

// if (gender.toLowerCase() === "male") {
//   alert("Good Morning Sir");
// } else if (gender.toLowerCase() === "female") {
//   alert("Good Morning Ma'am");
// }

//Question 3
// var signalColor = prompt("Enter the color of the traffic signal:");

// switch (signalColor.toLowerCase()) {
//   case "red":
//     alert("Must Stop");
//     break;
//   case "yellow":
//     alert("Ready to move");
//     break;
//   case "green":
//     alert("Move now");
//     break;
//   default:
//     alert("Invalid signal color");
// }


//Question 4
// var fuelLevel = parseFloat(prompt("Enter remaining fuel in the car (in litres):"));

// if (fuelLevel < 0.25) {
//   alert("Please refill the fuel in your car");
// }

//Question 5
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }


//Question 6
// var subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
// var subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
// var subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
// var totalMarks = parseFloat(prompt("Enter total marks:"));

// var totalObtainedMarks = subject1 + subject2 + subject3;
// var percentage = (totalObtainedMarks / totalMarks) * 100;

// var grade, remarks;

// if (percentage >= 90) {
//   grade = "A+";
//   remarks = "Excellent";
// } else if (percentage >= 80) {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage >= 70) {
//   grade = "B";
//   remarks = "Satisfactory";
// } else if (percentage >= 60) {
//   grade = "C";
//   remarks = "Needs Improvement";
// } else {
//   grade = "Fail";
//   remarks = "Work Harder";
// }

// alert("Total Marks: " + totalMarks + "\nMarks Obtained: " + totalObtainedMarks + "\nPercentage: " + percentage.toFixed(2) + "%" + "\nGrade: " + grade + "\nRemarks: " + remarks);

//Question 7
// var secretNumber = 7; // Change this to a random number from 1 to 10

// var userGuess = parseInt(prompt("Guess the secret number (from 1 to 10):"));

// if (userGuess === secretNumber) {
//   alert("Bingo! Correct answer");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//   alert("Close enough to the correct answer");
// } else {
//   alert("Sorry, try again");
// }


//Question 8
// var number = parseInt(prompt("Enter a number:"));

// if (number % 3 === 0) {
//   alert(number + " is divisible by 3");
// } else {
//   alert(number + " is not divisible by 3");
// }

//Question 9
// var number = parseInt(prompt("Enter a number:"));

// if (number % 2 === 0) {
//   alert(number + " is even");
// } else {
//   alert(number + " is odd");
// }


//Question 10
// var temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// } else {
//   alert("It's very cold outside.");
// }


//Question 11
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;

// if (operation === "+") {
//   result = num1 + num2;
// } else if (operation === "-") {
//   result = num1 - num2;
// } else if (operation === "*") {
//   result = num1 * num2;
// } else if (operation === "/") {
//   result = num1 / num2;
// } else if (operation === "%") {
//   result = num1 % num2;
// } else {
//   result = "Invalid operation";
// }

// alert("Result: " + result);

