Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};

// string.charAt(pos)
var name = 'Curly';
console.log(name.charAt(0));

String.method('charAt', function(pos) {
	return this.slice(pos, pos + 1);
});

// string.charCodeAt(pos)
var name = 'John';
console.log(name.charCodeAt(0)); // code 74

// string.concat(string…)
console.log('C'.concat('a', 'r', 's'));

// string.indexOf(searchString, position)
var text = 'Mississippi';
console.log(text.indexOf('ss')); // p is 2
console.log(text.indexOf('ss', 3)); // p is 5
console.log(text.indexOf('ss', 6)); // p is -1

// string.lastIndexOf(searchString, position)
var text = 'Mississippi';
console.log(text.lastIndexOf('ss')); // p is 5
console.log(text.lastIndexOf('ss', 3)); // p is 2
console.log(text.lastIndexOf('ss', 6)); // p is 5 (?)

// string.localeCompare(that)
var m = ['AAA', 'A', 'aa', 'a', 'Aa', 'aaa'];
m.sort(function(a, b) {
	return a.localeCompare(b);
});
console.log(m);
// m (in some locale) is
// ['a', 'A', 'aa', 'Aa', 'aaa', 'AAA']

// string.match(regexp)
var text = '<html><body bgcolor=linen><p>' +
	'This is <b>bold<\/b>!<\/p><\/body><\/html>';
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
var a, i;
a = text.match(tags);
for (i = 0; i < a.length; i += 1) {
	console.log(('// [' + i + '] ' + a[i]));
}

// string.replace(searchValue, replaceValue)
console.log("mother_in_law".replace('_', '-')); // only the first occurance will be replaced
console.log("mother_in_law".replace('_/g', '-')); // now we have global replacement with /g

// Capture 3 digits within parens
var oldareacode = /\((\d{3})\)/g;
var p = '(555)666-1212'.replace(oldareacode, '$1-');
// p is '555-555-1212'

// $$ 	$
// $& 	The matched text
// $	number Capture group text
// $` 	The text preceding the match
// $' 	The text following the match

// string.search(regexp)
var text = 'and in it he says "Any damn fool could';
var pos = text.search(/["']/); // pos is 18

// string.slice(start, end)
var text = 'and in it he says "Any damn fool could';
var a = text.slice(18);
// a is '"Any damn fool could'
var b = text.slice(0, 3);
// b is 'and'
var c = text.slice(-5);
// c is 'could'
var d = text.slice(19, 32);
// d is 'Any damn fool'

// string.split(separator, limit)
var digits = '0123456789';
var a = digits.split('', 5);
// a is ['0', '1', '2', '3', '456789']

var ip = '192.168.1.0';
var b = ip.split('.');
// b is ['192', '168', '1', '0']

var c = '|a|b|c|'.split('|');
// c is ['', 'a', 'b', 'c', '']
var text = 'last, first ,middle';
var d = text.split(/\s*,\s*/);
// d is [
// 'last',
// 'first',
// 'middle'
// ]

var f = '|a|b|c|'.split(/\|/);
// f is ['a', 'b', 'c'] on some systems, and
// f is ['', 'a', 'b', 'c', ''] on others
console.log(f);

// string.substring(start, end)
// The substring method is the same as the slice method except that it doesn’t handle the
// adjustment for negative parameters. There is no reason to use the substring method. Use
// slice instead.

// string.toLowerCase()

// string.toUperCase()

// String.fromCharCode(char…)
var a = String.fromCharCode(67, 97, 116);
// a is 'Cat'