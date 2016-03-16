// Make a function that adds a lot of stuff.
// Note that defining the variable sum inside of
// the function does not interfere with the sum
// defined outside of the function. The function
// only sees the inner one.
var sum = function() {
	var i, sum = 0;
	for (i = 0; i < arguments.length; i += 1) {
		sum += arguments[i];
	}
	return sum;
};
console.log(sum(4, 8, 15, 16, 23, 42)); // 108

var multiply = function() {
	var i;
	var result = 1;
	for (i = arguments.length - 1; i >= 0; i--) {
		result *= arguments[i];
	}
	return result;
};

console.log(multiply(2, 3, 4, 13, 51));

var add = function(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name: 'TypeError',
			message: 'add needs numbers'
		};
	}
	return a + b;
};
// console.log(add({}, 5)); // this will throw the error

// Make a try_it function that calls the new add
// function incorrectly.
var try_it = function() {
	try {
		add("seven");
	} catch (e) {
		console.log(e.name + ': ' + e.message);
	}
};
try_it();