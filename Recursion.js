//! Recursion in Javascript -

/* Recursion is a programming concept where a function calls itself to solve a problem by breaking it down into smaller, similar subproblems. In JavaScript, you can implement recursive functions using the following general pattern: */

/* 

function recursiveFunction(/* parameters ) {
	// Base case(s): check if the problem can be solved immediately
	if (/* base case condition ) {
		// Return the solution or stop the recursion
	//	return /* solution or base case result ;
	}

	// Recursive case(s): break the problem into smaller subproblems
	// and call the function recursively
	// Modify the parameters to make progress towards the base case

	return recursiveFunction(/* modified parameters );
}
	*/

function factorial(n) {
	// Base case: factorial of 0 or 1 is 1
	if (n === 0 || n === 1) {
		return 1;
	}

	// Recursive case: calculate factorial of n by calling the function recursively
	return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
