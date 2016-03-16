var flight = {
	airline: "Oceanic",
	number: 815,
	departure: {
		IATA: "SYD",
		time: "2004-09-22 14:55",
		city: "Sydney"
	},
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10:42",
		city: "Los Angeles"
	}
};
console.log(flight.airline);
console.log(flight.arrival.city);
console.log(flight.departure.city);
console.log(flight.status || "unknown");
flight.equipment = {
	model: 'Boeing 777'
};
flight.status = "arrived";

Object.keys(flight).forEach(function(key, index) {
	if (typeof flight[key] != "object") {
		console.log(key + ' : ' + flight[key]);
	} else {
		console.log(key + ' : ');
		Object.keys(flight[key]).forEach(function(subKey, index) {
			console.log('	' + subKey + ' : ' + flight[key][subKey]);
		});
	}
});

if (typeof Object.create !== 'function') {
	Object.create = function(o) {
		var F = function() {};
		F.prototype = o;
		return new F();
	};
}
var another_flight = Object.create(flight);


// reflection
console.log(typeof another_flight.number);
console.log(typeof another_flight.airline);
console.log(typeof another_flight.arrival);
console.log(typeof another_flight.toString);
console.log(typeof another_flight.manifest);

console.log(another_flight.hasOwnProperty('toString')); // false

console.log(another_flight.hasOwnProperty('arrival')); // false (0)
console.log(flight.hasOwnProperty('arrival')); // true