//!   Currying method
/*  Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function. */


// example 1 :  simple 

function add(a, b) {
	return a + b;
}
var add1 = add(1, 2);
console.log(add1);   // OutPut : 3

// using an arrow function
const curried = (a) => (b) => a + b;

const add2 = curried(1)(2);
console.log(add2);  // OutPut : 3


// example 2: using closures

function multiply(a) {
	return function (b) {
		return a * b
	}
}

const multipleByTwo = multiply(2);
console.log(multipleByTwo(3));     // OutPut : 6
console.log(multipleByTwo(6));     // OutPut : 12



// example 3: dynamic value passing recursively  and bind method

function addCurried(...arg) {
	if (arg.length === 0) {
		return 1
	} else if (arg.length === 1) {
		return arg[0]
	} else {
		return arg[0] + addCurried(...arg.slice(1))
	}
}
//It recursively adds the first argument with the result of invoking addCurried with the remaining arguments.

const addValue = addCurried.bind(null);

console.log(addValue(1, 2, 3, 4));
