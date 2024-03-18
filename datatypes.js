//

// 1. Strings
const firstName = 'Jane';
const lastName = 'Doe';
const fullName = `Jane Doe`;

console.log(typeof firstName);
console.log(typeof fullName);

// string concatenation using + operator
console.log(firstName + ' ' + lastName);

// curly brackets -> {}
// paranthesis (soft brackets) -> ()
// square brackets -> []

// string interpolation - injecting values into strings
console.log(`${firstName} ${lastName}, age is ${100 - 45}`);
console.log('${firstName} ${lastName}, age is ${100 - 45}');

// 2. Numbers
console.log(typeof 3);
console.log(typeof -34);
console.log(typeof 45.2334);

// 3. boolean
console.log(typeof true);
console.log(typeof false);

// 4. objects - collection of data consisting of key value pairs, separated by comma
const student = {
	firstName: 'Jane',
	lastName: 'Doe',
	cohort: 'SDF-FT09',
	class: 'Bravo',
	studentEmail: 'jane.doe@student.moringaschool.com',
	age: 23,
};

console.log(typeof student);

// 4.a arrays - list of values enclosed using square brackets []
const students = ['John', 'Brian', 'Imani', 34];
const scores = [23, 45, 34, 34];
console.log(typeof students);

// 5. null - respresents an intentionally absent value
const newStudent = null;
console.log(newStudent);

// 6. undefined - not assinged any value
let age;
console.log(age);

// 7. symbols
