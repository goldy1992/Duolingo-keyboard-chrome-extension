function transformTypedCharacter(typedChar) {

	switch(typedChar)
	{
		case "Q": return String.fromCharCode(1049); // Й
		case "q": return String.fromCharCode(1081);	// й

		case "W": return String.fromCharCode(1062); // Ц
		case "w": return String.fromCharCode(1094); // ц
		
		case "E": return String.fromCharCode(1059); // У
		case "e": return String.fromCharCode(1091);	// у		

		case "R": return String.fromCharCode(1050); // К
		case "r": return String.fromCharCode(1082); // к

		case "T": return String.fromCharCode(1045); // Е
		case "t": return String.fromCharCode(1077); // е

		case "Y": return String.fromCharCode(1053); // Н
		case "y": return String.fromCharCode(1085);	// н

		case "U": return String.fromCharCode(1043); // Г
		case "u": return String.fromCharCode(1075); // г

		case "I": return String.fromCharCode(1064); // Ш
		case "i": return String.fromCharCode(1096); // ш

		case "O": return String.fromCharCode(1065); // Щ
		case "o": return String.fromCharCode(1097); // щ

		case "P": return String.fromCharCode(1047); // З
		case "p": return String.fromCharCode(1079); // з

		case "{": return String.fromCharCode(1061); // Х
		case "[": return String.fromCharCode(1093);	// х	

		case "}": return String.fromCharCode(1031); // Ї
		case "]": return String.fromCharCode(1111);	// ї		
		
		case "A": return String.fromCharCode(1060); // Ф
		case "a": return String.fromCharCode(1092);	// ф	
		
		case "S": return String.fromCharCode(1030); // І
		case "s": return String.fromCharCode(1110);	// і	

		case "D": return String.fromCharCode(1042); // В
		case "d": return String.fromCharCode(1074);	// в

		case "F": return String.fromCharCode(0x410); // A
		case "f": return String.fromCharCode(0x430); // a

		case "G": return String.fromCharCode(0x41F); // П
		case "g": return String.fromCharCode(0x43F);	// п

		case "H": return String.fromCharCode(0x420); // Р
		case "h": return String.fromCharCode(0x440);	// р

		case "J": return String.fromCharCode(0x41E); // О
		case "j": return String.fromCharCode(0x43E);	// о

		case "K": return String.fromCharCode(0x41B); // Л
		case "k": return String.fromCharCode(0x43B); // л

		case "L": return String.fromCharCode(0x414); // Д
		case "l": return String.fromCharCode(0x434);	// д

		case ":": return String.fromCharCode(0x416); // Ж
		case ";": return String.fromCharCode(0x436);	// ж

		// english
		case "@": return String.fromCharCode(0x404); // Є
		// american
		case "\"": return String.fromCharCode(0x404); // Є
		case "\'": return String.fromCharCode(0x454);	// є
		
		case "|": return String.fromCharCode(0x490); // Ґ
		case "\\": return String.fromCharCode(0x491);	// ґ		

		case "Z": return String.fromCharCode(0x42F); // Я
		case "z": return String.fromCharCode(0x44F);	// я

		case "X": return String.fromCharCode(0x427); // Ч
		case "x": return String.fromCharCode(0x447); // ч

		case "C": return String.fromCharCode(0x421); // С
		case "c": return String.fromCharCode(0x441);	// с

		case "V": return String.fromCharCode(0x41C); // М
		case "v": return String.fromCharCode(0x43C);	// м

		case "B": return String.fromCharCode(0x418); // И
		case "b": return String.fromCharCode(0x438); // и	

		case "N": return String.fromCharCode(0x422); // Т
		case "n": return String.fromCharCode(0x442); // т

		case "M": return String.fromCharCode(0x42C); // Ь
		case "m": return String.fromCharCode(0x44C); // ь

		case "<": return String.fromCharCode(0x411); // Б
		case ",": return String.fromCharCode(0x431); // б

		case ">": return String.fromCharCode(0x42E); // Ю
		case ".": return String.fromCharCode(0x44E); // ю

		case "?": return ","; // ,
		case "`": console.log("return `"); return "\'"; // ,
		case "/": console.log("return ."); return "."; // .		
		case "&": return "?"; // .			
		
		default: return typedChar;
	}
}
// http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

function editText(id)
{
if ($(id).lang === "en")
	return;
var cursorPosition = $(id).prop("selectionStart");
    //alert("curs pos: " + cursorPosition);
    //alert(cursorPosition);
    var tx = $(id).val();
    
		tx = tx.replaceAt(cursorPosition-1, transformTypedCharacter(tx.charAt(cursorPosition-1)));
//		out[cursorPosition-2] = transformTypedCharacter(tx[cursorPosition-2]);
		
		$(id).val(tx);
        $(id).caretTo(cursorPosition);

    
}




