// Implement a breadth-first search algorithm.

View.prototype.search = function(ch) {
	var frontier = [];
	var start = this.vector;
	frontier.push(start);
	var cameFrom = {};
	cameFrom[start] = null;
  
	while (frontier.length > 0) {
		var current = frontier.shift();
		if (charFromElement(this.world.grid.get(current)) == ch) {
			while (cameFrom[current].neighbour != start) {
				current = cameFrom[current].neighbour;
			}
			return cameFrom[current].direction;
    	};
      
		for (var dir in directions) {
			var neighbour = current.plus(directions[dir]);
			if (this.world.grid.isInside(neighbour) && !(neighbour in cameFrom)) {
				var neighbourChar = charFromElement(this.world.grid.get(neighbour));
				if (neighbourChar == ch || neighbourChar == " ") {
					frontier.push(neighbour);
					cameFrom[neighbour] = {neighbour: current, direction: dir};
				}
			}
		}
	}
	return false;
}

function SmartPlantEater() {
	this.energy = 20;
}
SmartPlantEater.prototype.act = function(view) {
	var space = view.find(" ");
	if (this.energy > 60 && space)
		return {type: "reproduce", direction: space};
	var plant = view.find("*");
	var towardsPlant = view.search("*");
	if (plant)
		return {type: "eat", direction: plant};
	if (towardsPlant)
		return {type: "move", direction: towardsPlant};
	if (space)
		return {type: "move", direction: space};
};
