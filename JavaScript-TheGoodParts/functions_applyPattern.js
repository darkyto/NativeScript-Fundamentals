var Robot = function(health, damage, armor, speed) {
	this.health = health;
	this.damage = damage;
	this.armor = armor;
	this.speed = speed;
	this.status = "N/A";
};

Robot.prototype.heal = function(healPoints) {
	this.health += healPoints;
	return this.health;
};

Robot.prototype.getStatus = function() {
	return this.status;
};

var statusObject = {
	status: 'A-OK'
};
// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.
var robot = new Robot(10, 10, 10, 10);
console.log(robot.status);

var status = robot.getStatus.apply(statusObject);
// status is 'A-OK'
console.log(status);