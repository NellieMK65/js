/**
 * Default sequence - top to bottom and left to right
 *
 * Selection - we can choose to run certain codes and not others
 * Repetition - we can choose to run certain codes until a contion is met
 */

// 1. Selection using if statement
let favoriteNumber = 4;
if (favoriteNumber >= 10) {
	console.log('I am being executed');
	// evaluating favoriteNumber >= 10 returns true
	// favoriteNumber = favoriteNumber + 10;
	favoriteNumber += 10;
}

console.log(favoriteNumber);

const age = 2;

if (age >= 18) {
	console.log('I can vote');
} else {
	console.log('I cannot vote');
}

// ternary operator
const userCanVote = age >= 18 ? 'User can vote' : 'User cannot vote';

console.log(userCanVote);

console.log('Execution continues');

const user = 'leader';
const username = 'John';

if (user === 'student') {
	console.log('Student logged in');
} else if (user === 'tm') {
	console.log('TM logged in');
} else if (user === 'pod-leader') {
	console.log('Pod lead logged in');
} else {
	console.log('User not found');
}

console.log('Execution is still happening');

const num = 223;

console.log(num > 0 && num < 100);

// Selection using switch statement
switch (user) {
	case 'student':
		console.log('Student logged in');
		break;
	case 'tm':
		console.log('TM logged in');
		break;
	case 'pod-leader':
		console.log('Pod lead logged in');
		break;
	default:
		console.log('User not found');
		break;
}

console.log('Execution continuing');

// Repetition using while loop

// Infinity loop
// can be terminated using ctrl(cmd) + c
// while (true) {
// 	console.log('Execution is happening');
// }

// Natural terminating

let count = 9;

// const studentEmails = ['john@student.moringaschool.com'];

while (count < 5) {
	console.log(`Count ${count}`);

	// count = count + 1;
	count += 1;
}

console.log(count);

let countTwo = 9;

// 4. repetition using the do/while
// will always run atleast once
do {
	console.log(`Count two ${countTwo}`);
	countTwo++;
} while (countTwo < 5);

console.log(countTwo);
