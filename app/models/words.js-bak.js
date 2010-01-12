var Words = Class.create
 ({
 	AllWords:
	[
		["Accident", "Accidint", "Acident", "Acciedent"],
		["Believe", "Beleive", "Bilive", "Bileive"],
		["Definitely", "Definately", "Defiantly", "Definetely"],
		["Experience", "Expereince", "Expirience", "Experince"],
		["Immediately", "Immedaitely", "Immidiately", "Immidietely"],
		["Collectible", "Colectible", "Collectable", "Collecteble"],
		["Discipline", "Discepline", "Disciplane", "Discapline"],
		["Foreign", "Foriegn", "Foreiegn", "Foreigne"],
		["Recommend", "Recomend", "Reccommend", "Reccomend"],
		["Receipt", "Reciept", "Ricept", "Riceipt"],
		["Dumbbell", "Dumbell", "Dumbbel", "Dummbell"],
		["Hierarchy", "Heirarchy", "Hieracrhy", "Heiracrhy"],
		["Indispensable", "Indispensible", "Indispenseble", "Indespensable"],
		["Twelfth", "Twelvth", "Twelveth", "Twelvfth"],
		["Separate", "Seperate", "Separete", "Seperete"],
		["Restaurant", "Restuarant", "Restarant", "Restaurent"],
		["Perseverance", "Persevarance", "Persaverance", "Perseverince"],
		["Possession", "Posession", "Possesion", "Posesion"],
		["Millennium", "Millinnium", "Millenium", "Millinium"],
		["Embarrassment", "Embarassment", "Embarrasment", "Embarasment"],
		["Conscientious", "Consceintious", "Conscienteous", "Conscentious"],
		["Accommodate", "Acommodate", "Accomodate", "Accommadate"],
		["Guarantee", "Guarauntee", "Guarrantee", "Guaruntee"],
		["Intelligence", "Inteligence", "Intelliegence", "Intellegence"]
		
		//["", "", "", ""],
	],
	// initialize - Assign default data to the feedlist
	initialize: function() {
		this.getAllWords();
	},
	// returns the list as an array
	getAllWords: function() {
		var returnList = [];
		for (var i=0; i<this.AllWords.length; i++) {
			returnList[i] = this.AllWords[i];
		}
		return returnList;
	}	
});