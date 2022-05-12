'use strict';

let totalScore = 0;
let namePrompt = prompt('Hey there! What\'s your name?');
alert('Great to meet you, ' + namePrompt + '! Welcome to my site!');

let greetingQuestion = prompt('Anyways I\'m Marco! Welcome to my Guessing Game! Are you having a nice day today?').toLowerCase();

if (greetingQuestion === 'yes' || greetingQuestion === 'y') {
  alert('Great! I\'m having a great day too!');
  totalScore++;
} else if (greetingQuestion === 'no' || greetingQuestion === 'n') {
  console.log('wrong');
  alert('Well I am sorry to hear that but I never have bad days and every day is a good day for me. So now you know that about me.');
}

let questionTwo = prompt('Do you think I have a PhD?').toLowerCase();

if (questionTwo === 'yes' || questionTwo === 'y') {
  console.log('wrong');
  alert('I will take that as a compliment! I actually don\'t have a PhD, though.');
} else if (questionTwo === 'no' || questionTwo === 'n') {
  alert('That is correct I do not have a PhD.');
  totalScore++; 
}

let questionThree = prompt('Do you think I\'m very tall?').toLowerCase();

if (questionThree === 'yes' || questionThree === 'y') {
  alert('Yeah great guess I am actually 6\'8!');
  totalScore++;
} else if (questionThree === 'no' || questionThree === 'n') {
  console.log('wrong');
  alert('Actually I am pretty tall, I\'m 6\'8!');
}

let questionFour = prompt('Ok next question: Do you think I speak German?').toLowerCase();

if (questionFour === 'yes' || questionFour === 'y') {
  alert('Good guess! I totally do speak German!');
  totalScore++;
} else if (questionFour === 'no' || questionFour === 'n') {
  console.log('wrong');
  alert('As a matter, a fact, I do speak German.');
}

let questionFive = prompt('Last question: Do you think I like to play Golf?').toLowerCase();

if (questionFive === 'yes' || questionFive === 'y') {
  alert('That\'s right! I love golfing!');
  totalScore++;
} else if (questionFive === 'no' || questionFive === 'n') {
  console.log('wrong');
  alert('That is incorrect, I love to play golf!');
}
alert(`That\'s all 5 of the first questions done, ${namePrompt}!`);

// let namePrompt = prompt('Well anyways, what\'s your name?').toLowerCase();
// alert('Great to meet you, ' + namePrompt + '! Welcome to my site!');

alert('Now it\'s time to play a different guessing game! I\'ll think of a number and you try to guess it! Let\'s begin...');


let attempts = 4;
let correctAnswer = 9;
let userGuess = null;

while (userGuess !== correctAnswer) {
  if (attempts === 0) {
    alert('Uh oh! Wait! You\'ve run out of attempts! The number was 9! Thanks for playing, enjoy checking out my site.');
    break;
  }
  userGuess = prompt('Guess what number I\'m thinking of!');
  if (userGuess > correctAnswer) {
    alert('Too high! Guess again!');
  } else if (userGuess < correctAnswer) {
    alert('Too low! Guess again!');
  } else if (userGuess === correctAnswer) {
    alert(`You nailed it, ${namePrompt}!`);
    totalScore++;
  }
  // break;
  attempts = (attempts - 1);
}

let cityAttempts = 6;
let marcoCities = ['seattle', 'stuttgart', 'budapest'];
let cityGuess = null;

while (cityGuess !== marcoCities[0] || cityGuess !== marcoCities[1] || cityGuess !== marcoCities[2]) {
  if (cityAttempts === 0) {
    alert('Awh shoot! You\'re out of guesses!');
    break;
  }
  cityGuess = prompt('Guess one of the cities I\'ve lived in!').toLowerCase();
  if (cityGuess !== marcoCities[0] || cityGuess === marcoCities[1] || cityGuess === marcoCities[2]) {
    alert('Not that one, guess again!');
  }
  if (cityGuess === marcoCities[0] || cityGuess === marcoCities[1] || cityGuess === marcoCities[2]) {
    alert('Wow you guessed one! Great job! I\'ve lived in Seattle, Stuttgart, and Budapest.');
    totalScore++;
    break;
  }
  cityAttempts = (cityAttempts -1);
}

alert(`Alright ${namePrompt} that\'s all my questions! You got ${totalScore} of 7 correct! Enjoy checking out my website!`);


// // // let qCount = 1

// // while (userGuess !== correctAnswer){
// //   // alert('That\'s right! You guessed it!');
// // userGuess = prompt('Guess what number I\'m thinking of?');
// // if (userGuess <= correctAnswer) {
// //   userGuess = prompt('Too low! Guess again! What number am I thinking of?');
// //   // qCount++;
// // } else if (userGuess >= correctAnswer) {
// //   userGuess = prompt('Too high! Guess again! What number am I thinking of?');
// //   // qCount++;
// // }

// // attempts = 1
// // while (attempts <= 4; attempts++) {
// //   if (userGuess < correctAnswer){
// //     alert('Too low! Guess again!');
// //   } else if (userGuess > correctAnswer) {
// //     alert('Too high! Guess again!');
// //   }
// //   break;
// // }

// // let score = 0

