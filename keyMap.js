function transformCodeTypedCharacter(typedChar) 
{
	switch(typedChar)
	{
		case 81: return String.fromCharCode(1049); // Q -> Й
		case 113: return String.fromCharCode(1081);	// q -> й

		case 87: return String.fromCharCode(1062); // Ц
		case 119: return String.fromCharCode(1094); // ц
		
		case 69: return String.fromCharCode(1059); // У
		case 101: return String.fromCharCode(1091);	// у		

		case 82: return String.fromCharCode(1050); // К
		case 114: return String.fromCharCode(1082); // к

		case 84: return String.fromCharCode(1045); // Е
		case 116: return String.fromCharCode(1077); // е

		case 89: return String.fromCharCode(1053); // Н
		case 121: return String.fromCharCode(1085);	// н

		case 85: return String.fromCharCode(1043); // Г
		case 117: return String.fromCharCode(1075); // г

		case 73: return String.fromCharCode(1064); // Ш
		case 105: return String.fromCharCode(1096); // ш

		case 79: return String.fromCharCode(1065); // Щ
		case 111: return String.fromCharCode(1097); // щ

		case 80: return String.fromCharCode(1047); // З
		case 112: return String.fromCharCode(1079); // з

		case 123: return String.fromCharCode(1061); // Х
		case 91: return String.fromCharCode(1093);	// х	

		case 125: return String.fromCharCode(1031); // Ї
		case 93: return String.fromCharCode(1111);	// ї		
		
		case 65: return String.fromCharCode(1060); // Ф
		case 97: return String.fromCharCode(1092);	// ф	
		
		case 83: return String.fromCharCode(1030); // І
		case 115: return String.fromCharCode(1110);	// і	

		case 68: return String.fromCharCode(1042); // В
		case 100: return String.fromCharCode(1074);	// в

		case 70: return String.fromCharCode(0x410); // A
		case 102: return String.fromCharCode(0x430); // a

		case 71: return String.fromCharCode(0x41F); // П
		case 103: return String.fromCharCode(0x43F);	// п

		case 72: return String.fromCharCode(0x420); // Р
		case 104: return String.fromCharCode(0x440);	// р

		case 74: return String.fromCharCode(0x41E); // О
		case 106: return String.fromCharCode(0x43E);	// о

		case 75: return String.fromCharCode(0x41B); // Л
		case 107: return String.fromCharCode(0x43B); // л

		case 76: return String.fromCharCode(0x414); // Д
		case 108: return String.fromCharCode(0x434);	// д

		case 58: return String.fromCharCode(0x416); // Ж
		case 59: return String.fromCharCode(0x436);	// ж

		// english
		case 64: return String.fromCharCode(0x404); // Є
		// american
		case 34: return String.fromCharCode(0x404); // Є
		case 39: return String.fromCharCode(0x454);	// є
		
		case 124: return String.fromCharCode(0x490); // Ґ
		case 92: return String.fromCharCode(0x491);	// ґ		

		case 90: return String.fromCharCode(0x42F); // Я
		case 122: return String.fromCharCode(0x44F);	// я

		case 88: return String.fromCharCode(0x427); // Ч
		case 120: return String.fromCharCode(0x447); // ч

		case 67: return String.fromCharCode(0x421); // С
		case 99: return String.fromCharCode(0x441);	// с

		case 86: return String.fromCharCode(0x41C); // М
		case 118: return String.fromCharCode(0x43C);	// м

		case 66: return String.fromCharCode(0x418); // И
		case 98: return String.fromCharCode(0x438); // и	

		case 78: return String.fromCharCode(0x422); // Т
		case 110: return String.fromCharCode(0x442); // т

		case 77: return String.fromCharCode(0x42C); // Ь
		case 109: return String.fromCharCode(0x44C); // ь

		case 60: return String.fromCharCode(0x411); // Б
		case 44: return String.fromCharCode(0x431); // б

		case 62: return String.fromCharCode(0x42E); // Ю
		case 46: return String.fromCharCode(0x44E); // ю

		case 63: return ","; // ,
		case 96: console.log("return `"); return "\'"; // ,
		case 47: console.log("return ."); return "."; // .		
		case 38: return "?"; // .			
		
		default: return null;
	}
}

function editText(id, newChar)
{
	//console.log("id: " + id);

	var element = $("#" + id + "");
	var cursorPosition = element.prop("selectionStart");
  var tx = element.val();
	//console.log("tx: " + tx);  
	var beforeChar = tx.substring(0, cursorPosition);		
	var afterChar = tx.substring(cursorPosition, tx.length);	
	element.val(beforeChar + newChar + afterChar);
  element.caretTo(cursorPosition + 1);  
}

function keyListener(evt)
{

		//console.log("event: " + evt.which); 
		var focused = $(':focus');

		if (focused.get(0) === undefined)
		{
			//console.log("return null");
			return;
		}

		if ((focused.is("textarea") && focused.attr("lang") === "uk") ||
		(focused.is("input") && focused.attr("placeholder").includes("Ukranian")))
		{
			//console.log("focused: " + focused.get(0).tagName);
			var x = transformCodeTypedCharacter(evt.which);
			if (x !== null)
			{
				evt.preventDefault();
				//console.log("focused: " + focused.attr("id"));				
				var newText = editText(focused.attr("id"), x);
				//console.log("success");
			}
		} // if

}




