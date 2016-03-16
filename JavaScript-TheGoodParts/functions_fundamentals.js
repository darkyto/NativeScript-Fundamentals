// Create myObject. It has a value and an increment
// method. The increment method takes an optional
// parameter. If the argument is not a number, then 1
// is used as the default.
var add = function(a, b) {
	return a + b;
};

//he Method Invocation Pattern
var myObject = {
	value: 0,
	increment: function(incrementValue) {
		this.value += (typeof incrementValue === 'number') ? incrementValue : 1;
	},
	getValue: function() {
		return this.value;
	}
};

myObject.increment();
console.log(myObject.value); // 1
myObject.increment(2);
console.log(myObject.value); // 3

function increment(objectToIncrement, incrementValue) {
	objectToIncrement.value += (typeof incrementValue === 'number') ? incrementValue : 1;
}

increment(myObject, 10);
console.log(myObject.value);
myObject.increment(4);
console.log(myObject.value);

// Augment myObject with a double method.
// The Function Invocation Pattern
myObject.double = function() {
	var that = this; // Workaround.
	var helper = function() {
		that.value = add(that.value, that.value);
	};
	helper(); // Invoke helper as a function.
};
// Invoke double as a method.
myObject.double();
console.log(myObject.getValue()); // 6