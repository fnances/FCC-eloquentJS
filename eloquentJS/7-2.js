// Your code here

function Tiger() {
	this.energy = 30;
	this.preyCounter = 0;
}

function SmartPlantEater() {
	this.energy = 15;
	this.counter = 0;
}

SmartPlantEater.prototype.act = function (view) {
	var critterPopulation = view.checkPopulation("O");
	var foodPopulation = view.checkPopulation("*");
	var food = view.findAll("*")
	this.counter++;
	if ((food) && (this.counter % 2 === 0) && (food.length > 1)) {

		return {
			type: "eat",
			direction: randomElement(food)
		};
	}

	var field = view.findAll(" ");

	if ((this.energy > 20) && (critterPopulation <= foodPopulation)) {
		return {
			type: "reproduce",
			direction: randomElement(field)
		};
	}

	return {
		type: "move",
		direction: randomElement(field)
	};
};

View.prototype.checkPopulation = function (ch) {
	var population = 0;

	this.world.grid.space.forEach(function (element, line) {
		if ((element !== null) && (element.originChar === ch)) {
			population++;
		}
	});

	return population;
};



actionTypes.move = function (critter, vector, action) {
	var dest = this.checkDestination(action, vector);
	if (dest == null ||
		critter.energy <= 0.5 ||
		this.grid.get(dest) != null)
		return false;
	critter.energy -= 0.5;
	this.grid.set(vector, null);
	this.grid.set(dest, critter);
	return true;
};

actionTypes.reproduce = function (critter, vector, action) {
	var baby = elementFromChar(this.legend,
		critter.originChar);
	var dest = this.checkDestination(action, vector);
	if (dest == null || this.grid.get(dest) != null)
		return false;
	if (critter.originChar === "O") {
		critter.energy -= critter.energy / 2;
	} else {
		critter.energy -= baby.energy;
	}

	this.grid.set(dest, baby);
	return true;
};

function Plant() {
	this.energy = 5 + Math.floor(Math.random() * 3);
}
Plant.prototype.act = function (view) {
	var plantPopulation = view.checkPopulation("*");
	var critterPopulation = view.checkPopulation("O");

	if ((this.energy >= 20) && (critterPopulation >= plantPopulation)) {
		var space = view.find(" ");
		if (space)
			return {
				type: "reproduce",
				direction: randomElement(space)
			};
	}
	if (this.energy < 30) {
		return {
			type: "grow"
		};
	}


};

actionTypes.grow = function (critter) {
	critter.energy += 0.5;
	return true;
};

Tiger.prototype.act = function (view) {
	var prey = view.find("O");
	var hervicore = view.find("*");
	var preyPopulation = view.checkPopulation("O");
	var predatorPopulation = view.checkPopulation("@");
	var space = view.findAll(" ");

	if ((preyPopulation > predatorPopulation + 5) && (this.energy > 20)) {
		return {
			type: "reproduce",
			direction: randomElement(space)

		};
	}
	if (prey) {
		this.preyCounter++;
		return {
			type: "hunt",
			direction: prey
		};
	}

	if ((hervicore) && (this.preyCounter % 2 === 0) && (this.preyCounter > 0)) {
		return {
			type: "eat",
			direction: hervicore

		};
	}


	return {
		type: "move",
		direction: randomElement(space)

	};
}

animateWorld(new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"], {
		"#": Wall,
		"@": Tiger,
		"O": SmartPlantEater, // from previous exercise
		"*": Plant
	}
));
