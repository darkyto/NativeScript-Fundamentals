Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};

console.log(Math.floor(25.556));
console.log("HERE");

if ("A" === "\u0041") {
	console.log("A");
}


myObj = {
    prop : "exists"
};

function changeMyObject() {
  myObj.newprop = myObj.prop;
  delete myObj.prop;
}

console.log(myObj.hasOwnProperty('prop'));   // returns true
changeMyObject();
console.log(myObj.hasOwnProperty('prop'));   // returns false
console.log(myObj.hasOwnProperty('newprop'));   // returns false
