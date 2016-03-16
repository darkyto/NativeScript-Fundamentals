Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};

// apply  (apply invocation pattern)
Function.method('bind', function(that) {
	// Return a function that will call this function as
	// though it is a method of that object.
	var method = this,
		slice = Array.prototype.slice,
		args = slice.apply(arguments, [1]);
	return function() {
		return method.apply(that,
			args.concat(slice.apply(arguments, [0])));
	};
});

var x = function() {
	return this.value;
}.bind({
	value: 111
});
console.log(x()); // 111