(function() {
	
var
	text = '';
	
var chars = {
	
	K : 'ཀ', KH : 'ཁ', G : 'ག', NG  : 'ང',
	C : 'ཅ', CH : 'ཆ', J : 'ཇ', NY  : 'ཉ',
	T : 'ཏ', TH : 'ཐ', D : 'ད', N   : 'ན',
	P : 'པ', PH : 'ཕ', B : 'བ', M   : 'མ',
	TS: 'ཙ', TSH: 'ཚ', DZ: 'ཛ', W   : 'ཝ',	
	U : 'ུ'
};
	
// ********************************************
function Tibetan() {
	this.chars = chars;
}
Tibetan.prototype = {
	
	sayHi: function() {
		return 'hello from tibet';
	},
	
	sayBye: function() {
		return 'bye form tibet';
	},
	
	allChars: function() {
		for ( singleChar in this.chars ) {
			text += singleChar;
		}
		return text;
	}
	
};

// ********************************************

BOKUG.Tibetan = Tibetan;
})();

