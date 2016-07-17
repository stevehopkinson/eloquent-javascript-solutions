/* Any serious ecosystem has a food chain longer than a single link. Write another critter that survives by eating 
the herbivore critter. You’ll notice that stability is even harder to achieve now that there are cycles at multiple 
levels. Try to find a strategy to make the ecosystem run smoothly for at least a little while. */

function Tiger() {
	this.energy = 20;
}

Tiger.prototype.act = function(view) {
	var space = view.find(" ");
	if (this.energy > 300 && space)
		return {type: "reproduce", direction: space};
	var prey = view.find("O");
	if (prey)
		return {type: "eat", direction: prey};
	if (space)
		return {type: "move", direction: space};
};
