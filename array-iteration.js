/**
 * Iteration -> run statements once for each element
 *
 * Looping -> run statements repetitively until a certain condition is met
 */

let count = 0;
const scores = [34, 45, 53, 32, 54, 67];

console.log(scores.length);

while (count < 5) {
	console.log(scores[count]);
	count++;
}

console.log(count);

for (let i = 0; i < scores.length; i++) {
	console.log(i);
	const score = scores[0];
	console.log(score);
}

// for...of (iterate through an array and even strings)
for (const score of scores) {
	console.log(score);
}

const str = 'code';

console.log(str[0]);
console.log(str.charAt(0));

for (const letter in str) {
	console.log(letter);
	console.log(str[letter]);
	console.log(str.charAt(letter));
}

// object iteration using for...in
const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 34,
};

const key = 'age';

console.log(person[key]);

for (const key in person) {
	console.log(key);
	console.log(person[key]);
}

// Array iteration methods
const copyOfScores = [...scores];
const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'];

console.log(copyOfScores);
// 1. indexOf() -> it finds the position of a given element and returns the index,
// or returns a -1 if the element is not found
console.log(copyOfScores.indexOf(25));
const indexOfWednesday = days.indexOf('Wed');
console.log(indexOfWednesday);

// 2. find() -> returns the first element in an array that meets a certain condition
const score = scores.find(function (score, index) {
	console.log(score);
	console.log(index);
	if (score > 50) {
		return score;
	}
});
console.log(score);

const anotherScore = scores.find((score) => score > 30);
console.log(anotherScore);

function filter(num) {
	if (num > 60) {
		return num;
	}
}

const scoreGreaterThan60 = scores.find(filter);
console.log(scoreGreaterThan60);

// 3. filter() -> finds and returns a list of elements that meet a certain condition
const scoresOver50 = scores.filter((score) => score > 50);

const students = [
	{ firstName: 'Alex', score: 50 },
	{ firstName: 'Jesse', score: 65 },
	{ firstName: 'Immaculate', score: 56 },
	{ firstName: 'John', score: 76 },
	{ firstName: 'Lewis', score: 45 },
];

const studentsAbove55 = students.filter((student) => student['score'] > 55);

const studentAbove55 = students.find((student) => student['score'] > 55);

console.log(studentAbove55);

console.log(students.length);

console.log(studentsAbove55);

console.log(scoresOver50);

// 4. map() -> iterates through the whole array modifying each element and
// returns the modified array
const modifiedScores = scores.map((score) => score + 2);
const modifiedStudents = students.map((student) => ({
	...student,
	firstName: student.firstName.toUpperCase(),
}));

console.log(modifiedStudents);

console.log(modifiedScores);
console.log(scores);

// 5. reduce() -> create a summary or aggregation of values in an array
const sum = scores.reduce((prevValue, currValue, ugali) => {
	console.log(ugali);
	console.log(prevValue);
	console.log(currValue);
	return prevValue + currValue;
}, 0);

console.log(sum);

// 6. forEach()

scores.forEach((score, index) => {
	console.log(score);
	console.log(index);
});
