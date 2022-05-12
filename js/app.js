let greetingQuestion = prompt('Hi I\'m Marco! Welcome to my Guessing Game! Are you having a nice day today?').toLowerCase();

if (greetingQuestion === 'yes' || greetingQuestion === 'y') {
  alert('Great! I\'m having a great day too!');
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
}

let questionThree = prompt('Do you think I\'m very tall?').toLowerCase();

if (questionThree === 'yes' || questionThree === 'y') {
  alert('Yeah great guess I am actually 6\'8!');
} else if (questionThree === 'no' || questionThree === 'n') {
  console.log('wrong');
  alert('Actually I am pretty tall, I\'m 6\'8!');
}

let questionFour = prompt('Ok next question: Do you think I speak German?').toLowerCase();

if (questionFour === 'yes' || questionFour === 'y') {
  alert('Good guess! I totally do speak German!');
} else if (questionFour === 'no' || questionFour === 'n') {
  console.log('wrong');
  alert('As a matter, a fact, I do speak German.');
}

let questionFive = prompt('Last question: Do you think I like to play Golf?').toLowerCase();

if (questionFive === 'yes' || questionFive === 'y') {
  alert('That\'s right! I love golfing!');
} else if (questionFive === 'no' || questionFive === 'n') {
  console.log('wrong');
  alert('That is incorrect, I love to play golf!');
}
