/**
 * Data structures
 *
 * Allow us to represent other forms of data
 * like lists(arrays) and collections(objects)
 */

// Arrays - list of values enclosed using square brackets -> []
// The values can be of any data types

// Creating arrays

// 1. Array constructor
// const students = new Array('Lewis', 'John', 'Imani');

// console.log(students);

// 2. Square brackets
const cars = ['Audi', 'BMW', 'Mercedes'];

console.log(cars.length);

// Index - position of an element/value in an array
// ! The index always starts at 0
// we can use the Index to access elements inside an array
console.log(cars[0]);
console.log(cars[2]);

cars[2] = 'Porche';

cars[3] = 'Tesla';

cars[5] = 'Ferrari';

console.log(cars);
console.log(cars.length);

// Array methods - allows us to manipulate arrays
const colors = ['red', 'green'];

/**
 * Adding elements
 */

// 1. .push() -> add one or more elements at the end of an array
colors.push('blue', 'violet');

console.log(colors);

// 2. unshift() -> add one or more elements at the beginning of an array
colors.unshift('purple', 'yellow');

console.log(colors);

/**
 * Removing elements
 */

// 1. pop() -> removes the element at the end on an array
const deletedColor = colors.pop();

console.log(deletedColor);

console.log(colors);

// 2. shift() -> removes the element at the beginning of an array
colors.shift();
colors.shift();
colors.shift();

const delColor = colors.shift();

console.log(delColor);

console.log(colors);

/**
 * slice() -> nondestructive (does not mutate the original array)
 *
 * Can make a copy of the original array
 * Delete elements in an array
 */
const students = ['Willis', 'Maxwel', 'Yvonne', 'Brian', 'Matilda'];

console.log(students);

// 1. Make a copy of students
// ! as long as no arguments are passed, slice will always make a copy
const copyOfStudents = students.slice();

console.log(copyOfStudents);

// spread operator -> makes a copy too (...)
const secondCopy = [...students];

console.log(secondCopy);

// 2. Deleting values
const deletedStudents = students.slice(4);

console.log(deletedStudents);

console.log(students);

/**
 * splice() -> destructive (mutates the original array)
 *
 * Delete elements
 * Add new elements
 * Update elements
 */

// 1. Delete elements
const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'];

console.log(days);

const deletedDays = days.splice(0, 2);

console.log(deletedDays);

console.log(days);

// 2. Adding elements(one or more)
// ! The second argument should always be 0
days.splice(0, 0, 'Mon', 'Tue');
console.log(days.length);
days.splice(days.length, 0, 'Sat', 'Sun');

console.log(days);

// 3. Updating elements
days.splice(0, 1, 'Monday');
days.splice(4, 1, 'Friday');
days.splice(2, 1, 'Wednesday');

console.log(days);

// Array iteration
const scores = [34, 45, 53, 32, 54];

for (let i = 0; i < scores.length; i++) {
	// console.log(i);
	// const score = scores[i];
	console.log(scores[i]);
}
