var Words = Class.create
 ({
 	AllWords:
	[
		//1
		["Accident", "Accidint", "Acident", "Acciedent"],
		["Believe", "Beleive", "Bilive", "Bileive"],
		["Definitely", "Definately", "Defiantly", "Definetely"],
		["Experience", "Expereince", "Expirience", "Experince"],
		["Immediately", "Immedaitely", "Immidiately", "Immidietely"],
		//2
		["Collectible", "Colectible", "Collectable", "Collecteble"],
		["Discipline", "Discepline", "Disciplane", "Discapline"],
		["Foreign", "Foriegn", "Foreiegn", "Foreigne"],
		["Recommend", "Recomend", "Reccommend", "Reccomend"],
		["Receipt", "Reciept", "Ricept", "Riceipt"],
		//3
		["Dumbbell", "Dumbell", "Dumbbel", "Dummbell"],
		["Noticeable", "Noticaeble", "Noticable", "Noticible"],
		["Hierarchy", "Heirarchy", "Hieracrhy", "Heiracrhy"],
		["Indispensable", "Indispensible", "Indispenseble", "Indespensable"],
		["Twelfth", "Twelvth", "Twelveth", "Twelvfth"],
		//4
		["Separate", "Seperate", "Separete", "Seperete"],
		["Restaurant", "Restuarant", "Restarant", "Restaurent"],
		["Perseverance", "Persevarance", "Persaverance", "Perseverince"],
		["Possession", "Posession", "Possesion", "Posesion"],
		["License", "Liscense", "Liciense", "Lisense"],
		//5
		["Millennium", "Millinnium", "Millenium", "Millinium"],
		["Embarrassment", "Embarassment", "Embarrasment", "Embarasment"],
		["Conscientious", "Consceintious", "Conscienteous", "Conscentious"],
		["Accommodate", "Acommodate", "Accomodate", "Accommadate"],
		["Guarantee", "Guarauntee", "Guarrantee", "Guaruntee"],
		//6
		["Intelligence", "Inteligence", "Intelliegence", "Intellegence"],
		["Grateful", "Gratful", "Greatful", "Greateful"],
		["Lightning", "Lightening", "Lighning", "Lighening"],
		["Maintenance", "Maintanance", "Maintenence", "Maintinance"],
		["Principal", "Princapal", "Princepal", "Principel"],
		//7
		["Pronunciation", "Pronuncaition", "Pronuciation", "Pronanciation"],
		["Occasionally", "Occassionally", "Ocasionally", "Occasionaly"],
		["Exhilarate", "Exhilirate", "Exhilerate", "Exhilarete"],
		["Mischievous", "Mischeivous", "Micshievous", "Mischevous"],
		["Liaison", "Liason", "Laison", "Liaisan"],
		//8
		["Mathematics", "Mathmatics", "Matematics", "Mathemetics"],
		["Playwright", "Playright", "Playrigth", "Playwrite"],
		["Reference", "Referance", "Refarance", "Refereance"],
		["Sergeant", "Sergaent", "Sargeant", "Sergant"],
		["Questionnaire", "Questionaire", "Questionniare", "Questionnair"],
		//9
		["Receive", "Recieve", "Riceive", "Recive"],
		["Drunkenness", "Drunkeness", "Drunkness", "Drunkiness"],
		["Supersede", "Superseed", "Supersed", "Suparsede"],
		["Calendar", "Calandar", "Calander", "Calendor"],
		["Daiquiri", "Daiquiry", "Daquiri", "Daiqueiri"],
		//10
		["Consensus", "Conscensus", "Conscinsus", "Consensous"],
		["Equipment", "Equipement", "Equipiment", "Equipmeant"],
		["Humorous", "Humourous", "Humoraus", "Humoureus"],
		["Independent", "Indepandent", "Independant", "Indepandant"],
		["Judgment", "Judgement", "Jugdement", "Jugdment"],
		//11
		["Existence", "Existance", "Existince", "Existenze"],
		["Library", "Libarary", "Libraray", "Libary"],
		["Neighbor", "Nieghbor", "Neighebor", "Nieghebor"],
		["Precede", "Preceed", "Preced", "Preceede"],
		["Threshold", "Thresshold", "Threeshold", "Theshold"],
		//12
		["Inoculate", "Inoculaute", "Inocilate", "Inocualate"],
		["Jewelry", "Jewelery", "Jewelary", "Jewelerey"],
		["Kernel", "Kernal", "Kernol", "Kerenal"],
		["Leisure", "Liesure", "Leisur", "Leisare"],
		["Acquit", "Acequit", "Acquite", "Acequite"],
		//13
		["Apparent", "Apparant", "Apperent", "Apperant"],
		["Conscience", "Consience", "Conscence", "Conscince"],
		["Fiery", "Feiry", "Fierey", "Fierie"],
		["Principle", "Princeple", "Princeiple", "Principl"],
		["Relevant", "Relavant", "Relevent", "Relavent"],
		//14
		["Rhythm", "Rhythme", "Rhyhtm", "Rhtyhm"],
		["Tyranny", "Tyrany", "Tyarnny", "Tryanny"],
		["Maneuver", "Manuever", "Maneuvar", "Manuevar"],
		["Memento", "Memeento", "Meminto", "Mementto"],
		["Pastime", "Pasttime", "Pastimme", "Pasttim"],
		//15
		["Schedule", "Schedul", "Scheduel", "Scheduele"],
		["Privilege", "Privilage", "Privelege", "Privelage"],
		["Publicity", "Pubilicity", "Publicety", "Publiceity"],
		["Miniature", "Miniatiure", "Miniatuir", "Minieture"],
		["Changeable", "Changaeble", "Changable", "Changeble"],
		//16
		["Argument", "Arguement", "Argement", "Argumant"],
		["Cemetery", "Cemeetery", "Cematery", "Cemetary"],
		["Concious", "Concoius", "Conscious", "Concsoius"],
		["Ignorance", "Ignorence", "Ignoreance", "Ignoraence"],
		["Medieval", "Medievel", "Medival", "Medeival"],
		//17
		["Minuscule", "Minuscul", "Minuscuile", "Miniscule"],
		["Occurrence", "Occurrance", "Occurence", "Occurance"],
		["Acceptable", "Accepteble", "Aceptable", "Acceptible"],
		["Criticism", "Critcism", "Criticsm", "Criticsim"],
		["Prevalent", "Prevelent", "Prevalant", "Prevelant"],
		//18
		["Stubbornness", "Stubornness", "Stubborness", "Stuborness"],
		["Spontaneous", "Sponteneous", "Spontanaous", "Spontenaous"],
		["Camouflage", "Camuoflage", "Camouflagge", "Camouflauge"],
		["Controversial", "Controversail", "Controversal", "Contriversal"],
		["Encouragement", "Encuoragement", "Encouragment", "Encouragament"],
		//19
		["Handkerchief", "Hankerchief", "Handkercheif", "Hankerchief"],
		["Simultaneous", "Simulteneous", "Simultanaous", "Simultenaous"],
		["Wednesday", "Wendnesday", "Wendesday", "Wednsday"],
		["Tendency", "Tendancy", "Tendecny", "Tandency"],
		["Remembrance", "Rememberance", "Remembrence", "Rememebrance"],
		//20
		["Judicial", "Judicail", "Judical", "Judecal"],
		["Boundaries", "Bounderies", "Bonudaries", "Boundarys"],
		["Necessary", "Necessery", "Necesary", "Neccessary"],
		["Opportunity", "Opportunty", "Opporutnity", "Oportunity"],
		["Vengeance", "Vengaence", "Vengence", "Vengance"],
		//["", "", "", ""],
	],
	// initialize - Assign default data to the feedlist
	initialize: function() {
		var returnList = [];
		for (var i=0; i<this.AllWords.length; i++) {
			returnList[i] = this.AllWords[i];
		}
		return returnList;
	}
});