var by = function(name, minor) {
	return function(o, p) {
		var a, b;
		if (o && p && typeof o === 'object' && typeof p === 'object') {
			a = o[name];
			b = p[name];
			if (a === b) {
				return typeof minor === 'function' ? minor(o, p) : 0;
			}
			if (typeof a === typeof b) {
				return a < b ? -1 : 1;
			}
			return typeof a < typeof b ? -1 : 1;
		} else {
			throw {
				name: 'Error',
				message: 'Expected an object when sorting by ' + name
			};
		}
	};
};

var s = [{
	first: 'Joe',
	last: 'Besser',
	age: 25
}, {
	first: 'Moe',
	last: 'Howard',
	age: 25
}, {
	first: 'Joe',
	last: 'DeRita',
	age: 28
}, {
	first: 'Shemp',
	last: 'Howard',
	age: 32
}, {
	first: 'Larry',
	last: 'Fine',
	age: 18
}, {
	first: 'Curly',
	last: 'Howard',
	age: 27
}];
s.sort(by('first'));
console.log(s);

s.sort(by('last'));
console.log(s);

s.sort(by('age'));
console.log(s);

s.sort(by('last', by('first')));