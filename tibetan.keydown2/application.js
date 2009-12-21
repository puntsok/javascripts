/*jslint debug: true */

window.onload = function() {
	
	
	
// -------------------------------------------------------------------
YUI().use('*', function(Y) {
	
	var 
	    D = document,
		gContext = "",
		B = D.getElementsByTagName( 'body' )[0],
		
		kcodes = {
			"192" : "`",
			"49" : "1",
			"50" : "2",
			"51" : "3",
			"52" : "4",
			"53" : "5",
			"54" : "6",
			"55" : "7",
			"56" : "8",
			"57" : "9",
			"48" : "0",
			"189" : "-",
			"187" : "=",
			
			"81" : "q",
			"87" : "w",
			"69" : "e",
			"82" : "r",
			"84" : "t",
			"89" : "y",
			"85" : "u",
			"73" : "i",
			"79" : "o",
			"80" : "p",
			"219" : "[",
			"221" : "]",
			"220" : "\\",
			
			"65": "a",
			"83": "s",
			"68": "d",
			"70": "f",
			"71": "g",
			"72": "h",
			"74": "j",
			"75": "k",
			"76": "l",
			"186": ";",
			"222": "'",
			
			"90": "z",
			"88": "x",
			"67": "c",
			"86": "v",
			"66": "b",
			"78": "n",
			"77": "m",
			"188": ",",
			"190": ".",
			"191": "/",
			
			"32": " "
			
		},
		
		tkeys = {
			"q": "ལ",
			"w": "ཡ",
			"e": "ར",
			"r": "ཉ",
			"t": "ཆ",
			"y": "ཟ",
			"u": "འ",
			"i": "ད",
			"o": "པ",
			"p": "ཀ",
			"[": "ཙ",	
			"]": "ཨ",
			"\\": "ཧ",
			
			"a": "ོ",
			"s": "ེ",
			"d": "ི",
			//"f": "X",
			"g": "ུ",
			"h": "ཁ",
			"j": "ས",
			"k": "ག",
			"l": "ང",
			";": "བ",
			"'": "ཇ",
			
			"z": "ཕ",
			"x": "ཤ",
			"c": "ཐ",
			"v": "ཚ",
			"b": "ཛ",
			"n": "ཞ",
			"m": "ཏ",
			",": "མ",
			".": "ཅ",
			"/": "ན",
			
			" ": "་"					
		},
		
		tfkeys = {
			"q": "ླ",
			"w": "ྱ",
			"e": "ྲ",
			"r": "ྙ",
			"t": "ྖ",
			"y": "ྯ",
			"u": "ཱ",
			"i": "ྡ",
			"o": "ྤ",
			"p": "ྐ",
			"[": "ྩ",	
			"]": "ྸ",
			"\\": "ྷ",
			
			"a": "༎",
			"s": "།",
			"d": "༼",
			//"f": "X",
			"g": "༽",
			"h": "ྑ",
			"j": "ྶ",
			"k": "ྒ",
			"l": "ྔ",
			";": "ྦ",
			"'": "ྗ",
			
			"z": "ྥ",
			"x": "ྴ",
			"c": "ྠ",
			"v": "ྪ",
			"b": "ྫ",
			"n": "ྮ",
			"m": "ྟ",
			",": "ྨ",
			".": "ྕ",
			"/": "ྣ",
			
			" ": " "					
		},
		
		tcontext = {
			"f": "stackDown"
			
		};
		
		var charCodes = {
			"96": "`",
			"49" : "1",
			"50" : "2",
			"51" : "3",
			"52" : "4",
			"53" : "5",
			"54" : "6",
			"55" : "7",
			"56" : "8",
			"57" : "9",
			"48" : "0",
			"45": "-",
			"61": "=",
			
			"113" : "q",
			"119" : "w",
			"101" : "e",
			"114" : "r",
			"116" : "t",
			"121" : "y",
			"117" : "u",
			"105" : "i",
			"79" : "o",
			"80" : "p",
			"91" : "[",
			"93" : "]",
			"92" : "\\",
			
			"97": "a",
			"115": "s",
			"100": "d",
			"102": "f",
			"103": "g",
			"104": "h",
			"106": "j",
			"107": "k",
			"108": "l",
			"59": ";",
			"39": "'",
			
			"122": "z",
			"120": "x",
			"99": "c",
			"118": "v",
			"98": "b",
			"110": "n",
			"109": "m",
			"44": ",",
			"46": ".",
			"47": "/",
			
			"32": " "	
		};
		
		var wylie = {
			
			"q": "འ",
			"w": "ཝ",
			"e": "ེ",
			"r": "ར",
			"t": "ཏ",
			"y": "ཡ",
			"u": "ུ",
			"i": "ི",
			"o": "ོ",
			"p": "པ",
			"a": "ཨ",
			"s": "ས",
			"d": "ད",
			"f": "།",
			"g": "ག",
			"h": "ཧ",
			"j": "ཇ",
			"k": "ཀ",
			"l": "ལ",
			"z": "ཟ",
			"x": "ཚ",
			"c": "ཅ",
			"v": " ",
			"b": "བ",
			"n": "ན",
			"m": "མ",
			" ": "་"		
			
		};
		
		var wylieContext = {
			"k": "k",
			"": "",
			
			
		};

				
		function insertAtCursor(myField, myValue) {		
			var origScrollHeight = myField.scrollHeight;		
		  //IE support
		  if (document.selection) {
		    myField.focus();
		    sel = document.selection.createRange();
		    sel.text = myValue;
		  }

		  //MOZILLA/NETSCAPE support
		  else if (myField.selectionStart || myField.selectionStart == '0') {
		    var startPos = myField.selectionStart;
		    var endPos = myField.selectionEnd;
		    var tempstring = myField.value.substring(0, startPos) +
		        myValue +
		        myField.value.substring(endPos, myField.value.length);
		
		
			var tempstringlen = tempstring.length;
			var cnsstring = BOKUG.Tibetan.getComposed( tempstring );
			var cnsstringlen = cnsstring.length;
			
			var offset = tempstringlen - cnsstringlen;
			
			if (offset > 0) {
				console.log( 'offset: ' + offset );
			}
			
		
			myField.value = cnsstring;

			var newScrollHeight = myField.scrollHeight;
			var len = myField.value.length;		
			startPos = startPos + 1 - offset;
			endPos = endPos + 1 - offset;

			if ( endPos === len && newScrollHeight > origScrollHeight ) {
				myField.scrollByLines( 100 );
			}
			
			myField.selectionStart = startPos;
			myField.selectionEnd   = endPos;
		
		  } else {
		    myField.value += myValue;
		  }
		}






	
    t3 = D.getElementById( 'tibetan-input3' );	
	t3.addEventListener( 'keypress', function(e) {
		
		var cc = e.charCode;
		console.log( 'cc: ' + cc );
		
		if ( charCodes[ cc ] && tcontext[ charCodes[ cc ] ]    ) {
			gContext = tcontext[ charCodes[ cc ] ];
			e.preventDefault();
		}
		
		if ( gContext == 'stackDown' && charCodes[ cc ] && tfkeys[ charCodes[ cc ] ]    ) {
			insertAtCursor( t3, tfkeys[ charCodes[ cc ] ] );	
			gContext = '';		
			e.preventDefault();
		}
		
		else if ( charCodes[ cc ] && wylie[ charCodes[ cc ] ]    ) {
			insertAtCursor( t3, wylie[ charCodes[ cc ] ] );
			gContext = '';		
			e.preventDefault();
		}
		
	}, false );
	
	t4 = D.getElementById( 'tibetan-input4' );	
	t4.addEventListener( 'keypress', function(e) {
		t4.value = e.charCode;
		e.preventDefault();
	});
	
	
});
// -------------------------------------------------------------------
};







