// object.hasOwnProperty(name)
var a = {
	member: 'John Smith'
};
var b = Object.create(a); // from Chapter 3
var t = a.hasOwnProperty('member'); // t is true
var u = b.hasOwnProperty('member'); // u is false
var v = b.member; // v is John Smith

for (var prop in a) {
	if (a.hasOwnProperty(prop)) {
		console.log('A has: ' + a[prop]);
	}
}

for (var prop in b) {
	if (b.hasOwnProperty(prop)) {
		console.log('B has: ' + b[prop]);
	}
}