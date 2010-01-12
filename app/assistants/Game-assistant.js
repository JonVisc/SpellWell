function GameAssistant(level, wordList, randWordArray, choice, score, levelScore, passedLevels, offset) {
	this.Level = level;
	this.WordList = wordList;
	this.RandWordArray = randWordArray;
	this.RandSpellingArray = null;
	this.ButtonNum = 1;
	this.Choice = choice;
	this.Score = score;
	this.LevelScore = levelScore;
	this.PassedLevels = passedLevels;
	this.CurWordOffset = offset;
}

GameAssistant.prototype.setup = function() {
	var levelWords = this.getLevelWords();
	
	if (this.Level == 1) {
		var CookieInfo = new Mojo.Model.Cookie("Speller");
		CookieInfo.remove();
	}
	
	if (this.Choice != null) {
		this.controller.get("choiceHeader").update(this.Choice);
	}
	else {
		this.controller.get("choiceHeader").update("Level " + this.Level);
	}
	
	var randWord = this.getAndSetRandWord(this.RandWordArray);
	while (this.ButtonNum < 5) {
		this.setupButtons(randWord, this.getAndSetRandSpelling(this.RandSpellingArray), levelWords);
	}
	this.scoreCountdown();
}

GameAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
}

GameAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
}

GameAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
}

GameAssistant.prototype.handleRightButtonPress = function(event){
	if (this.RandWordArray.length < 5) {
		var choiceHeader = this.RandWordArray.length + " - Right!";
		this.controller.stageController.swapScene("Game", this.Level, this.WordList, this.RandWordArray, choiceHeader, this.Score, this.LevelScore, this.PassedLevels, this.CurWordOffset);
	}
	else {
		var startingPoint = 5 * (this.Level);
		if (this.WordList.AllWords.length - 1 < (startingPoint + 4)) {
			this.controller.stageController.swapScene("EndGame", this.Score + this.LevelScore);
		}
		else {
			this.controller.stageController.swapScene("LevelRecap", this.Level + 1, this.WordList, this.Score + this.LevelScore, this.PassedLevels);
		}
	}
}

GameAssistant.prototype.handleWrongButtonPress = function(event){
	var subScore = this.LevelScore - 5;
	if (this.LevelScore < 5) {
		subScore = 0;
	}
	this.controller.stageController.swapScene("Game", this.Level, this.WordList, null, "Wrong!", this.Score, subScore, this.PassedLevels, this.CurWordOffset);
}

GameAssistant.prototype.getLevelWords = function() {
	var randLevel = null;
	if (this.CurWordOffset == null) {
		randLevel = this.getAndSetRandLevel(this.PassedLevels);
	} else {
		randLevel = this.CurWordOffset;
	}
	var startingPoint = 5 * (randLevel - 1);
	//Return a 2D array that contains the words for the current level.
	return [this.WordList.AllWords[startingPoint], this.WordList.AllWords[startingPoint + 1], this.WordList.AllWords[startingPoint + 2], this.WordList.AllWords[startingPoint + 3], this.WordList.AllWords[startingPoint + 4]];
}

GameAssistant.prototype.getAndSetRandWord = function(oldRandArray) {
	var randNum = Math.floor(Math.random()*5);
	if (oldRandArray == null) {
		this.RandWordArray = [randNum];
	} else {
		//Check if the number has been used before...
		var used = true;
		while (used) {
			used = false;
			for (j = 0; j < oldRandArray.length; j++) {
				if (randNum == oldRandArray[j]) {
					used = true;
					randNum = Math.floor(Math.random()*5);
				}
			}
		}
		oldRandArray.push(randNum);
	}
	return randNum;
}

GameAssistant.prototype.getAndSetRandSpelling = function(oldRandArray) {
	var randNum = Math.floor(Math.random()*4);
	if (oldRandArray == null) {
		this.RandSpellingArray = [randNum];
	} else {
		//Check if the number has been used before...
		var used = true;
		while (used) {
			used = false;
			for (j = 0; j < oldRandArray.length; j++) {
				if (randNum == oldRandArray[j]) {
					used = true;
					randNum = Math.floor(Math.random()*4);
				}
			}
		}
		oldRandArray.push(randNum);
	}
	return randNum;
}

GameAssistant.prototype.getAndSetRandLevel = function(oldRandArray) {
	var maxLevel = this.WordList.AllWords.length / 5;
	var randNum = Math.floor(Math.random()*maxLevel);
	if (oldRandArray == null) {
		this.PassedLevels = [randNum];
	} else {
		//Check if the number has been used before...
		var used = true;
		while (used) {
			used = false;
			for (j = 0; j < oldRandArray.length; j++) {
				if (randNum == oldRandArray[j]) {
					used = true;
					randNum = Math.floor(Math.random()*maxLevel);
				}
			}
		}
		oldRandArray.push(randNum);
		this.PassedLevels = oldRandArray;
	}
	this.CurWordOffset = randNum;
	return randNum;
}

GameAssistant.prototype.setupButtons = function(randWord, randSpelling, levelWords) {
	// set up the button
	this.buttonModel = {"label" : levelWords[randWord][randSpelling], "buttonClass" : "", "disabled" : false};
	this.buttonAttributes = {};
	this.controller.setupWidget("Spelling" + this.ButtonNum, this.buttonAttributes, this.buttonModel);
	
	//Means it is the correct word, setup the right button handler
	if (randSpelling == 0) {
		// bind the button to its handler
		Mojo.Event.listen(this.controller.get("Spelling" + this.ButtonNum), Mojo.Event.tap, this.handleRightButtonPress.bind(this));
	}
	else {
		Mojo.Event.listen(this.controller.get("Spelling" + this.ButtonNum), Mojo.Event.tap, this.handleWrongButtonPress.bind(this));
	}
	
	this.ButtonNum++;
}

GameAssistant.prototype.scoreCountdown = function() {
	//dunno why i have to get it to an object instead of use this. but whatever
	var thisobj = this;
	if (this.LevelScore > 0) {
		this.LevelScore = this.LevelScore - 1;
		//setTimeout(function(){
			//thisobj.scoreCountdown()
		//}, 500);
	}
	thisobj.controller.get("levelScore").update(this.LevelScore);
}
