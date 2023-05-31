//* "HOF" stands for Higher-Order Function. A Higher-Order Function is a function that either takes one or more functions as arguments or returns a function as its result. */

//* Higher-Order Functions are usually used to transform the data.
// example like map() reducer() filter() takes a callback function that's why is HOC(passing Function as an Argument).

// example 1 Map() return an array works on array 

let arr = [2, 3, 4, 5]

console.log(arr.map(value => value * 2));

// example 2 setTimeOut()

let hello = setTimeout(() => {
	console.log('hello');
}, 1000);


// example 3 multiplications

// Higher-Order Function that returns a function

function multiply(num) {
	return function (x) {
		return num * x
	}
}

// Create a new function using the Higher-Order Function
let multiplyByTwo = multiply(2)

// Use the new function to multiply a number
let passValue = multiplyByTwo(5)

console.log('The Result ' + passValue);   // OutPut Value is 10