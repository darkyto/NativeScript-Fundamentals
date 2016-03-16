var TESTAPP = {};

TESTAPP.flight = {
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

TESTAPP.pilot = {
	"firstName": "John",
	"lastName": "Smith"
};

console.log(TESTAPP.pilot.firstName);
console.log(TESTAPP.flight.arrival.time);
