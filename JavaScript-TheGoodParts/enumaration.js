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

var i;
var properties = [
	'airline',
	'number',
	'departure',
	'arrival'
];
for (i = 0; i < properties.length; i += 1) {
	if (typeof flight[properties[i]] !== 'object') {
		console.log(properties[i] + ': ' + flight[properties[i]]);
	} else {
		console.log(properties[i] + ': ');
		console.log('	' + flight[properties[i]].time);
		console.log('	' + flight[properties[i]].city);
		console.log('	' + flight[properties[i]].IATA);
	}
}