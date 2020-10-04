// 'use strict';

// // Get proper time
// var today = new Date();
// var hourNow = today.getHours();
// var greeting;

// if (hourNow > 18) {
//   greeting = 'Good Evening, ';
// } else if (hourNow > 12) {
//   greeting = 'Good Afternoon, ';
// } else if (hourNow > 0) {
//   greeting = 'Good Morning, ';
// } else {
//   greeting = 'Welcome';
// }


// // User greeting
// var customerName = prompt('What is your name?');
// document.getElementById('userGreeting').innerHTML =
// greeting + '<br>' + customerName;



// // QUESTION GAME========================

// var points = 0;

// // Question 1
// var userLive = prompt('Do I live in Seattle?').toLowerCase();

// if (userLive === 'yes' || userLive === 'y') {
//   alert('Correct!');
//   // console.log('Do I live in Seattle?? input accepted as yes/y');
//   points++;
// } else if (userLive === 'no' || userLive === 'n') {
//   alert('I actually do live in Seattle');
//   // console.log('Do I live in Seattle?? input accepted as no/n');
// }


// // Question 2
// var userDog = prompt('Do I have a dog?').toLowerCase();

// if (userDog === 'yes' || userDog === 'y') {
//   alert('Correct! I have a dog named Fang.');
//   // console.log('Do I have a dog?? input accepted as yes/y');
//   points++;
// } else if (userDog === 'no' || userDog === 'n') {
//   alert('Actually, I do have a dog!');
//   // console.log('Do I have a dog?? input accepted as no/n');
// }

// // Question 3
// var userMilitary = prompt('Was I in the military?').toLowerCase();

// if (userMilitary === 'yes' || userMilitary === 'y') {
//   alert('Correct! I served in the US Navy.');
//   // console.log('Was I in the military? input accepted as yes/y');
//   points++;
// } else if (userMilitary === 'no' || userMilitary === 'n') {
//   alert('You answered: No');
//   // console.log('Was I in the military? input accepted as no/n');
// }

// // Question 4
// var userHeights = prompt('Do I like heights?').toLowerCase();

// if (userHeights === 'yes' || userHeights === 'y') {
//   alert('No no no no I absolutely hate heights!');
//   // console.log('Do I like heights? input accepted as yes/y');
// } else if (userHeights === 'no' || userHeights === 'n') {
//   alert('Correct!');
//   points++;
//   // console.log('Do you like spicy food? input accepted as no/n');
// }

// // Question 5
// var userMotorcycle = prompt('Do I drive a motorcycle?').toLowerCase();

// if (userMotorcycle === 'yes' || userMotorcycle === 'y') {
//   alert('Actually, I do not!');
//   // console.log('Do I drive a motorcycle? input accepted as yes/y');
// } else if (userMotorcycle === 'no' || userMotorcycle === 'n') {
//   alert('Correct! I\'m too clumsy to drive a motorcycle.');
//   points++;
//   // console.log('Do I drive a motorcycle? input accepted as no/n');
// }

// // template literal
// alert(`Now you know a little bit about me! Nice to meet you, ${customerName}!`);



// number guessing game


// var tries = 0;
// var randomNumber = Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10

// while (tries < 4) {
//   var userGuess = prompt('Try to guess a number between 1 and 10');

//   if (userGuess === randomNumber) {
//     alert('YOU GUESSED CORRECTLY! YOU WIN!');
//     points++;
//     break;
//   } else if (userGuess > randomNumber) {
//     alert('You guessed too high!');
//     tries++;
//   } else if (userGuess < randomNumber){
//     alert('You guessed too low!');
//     tries++;
//   } else {
//     alert('Invalid input');
//   }

//   if (tries === 4 && userGuess !== randomNumber) {
//     alert('The correct answer was: ' + randomNumber + ' ..YOU LOSE!!');
//   }
// }

var points = 0;

var attemptsRemaining = 6;
var answeredCorrectly = false;
var correctAnswers = ['lofi', 'rock', 'rap', 'r&b', 'rock', 'pop'];
var guessMusic = prompt('Try and guess a music genre that I listen to').toLowerCase();

while (attemptsRemaining > 0 && !answeredCorrectly) {
  // var guessMusic = prompt('Try and guess a music genre that I listen to').toLowerCase();
  attemptsRemaining--;
  for (var i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === guessMusic){
      answeredCorrectly = true;
      alert(`Yes, I do listen to ${guessMusic}`);
      points++;
    }
  }
  if (attemptsRemaining > 0 && !answeredCorrectly) {
    guessMusic = prompt(`No, I do not listen to ${guessMusic}`);
  }
  if (attemptsRemaining === 0 && !answeredCorrectly) {
    alert(`Sorry you lose, the correct answers were: ${correctAnswers}`);
  }
}


alert(`You got ${points} / 7 points!!!`);