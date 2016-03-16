Function.prototype.method = function(name, func) {
	if (!this.prototype[name]) {
		this.prototype[name] = func;
	}
	return this;
};

Number.method('round', function() {
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});
console.log((-10 / 3).round()); // -3

String.method('trim', function() {
	return this.replace(/^\s+|\s+$/g, '');
});
console.log("ala bala aaaa     " + "!");
console.log("ala bala aaaa     ".trim() + "!");