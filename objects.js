/**
 * Objects - collection of data consisting of key value pairs (properties),
 * separated by comma {}
 */

const firstName = 'John';
const lastName = 'Doe';

const person = {
	firstName: 'John',
	lastName: `Doe`,
	// unconventional keys
	['full name']: 'John Doe',
	age: 34,
	address: {
		county: 'Nairobi',
		subCounty: 'Kinoo',
		postalCode: 2000,
	},
	children: ['Jane', { fullName: 'Allan Gitonga', age: 19 }],
};

// Accessing values inside an object
// 1. Dot notation .
console.log(person.age);
console.log(person.address.subCounty);
console.log(person.children[1].fullName);

// 2. Square bracket notation []
console.log(person['full name']);

console.log(person.address['county']);
console.log(person['address'].subCounty);
console.log(person['address']['postalCode']);

// Adding properties
person.birthday = 1980;
person['job'] = 'Software Engineer';

console.log(person);

console.log(person.job);

// Update properties
person.firstName = 'Jane';
person['full name'] = `Jane Doe`;

// Deleting properties
delete person.job;
delete person['full name'];

console.log(person);

console.log(person.firstName);
