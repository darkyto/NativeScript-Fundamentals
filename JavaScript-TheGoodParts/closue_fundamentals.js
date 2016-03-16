var myObject = function() {
	var value = 0;
	return {
		increment: function(inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function() {
			return value;
		}
	};
}();

myObject.increment(2);
console.log(myObject.getValue()); // we have access to public functions
console.log(myObject.value); // undefined (value is 'hidden' from outside)

var quo = function(status) {
	return {
		get_status: function() {
			return status;
		}
	};
};
// Make an instance of quo.
var myQuo = quo("amazed");
console.log(myQuo.get_status()); // we have access to public functions
console.log(myQuo.status); // undefined (value is 'hidden' from outside)

var fade = function(node) {
	var level = 1;
	var step = function() {
		var hex = level.toString(16);
		node.style.backgroundColor = '#4444' + hex + hex;
		if (level < 15) {
			level += 1;
			setTimeout(step, 100);
		}
	};
	setTimeout(step, 100);
};
fade(document.body);