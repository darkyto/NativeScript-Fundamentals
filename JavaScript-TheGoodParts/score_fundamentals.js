var foo = function() {
	var a = 3,
		b = 5;
	var bar = function() {
		var b = 7,
			c = 11;
		// At this point, a is 3, b is 7, and c is 11
		console.log("A = " + a + "; B = " + b + "; C = " + c);
		a += b + c;
		// At this point, a is 21, b is 7, and c is 11
		console.log("A = " + a + "; B = " + b + "; C = " + c);
	};
	// At this point, a is 3, b is 5, and c is not defined
	console.log("A = " + a + "; B = " + b);
	bar();
	// At this point, a is 21, b is 5
	console.log("A = " + a + "; B = " + b);
};

foo();