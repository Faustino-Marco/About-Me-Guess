let greetingQuestion = prompt('Hi I\'m Marco! Welcome to my Guessing Game! Are you having a nice day today?').toLowerCase();

if (greetingQuestion === 'yes' || greetingQuestion === 'y') {
  alert('Great! I\'m having a great day too!');
} else if (greetingQuestion === 'no' || greetingQuestion === 'n') {
  alert('Well I am sorry to hear that but I never have bad days and every day is a good day for me. So now you know that about me.');
}

let questionTwo = prompt('Do you think Marco has a PhD?').toLowerCase();

if (questionTwo === 'yes' || questionTwo === 'y') {
  alert('What a compliment to his apparent intelligence! He actually doesn\'t have a PhD, though.');
} else if (questionTwo === 'no' || questionTwo === 'n') {
  alert('That is correct Marco does not have a PhD.');
}

let questionThree = prompt('Do you think Marco is tall?').toLowerCase();

if (questionThree === 'yes' || questionThree === 'y') {
  alert('Yeah great guess he is actually 6\'8!');
} else if (questionThree === 'no' || questionThree === 'n') {
  alert('Actually he is pretty tall, he is 6\'8!')
}

