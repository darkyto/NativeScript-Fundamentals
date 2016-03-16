// regex to parse given url
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var url = "http://www.ora.com:80/goodparts?q#fragment";
var simplerUrl = "http://emnick.com/info";

var result = parse_url.exec(url);
console.log(result);

var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
var blanks = ' ';
var i;
for (i = 0; i < names.length; i += 1) {
	console.log(names[i] + ':' +
		blanks.substring(names[i].length), result[i]);
}

var result2 = parse_url.exec(simplerUrl);
console.log(result2);


// regex to match if the input is a number
var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
var test = function(num) {
	console.log(parse_number.test(num));
};
test('1'); // true
test('number'); // false
test('98.6'); // true
test('132.21.86.100'); // false
test('123.45E-67'); // true
test('123.45D-67'); // false