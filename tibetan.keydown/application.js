/*jslint debug: true */

window.onload = function() {
	
	
	
// -------------------------------------------------------------------
YUI().use('node', 'event', 'event-simulate', 'event-custom', function(Y) {
	
	debugger;
	
	var A = Y.Array,
	    D = document,
		gContext = "",
		B = Y.one( 'body' ),
		
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
			
		},
		t = Y.one( '#tibetan-input' ),
		t2= D.getElementById( 'tibetan-input2' );
				
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
		    myField.value = myField.value.substring(0, startPos) +
		                   myValue +
		                   myField.value.substring(endPos, myField.value.length);

			var newScrollHeight = myField.scrollHeight;
			var len = myField.value.length;		
			startPos++;
			endPos++;

			if ( endPos === len && newScrollHeight > origScrollHeight ) {
				myField.scrollByLines( 100 );
			}
			
			myField.selectionStart = startPos;
			myField.selectionEnd   = endPos;
		
		  } else {
		    myField.value += myValue;
		  }
		}
	
	var elem = Y.Node.create( '<textarea style="font-size: 250%" name="tibetan-input3" rows="8" cols="8" id="tibetan-input3"></textarea>' );
	B.append( elem );
	
    t3 = D.getElementById( 'tibetan-input3' );
	
	t.on( 'keydown' , function(e) {		
		console.log( e );
		console.log( 'e.keyCode  = ' + e.keyCode );
		console.log( 'e.shiftKey = ' + e.shiftKey );
		console.log( 'e.ctrlKey  = ' + e.ctrlKey );
		console.log( 'e.altKey   = ' + e.altKey );
		console.log( 'e.metaKey  = ' + e.metaKey );		
	});
	
	
	t3.addEventListener( 'keydown', function(e) {
		
		var kc = e.keyCode;
		console.log( 'kc: ' + kc );
		
		if ( kcodes[ kc ] && tcontext[ kcodes[kc] ]    ) {
			gContext = tcontext[ kcodes[kc] ];
			e.preventDefault();
		}
		
		if ( gContext == 'stackDown' && kcodes[ kc ] && tfkeys[ kcodes[kc] ]    ) {
			insertAtCursor( t3, tfkeys[ kcodes[kc] ] );	
			gContext = '';		
			e.preventDefault();
		}
		
		else if ( kcodes[ kc ] && tkeys[ kcodes[kc] ]    ) {
			insertAtCursor( t3, tkeys[ kcodes[kc] ] );
			gContext = '';		
			e.preventDefault();
		}
		
	}, false );
	
	
});
// -------------------------------------------------------------------
};







