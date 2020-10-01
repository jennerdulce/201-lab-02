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


// Question 1
var userLive = prompt('Do you live in Seattle?').toLowerCase()

if ((userLive == 'yes') || (userLive == 'y')) {
  alert('You answered: Yes');
  console.log('Do you live in Seattle? input accepted as yes/y');
} else if ((userLive == 'no') || (userLive == 'n')) {
  alert('You answered: No');
  console.log('Do you live in Seattle? input accepted as no/n');
} else {
  alert('Invalid Response');
  console.log('Do you live in Seattle? invalid response');
}


// Question 2
var userWorkout = prompt('Do you like to work out?').toLowerCase()

if ((userWorkout == 'yes') || (userWorkout == 'y')) {
  alert('You answered: Yes');
  console.log('Do you like to work out? input accepted as yes/y');
} else if ((userWorkout == 'no' || userWorkout == 'n')) {
  alert('You answered: No');
  console.log('Do you like to work out? input accepted as no/n');
} else {
  alert('Invalid Response');
  console.log('Do you like to work out? invalid response');
}


// Question 3
var userRain = prompt('Do you like rain?').toLowerCase()

if ((userRain == 'yes') || (userRain == 'y')) {
  alert('You answered: Yes');
  console.log('Do you like rain? input accepted as yes/y');
} else if ((userRain == 'no' || userRain == 'n')) {
  alert('You answered: No');
  console.log('Do you like rain? input accepted as no/n');
} else {
  alert('Invalid Response');
  console.log('Do you like rain? invalid response');
}


// Question 4
var userSpicy = prompt('Do you like spicy food?').toLowerCase()

if ((userSpicy == 'yes') || (userSpicy == 'y')) {
  alert('You answered: Yes');
  console.log('Do you like spicy food? input accepted as yes/y');
} else if ((userSpicy == 'no' || userSpicy == 'n')) {
  alert('You answered: No');
  console.log('Do you like spicy food? input accepted as no/n');
} else {
  alert('Invalid Response');
  console.log('Do you like spicy food invalid response');
}


// Question 5
var userPet = prompt('Do you have a pet?').toLowerCase()

if ((userPet == 'yes') || (userPet == 'y')) {
  alert('You answered: Yes');
  console.log('Do you have a pet? input accepted as yes/y');
} else if ((userPet == 'no' || userPet == 'n')) {
  alert('You answered: No');
  console.log('Do you have a pet? input accepted as no/n');
} else {
  alert('Invalid Response');
  console.log('Do you have a pet? invalid response');
}


