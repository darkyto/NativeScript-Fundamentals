Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};

String.method('entityify', function() {
	var character = {
		'<': '&lt;',
		'>': '&gt;',
		'&': '&amp;',
		'"': '&quot;'
	};
	return function() {
		return this.replace(/[<>&"]/g, function(c) {
			return character[c];
		});
	};
}());

// regexp.exec(string)
// Break a simple html text into tags and texts.
// (See string.replace for the entityify method.)
// For each tag or text, produce an array containing
// [0] The full matched tag or text
// [1] The tag name
// [2] The /, if there is one
// [3] The attributes, if any
var text = '<html><body bgcolor=linen><p>' +
	'This is <b>bold<\/b>!<\/p><\/body><\/html>';

var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
var a, i;
while ((a = tags.exec(text))) {
	for (i = 0; i < a.length; i += 1) {
		console.log(('// [' + i + '] ' + a[i]).entityify());
	}
	console.log();
}


// regexp.test(string)
var b = /&.+;/.test('frank &amp; beans'); // true