"use strict";

// Get proper time
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good Evening, ';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon, ';
} else if (hourNow > 0) {
    greeting = 'Good Morning, ';
} else {
    greeting = 'Welcome'
}


// User greeting
var customerName = prompt("What is your name?")
document.getElementById('userGreeting').innerHTML = 
greeting + '<br>' + customerName



// prompt();
// prompt();
// prompt();
// prompt();
// prompt();

// answer.toLowerCase();

// if ((answer == yes) || (answer == y)) {
//     // code block will go here
//     alert('You answered: Yes')
//     console.log('input accepted as yes/y')
// } else if ((answer == no || answer == no)) {
//     // code block will go here
//     alert('You answered: No')
//     console.log('input accepted as no/n')
// } else {
//     alert('Invalid Response')
//     console.log('invalid response')
// }

