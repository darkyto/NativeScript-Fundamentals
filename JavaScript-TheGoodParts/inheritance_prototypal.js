var Mammal = function(name) {
	this.name = name;
};

Mammal.prototype.get_name = function() {
	return this.name;
};

Mammal.prototype.says = function() {
	return this.saying || '';
};

var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name(); // 'Herb the Mammal'
console.log(name);
console.log(myMammal.says());
console.log(Array(35).join('='));

var myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function(n) {
	var i, s = '';
	for (i = 0; i < n; i += 1) {
		if (s) {
			s += '-';
		}
		s += 'r';
	}
	return s;
};
myCat.get_name = function() {
	return this.says() + ' ' + this.name + ' ' + this.says();
};

console.log(myCat.name);
console.log(myCat.says());