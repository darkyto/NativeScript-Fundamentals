var obj = {
	name: "Simon",
	age: "20",
	clothing: {
		style: "simple",
		isDouche: false
	},
	size: "xxl",
	eyes: "blue"
};

for (var propt in obj) {
	if (obj.hasOwnProperty(propt)) {
		console.log(propt + ': ' + obj[propt]);
	}
}

Object.keys(obj).forEach(function(key, index) {

	console.log((index + 1) + '. ' + key + ': ' + obj[key]);
	if (typeof obj[key] == "object") {
		Object.keys(obj[key]).forEach(function(subKey, newIndex) {
			console.log(' 	' + (index + 1) + "." + (newIndex + 1) + '	 ' + subKey + ': ' + obj[key][subKey]);
		});
	}
});