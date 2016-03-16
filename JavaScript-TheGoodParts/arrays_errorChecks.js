var my_value = [1, 2, 3];

if (my_value && 
	typeof my_value === 'object' &&
	my_value.constructor === Array) {
	console.log(' my_value is an array!');
}

if (my_value &&
	typeof my_value === 'object' &&
	typeof my_value.length === 'number' &&
	!(my_value.propertyIsEnumerable('length'))) {
		console.log('(for test where the value might have been created in another frame) my_value is an array!');
	}