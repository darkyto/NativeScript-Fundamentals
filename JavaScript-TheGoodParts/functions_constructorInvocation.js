// Create a constructor function called Quo.
// It makes an object with a status property.
var Quo = function(string) {
	this.status = string;
};
// Give all instances of Quo a public method
// called get_status.
Quo.prototype.get_status = function() {
	return this.status;
};
// Make an instance of Quo.
var myQuo = new Quo("confused");
console.log(myQuo.get_status()); // confused

var Robot = function(health, damage, armor, speed) {
	this.health = health;
	this.damage = damage;
	this.armor = armor;
	this.speed = speed;
};

Robot.prototype.heal = function(healPoints) {
	this.health += healPoints;
	return this.health;
};

var myRobot = new Robot(50, 15, 5, 50);

console.log(myRobot.heal(13));
