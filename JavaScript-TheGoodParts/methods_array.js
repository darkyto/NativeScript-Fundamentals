// concat
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b);
console.log(c);

// join
a.push('d');
c = a.join('');
console.log(c);

// pop
c = a.pop();
console.log(a); // [a, b, c]
console.log(c); // d

// push
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.push(b, true); // c is 5; a is ['a', 'b', 'c', ['x', 'y', 'z'], true]


// reverse
var a = ['a', 'b', 'c'];
var b = a.reverse(); // both a and b are ['c', 'b', 'a']

// shift
var a = ['a', 'b', 'c'];
var c = a.shift(); // a is ['b', 'c'] & c is 'a'
console.log(c);
console.log(a);

// slice
var a = ['a', 'b', 'c'];
var b = a.slice(0, 1); // b is ['a']
var c = a.slice(1); // c is ['b', 'c']
var d = a.slice(1, 2); // d is ['b']

// sort
var n = [4, 8, 15, 16, 23, 42];

n.sort();
console.log(n); // alphabetical order

n.sort(function(a, b) {
	return a - b;
});
console.log(n); // ascending

n.sort(function(a, b) {
	return b - a;
});
console.log(n); // descending

var m = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
m.sort(function(a, b) {
	if (a === b) {
		return 0;
	}
	if (typeof a === typeof b) {
		return a < b ? -1 : 1;
	}
	return typeof a < typeof b ? -1 : 1;
});
// m is [4, 8, 15, 16, 23, 42, 'a', 'aa', 'bb'] // sorts both numbers and strings

// splice
var a = ['a', 'b', 'c'];
var r = a.splice(1, 1, 'ache', 'bug'); // will remove b (and store it in r) will add to posotion 
console.log(a);
console.log(r);