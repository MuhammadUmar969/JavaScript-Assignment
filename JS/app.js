// var num = 5.343;

// console.log(Number(num.toFixed(5)))


// var date = new Date();
// var dayNames = ["Sunday", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// console.log(dayNames[date.getDay()])

// console.log(date.getDate())

// var dob = new Date();
// dob.setFullYear(1999)
// dob.setMonth(7)
// dob.setDate(1)
// var currentDate = new Date();

// var diff = currentDate.getTime() - dob.getTime();

// console.log(diff)

var heading = document.getElementById("heading");

heading.innerHTML = new Date().toString();


var heading1 = document.getElementById("heading1");

heading1.innerHTML = "Saylani"

console.log(heading1.innerHTML)



function submit() {
    var textInput = document.getElementById("textInput");
    console.log(textInput.value)
}
