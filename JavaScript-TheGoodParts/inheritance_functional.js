var mammal = function(argument) {
	var that = {};

	that.get_name = function() {
		return argument.name;
	};

	that.says = function() {
		return argument.saying || '';
	};

	return that;
};


var hippo = {
	name: "Hippo Junior",
	saying: "Hipp Hipp Hooreeey"
};
var myHippo = mammal(hippo);
console.log(myHippo.get_name());
console.log(myHippo.says());

var cat = function(argument) {
	argument.saying = argument.saying || "meow";
	var that = mammal(argument);

	that.purr = function(n) {
		n = n || 3;
		var i, s = '';
		for (i = 0; i < n; i += 1) {
			if (s) {
				s += '-';
			}
			s += 'r';
		}
		return s;
	};

	that.get_name = function() {
		return that.says() + ' ' + argument.name +
			' ' + that.says();
	};

	return that;
};

var myCat = cat({
	name: 'Henrietta'
});
console.log(myCat.get_name());
console.log(myCat.says());
console.log(myCat.purr());

Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};

Object.method('superior', function(name) {
	var that = this;
	var method = that[name];

	return function() {
		return method.apply(that, arguments);
	};
});

var coolcat = function(spec) {
	var that = cat(spec);
	var super_get_name = that.superior('get_name');

	that.get_name = function(n) {
		return 'like ' + super_get_name() + ' baby';
	};
	return that;
};
var myCoolCat = coolcat({
	name: 'Bix'
});
var name = myCoolCat.get_name();
console.log(name);
// 'like meow Bix meow baby'