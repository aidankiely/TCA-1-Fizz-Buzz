function fizzbuzz(n) {
for (let i = 1; i <= n; i++){
	if (Number.isInteger(i/3) && Number.isInteger(i/5)){
		console.log("fizzbuzz")
	} else if (Number.isInteger(i/3)) {
		console.log("fizz");
	} else if (Number.isInteger(i/5)){
		console.log("buzz")
	} else {
		console.log(i)
	}
}

	// Leave the console.log below at the bottom of the function
	console.log("-------------");
}

fizzbuzz(16);
fizzbuzz(25);


// Instructions  
// FizzBuzz

// Write a `fizzbuzz()` function that takes in a number, `n`, and prints out the numbers from 1 to `n`. 

// For **multiples of three**, replace the number with the word `"Fizz"`, and for the **multiples of five**, replace the number with the word `"Buzz"`. 

// For numbers that are **multiples of both three and five**, use `"FizzBuzz"` (capitalization matters).

// For example, `fizzbuzz(16)` should print:
// `1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16`


// *You don't need to have them separated by commas; you can have each number (or word) get printed on it's own line*