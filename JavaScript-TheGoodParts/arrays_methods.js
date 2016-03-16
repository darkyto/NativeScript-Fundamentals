Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};

Array.method('reduce', function(f, value) {
	var i;
	for (i = 0; i < this.length; i += 1) {
		value = f(this[i], value);
	}
	return value;
});

// Create an array of numbers.
var data = [4, 8, 15, 16, 23, 42];
// Define two simple functions. One will add two
// numbers. The other will multiply two numbers.
var add = function(a, b) {
	return a + b;
};

var mult = function(a, b) {
	return a * b;
};
// Invoke the data's reduce method, passing in the
// add function.
var sum = data.reduce(add, 0); // sum is 108
var newSum = data.reduce(add, 10);
console.log(sum);
console.log(newSum);

var product = data.reduce(mult, 1);
var newProduct = data.reduce(mult, 10);
console.log(product);
console.log(newProduct);

data.total = function() {
	return this.reduce(add, 0);
};
total = data.total(); // total is 108