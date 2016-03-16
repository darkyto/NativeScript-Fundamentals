var stooge = {
	"first-name": "Jerome",
	"last-name": "Howard",
	"nickname": "Doctora"
};

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
console.log(nick);
// nick is 'Curly' because x and stooge
// are references to the same object
var a = {},
	b = {},
	c = {};
// a, b, and c each refer to a
// different empty object
a = b = c = {};
// a, b, and c all refer to
// the same empty object