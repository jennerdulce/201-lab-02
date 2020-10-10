'use strict';

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
  greeting = 'Welcome';
}

var customerName = prompt('What is your name?');
document.getElementById('userGreeting').innerHTML =
  greeting + '<br>' + customerName;

var points = 0;

function questions() {

  var userLive = prompt('Do I live in Seattle?').toLowerCase();

  if (userLive === 'yes' || userLive === 'y') {
    alert('Correct!');
    points++;
  } else if (userLive === 'no' || userLive === 'n') {
    alert('I actually do live in Seattle');
  }

  var userDog = prompt('Do I have a dog?').toLowerCase();

  if (userDog === 'yes' || userDog === 'y') {
    alert('Correct! I have a dog named Fang.');
    points++;
  } else if (userDog === 'no' || userDog === 'n') {
    alert('Actually, I do have a dog!');
  }

  var userMilitary = prompt('Was I in the military?').toLowerCase();

  if (userMilitary === 'yes' || userMilitary === 'y') {
    alert('Correct! I served in the US Navy.');
    points++;
  } else if (userMilitary === 'no' || userMilitary === 'n') {
    alert('I actually was! No');
  }

  var userHeights = prompt('Do I like heights?').toLowerCase();

  if (userHeights === 'yes' || userHeights === 'y') {
    alert('No no no no I absolutely hate heights!');
  } else if (userHeights === 'no' || userHeights === 'n') {
    alert('Correct!');
    points++;
  }

  var userMotorcycle = prompt('Do I drive a motorcycle?').toLowerCase();

  if (userMotorcycle === 'yes' || userMotorcycle === 'y') {
    alert('Actually, I do not!');
  } else if (userMotorcycle === 'no' || userMotorcycle === 'n') {
    alert('Correct! I\'m too clumsy to drive a motorcycle.');
    points++;
  }

  alert(`Now you know a little bit about me! Nice to meet you, ${customerName}!`);
}

function questionSix() {
  var tries = 0;
  var randomNumber = Math.floor(Math.random() * 10) + 1;

  while (tries < 4) {
    var userGuess = parseInt(prompt('Try to guess a number between 1 and 10'));
    console.log(userGuess);
    console.log(randomNumber);
    if (userGuess === randomNumber) {
      alert('YOU GUESSED CORRECTLY! YOU WIN!');
      points++;
      break;
    } else if (userGuess > randomNumber) {
      alert('You guessed too high!');
      tries++;
    } else if (userGuess < randomNumber) {
      alert('You guessed too low!');
      tries++;
    } else {
      alert('Invalid input');
    }
    if (tries === 4 && userGuess !== randomNumber) {
      alert('The correct answer was: ' + randomNumber + ' ..YOU LOSE!!');
    }
  }
}

function questionSeven(){
  var attemptsRemaining = 6;
  var answeredCorrectly = false;
  var correctAnswers = ['lofi', 'rock', 'rap', 'r&b', 'pop']; // 5
  var guessMusic = prompt('Try and guess a music genre that I listen to').toLowerCase();

  while (attemptsRemaining > 0 && !answeredCorrectly) {
    attemptsRemaining--;

    for (var i = 0; i < correctAnswers.length; i++) {
      if (correctAnswers[i] === guessMusic) { // rap
        answeredCorrectly = true;
        alert(`Yes, I do listen to ${guessMusic}`);
        points++;
      }
    }

    if (attemptsRemaining > 0 && !answeredCorrectly) {
      guessMusic = prompt(`No, I do not listen to ${guessMusic}. Guess again.`).toLowerCase();
    }

    if (attemptsRemaining === 0 && !answeredCorrectly) {
      alert(`Sorry you lose, the correct answers were: ${correctAnswers}`);
    }
  }
}

questions();
questionSix();
questionSeven();
alert(`You got ${points} / 7 points!!!`);
