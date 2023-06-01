//! 1 : ---------------------- call method---------------------------
//* In JavaScript, the call() method is a built-in function that allows you to invoke a function with a specified this value and arguments provided individually as separate parameters. */

//* Syntax:
//*functionName.call(thisArg, arg1, arg2, ...);


//example : 1

/* const person = {
		fullName: function (city, country) {
				return this.firstName + " " + this.lastName + ", " + city + ", " + country;
		},
};

const john = {
		firstName: "John",
		lastName: "Doe",
};

const mary = {
		firstName: "Mary",
		lastName: "Smith",
};

//* Using the call() method to invoke the fullName function with different objects
console.log(person.fullName.call(john, "New York", "USA"));
//*Output: John Doe, New York, USA

console.log(person.fullName.call(mary, "London", "UK"));
//* Output: Mary Smith, London, UK
	*/


// example : 2

function greet() {
	console.log(`hello ${this.firstName} ${this.lastName} good day!`);
}


let person1 = {
	firstName: "John",
	lastName: "Doe",
}

let person2 = {
	firstName: "Jon",
	lastName: "wick",
}

greet.call(person1) // outPut : hello John Doe good day!
greet.call(person2) // outPut : hello Jon wick good day!


//! 2 :------------------------------ apply method------------------------

/*  The apply() method is another built-in function in JavaScript that allows you to invoke a function with a specified this value and an array-like or iterable object as arguments. It is similar to the call() method, but instead of passing arguments individually, apply() accepts the arguments as an array or an array-like object */

//* syntax for the apply() method

//* functionName.apply(thisArg, [arg1, arg2, ...]);

//example 1:

/* 
function greet(message, punctuation) {
		console.log(message + " " + this.firstName + " " + this.lastName + punctuation);
}

const person = {
		firstName: "John",
		lastName: "Doe",
};

const args = ["Welcome", "!"];

//* Using the apply() method to invoke the greet function with an array of arguments
greet.apply(person, args);
//* Output: Welcome John Doe!

//* Equivalent to greet("Welcome", "!") when using apply()

*/


//Example 2 :

function greetApply(greet, day) {
	console.log(`${greet} ${this.firstName} ${this.lastName} today is ${day}!`);
}

let person = {
	firstName: "John",
	lastName: "Doe",
}

let arg = ['Hello', 'sunday']

greetApply.call(person, ...arg) //this is a modern method using spread  //* outPut : Hello John Doe today is sunday!
greetApply.apply(person, arg) // outPut : Hello John Doe today is sunday!


//! 3 : ----------------------------------------bind Method-------------------------------------
/* The bind() method is a built-in function in JavaScript that allows you to create a new function with a specified this value and, optionally, pre-filled arguments. Unlike call() and apply(), which immediately invoke the function, bind() returns a new function with the provided this value and arguments, allowing you to invoke it later.  */

//* syntax for the bind() method

//* functionName.bind(thisArg, arg1, arg2, ...);


// example 1 :

/* 
function greet(message) {
		console.log(message + " " + this.firstName + " " + this.lastName);
}

const person = {
		firstName: "John",
		lastName: "Doe",
};

//* Using the bind() method to create a new function with a specific context
const greetPerson = greet.bind(person);

//* Invoking the new function
greetPerson("Hello");
//* Output: Hello John Doe

//* Equivalent to greet.call(person, "Hello")
*/

//example @ : 2


function greetBind(greet, day) {
	console.log(`${greet} ${this.firstName} ${this.lastName} today is ${day}!`);
}

let personDetails = {
	firstName: "bind jhon",
	lastName: "Doe",
}

let BindFn = greetBind.bind(personDetails) // you can pass 2nd argument here also 


BindFn('hello', 'Sunday') // output : hello bind jhon Doe today is Sunday! 