var empty = [];
var numbers = [
	'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
];

console.log(numbers[1]);
console.log(empty.length);
console.log(numbers.length);

var numbers_object = {
	'0': 'zero',
	'1': 'one',
	'2': 'two',
	'3': 'three',
	'4': 'four',
	'5': 'five',
	'6': 'six',
	'7': 'seven',
	'8': 'eight',
	'9': 'nine'
};
console.log(numbers_object.length); // no lenght on object array
console.log(numbers_object['7']);
console.log(numbers_object[1]); // this is the same as above and no indexing

numbers.push('ten');
console.log(numbers.length);

numbers.splice(0, 1); // will remove the first element (0)
numbers.splice(numbers.length - 1, 1); // will remove the last (10)
// console.log(numbers);

for (var i = numbers.length - 1; i >= 0; i--) {
	console.log(numbers[i]);
	if (i === 0) {
		console.log("GO!");
	}
}

var is_array = function(value) {
	return value &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		typeof value.splice === 'function' &&
		!(value.propertyIsEnumerable('length'));
};

console.log(is_array(numbers));
console.log(is_array(numbers_object));