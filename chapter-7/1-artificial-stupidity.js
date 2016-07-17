// Implement a breadth-first search algorithm that searches for the nearest instance of ch and returns the first direction.

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
	// Added a cooldown timer after eating to prevent crops being wiped out.
  	this.timer = 5;
}
SmartPlantEater.prototype.act = function(view) {
	var space = view.find(" ");
	// Increased energy required for reproduction to prevent map being overrun.
	if (this.energy > 200 && space)
		return {type: "reproduce", direction: space};
	var plant = view.find("*");
	var towardsPlant = view.search("*");
  	if (this.timer > 0 && space) {
      	this.timer -= 1;
        return {type: "move", direction: space};
    }
	else if (plant && this.timer == 0) {
      	this.timer = 5;
		return {type: "eat", direction: plant};
    };
	if (towardsPlant)
		return {type: "move", direction: towardsPlant};
};
