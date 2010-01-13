function EndGameAssistant(score) {
	this.Score = score;
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

EndGameAssistant.prototype.setup = function() {
	//Remove th continue cookie
	var CookieInfo = new Mojo.Model.Cookie("Speller");
	CookieInfo.remove();
	
	var ScoresCookie = new Mojo.Model.Cookie("Save");
	var scoresOverall = ScoresCookie.get();
	ScoresCookie.remove();
	var scores;
	if (scoresOverall == null) {
		scores = new Array();
	} else{
		scores = scoresOverall.Scores;
	}
	var date = this.getCleanDateTime();
	scores.unshift([date, this.Score]);
	
	ScoresCookie.put({
		Scores: scores
	});
	
	var scoreText = "<table id=\"scoresTable\" border=\"2\"><thead><tr><th>Score</th><th>Time</th></tr></thead><tbody>";
	if (scores.length < 8) {
		for (i = 0; i < scores.length; i++)
		{
			scoreText += "<tr><td>" + scores[i][1] + "</td><td>" + scores[i][0] + "</td></tr>";
		}
	} else {
		var newScores = new Array();
		for (i = 0; i < 8; i++)
		{
			scoreText += "<tr><td>" + scores[i][1] + "</td><td>" + scores[i][0] + "</td></tr>";
			newScores.push(scores[i]);
		}
		//If there are more than ten, keeps the cookie from growing too large over
		//a long period of time
		ScoresCookie.remove();
		ScoresCookie.put({
			Scores: newScores
		});
	}
	scoreText += "</tbody></table>";
	
	this.controller.get("scoresList").update(scoreText);
	this.controller.get("scoreSpan").update(this.Score);
}

EndGameAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
}

EndGameAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
}

EndGameAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
}

EndGameAssistant.prototype.getCleanDateTime = function() {
	var date = new Date();
	return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
