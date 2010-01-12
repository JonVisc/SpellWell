function LevelRecapAssistant(level, wordList, score, passedLevels) {
	this.Level = level;
	this.WordList = wordList;
	this.Score = score;
	this.PassedLevels;
}

LevelRecapAssistant.prototype.setup = function() {
	var CookieInfo = new Mojo.Model.Cookie("Speller");
	CookieInfo.remove();
	CookieInfo.put({
		Level: this.Level,
		Score: this.Score
	});
	
	this.controller.get("levelCompleted").update(this.Level - 1);
	this.controller.get("scoreSpan").update(this.Score);
	// set up the button
	this.buttonModel = {"label" : "Continue to Level " + this.Level, "buttonClass" : "", "disabled" : false};
	this.buttonAttributes = {};
	this.controller.setupWidget("continueButton", this.buttonAttributes, this.buttonModel);
	Mojo.Event.listen(this.controller.get("continueButton"), Mojo.Event.tap, this.handleContinueButtonPress.bind(this));
}

LevelRecapAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
}

LevelRecapAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
}

LevelRecapAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
}

LevelRecapAssistant.prototype.handleContinueButtonPress = function(event){
	this.controller.stageController.swapScene("Game", this.Level, this.WordList, null, null, this.Score, 100, this.PassedLevels, null);
}
