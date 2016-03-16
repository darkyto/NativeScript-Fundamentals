var add_the_handlers = function(nodes) {
	var i;
	for (i = 0; i < nodes.length; i += 1) {
		nodes[i].addEventListener("click", toggleBackground);
	}
};

var nodes = document.body.getElementsByTagName("button");
add_the_handlers(nodes);

function toggleBackground(args) {
	var colorToCompare = "rgb(255, 255, 255)";
	console.log(args);
	console.log(this.style.backgroundColor);
	if (this.style.backgroundColor !== colorToCompare) {
		this.style.backgroundColor = "#FFF";
		this.style.color = '#000';
	} else {
		this.style.backgroundColor = '#CCC';
		this.style.color = '#666';
	}
}