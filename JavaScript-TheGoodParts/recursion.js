// The Towers of Hanoi is a famous puzzle. The equipment includes three posts and a
// set of discs of various diameters with holes in their centers. The setup stacks all of
// the discs on the source post with smaller discs on top of larger discs. The goal is to
// move the stack to the destination post by moving one disc at a time to another post,
// never placing a larger disc on a smaller disc.

var hanoi = function(disc, src, aux, dst) {
	if (disc > 0) {
		hanoi(disc - 1, src, dst, aux);
		console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst);
		hanoi(disc - 1, aux, src, dst);
	}
};
hanoi(4, 'LEFT', 'CENTER', 'RIGHT');