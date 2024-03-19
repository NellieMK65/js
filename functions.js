/**
 * FUNCTIONS
 *
 * pieces that allow reusability
 *
 * Can accept one or more parameters separated by commas
 *
 * Parameters - variables listed in the paranthesis of functions
 * Arguments - values that are passed when calling/invoking a function
 */

// sytntax
function functionName(parameters) {
	// function logic/code
}

function greeting(name, timeOfDay) {
	console.log(`Good ${timeOfDay} ${name}`);
}

// call/invoke the function in order for it work or get executed
greeting('Ian', 'evening');
greeting('Hamida', 'morning');

console.log(34 + 23);
console.log(546 + 341);

function sum(numOne, numTwo) {
	console.log(numOne + numTwo);
	return numOne + numTwo; // it stops execution of a function
	console.log('Anything'); //will not be executed
}

const sumOfTwoNumbers = sum(9, 10);

console.log(sumOfTwoNumbers);

const otherSum = sum(10, 34);

console.log(otherSum);
