(function() {
	
var
	text,
	
    /* chars = {
		K : 'ཀ', KH : 'ཁ', G : 'ག', NG  : 'ང',
		C : 'ཅ', CH : 'ཆ', J : 'ཇ', NY  : 'ཉ',
		T : 'ཏ', TH : 'ཐ', D : 'ད', N   : 'ན',
		P : 'པ', PH : 'ཕ', B : 'བ', M   : 'མ',
		TS: 'ཙ', TSH: 'ཚ', DZ: 'ཛ', W   : 'ཝ',
		ZH: 'ཞ', Z  : 'ཟ', AA: 'འ', Y   : 'ཡ',
		R : 'ར', L  : 'ལ', SH: 'ཤ', S   : 'ས',
		H : 'ཧ', A  : 'ཨ',	
		U : 'ུ'
	},*/
	
	// canBeOnTop = 'སརལ',
	// canBeOnBottom = 'ྐྑྒྔ',	
	// normal stacks found at:
	// http://sites.google.com/site/chrisfynn2/tibetanlettercombinations
	// but missing sgra in the above website?
	replaceStacks = {	
		'ཀྱ'  : '',
		'ཀྲ' : '',
		'ཀླ' : '',
		'ཀྭ' : '',
		'རྐ' : '',
		'ལྐ' : '',
		'སྐ' : '',
		'རྐྱ' : '',
		'སྐྱ' : '',
		'སྐྲ' : '',
		
		'ཁྱ' : '',
		'ཁྲ' : '',
		'ཁྭ' : '',
		
		'གྱ' : '',
		'གྲ' : '',
		'གླ' : '',
		'གྭ' : '',
		'རྒ' : '',
		'ལྒ' : '',
		'སྒ' : '',
		'རྒྱ' : '',
		'སྒྱ' : '',
		'སྒྲ' : '',
		'གྲྭ' : '',
		
		'རྔ' : '',
		'ལྔ' : '',
		'སྔ' : '',
		
		'ལྕ' : '',
	
		'རྗ' : '',
		'ལྗ' : '',
		
		'ཉྭ' : '',
		'རྙ' : '',
		'སྙ' : ''
	},
	replaceStackRegex = new RegExp( '(.[ྐྑྒྔྕྖྗྙྟྠྡྣྤྥྦྨྩྪྫྭྮྯཱྱྲླྴྶྷྸ]+)', 'g' ),
	
	tibetanConsonants = 'ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ',
	tibetanComposedConsonantsWithU = '',
	tibetanComposedStacks = '' +
		'' + 
		'' +
		'' + '' + '' + '',
	
	replaceVowelRegex = new RegExp( '([' +tibetanConsonants + tibetanComposedStacks +'])ུ' , 'g' ),
	replaceVowels = {
		'ཀ': '',
		'ཁ': '',
		'ག': '',
		'ང': '',
		'ཅ': '',
		'ཆ': '',
		'ཇ': '',
		'ཉ': '',
		'ཏ': '',
		'ཐ': '',
		'ད': '',
		'ན': '',
		'པ': '',
		'ཕ': '',
		'བ': '',
		'མ': '',
		'ཙ': '',
		'ཚ': '',
		'ཛ': '',
		'ཝ': '',
		'ཞ': '',
		'ཟ': '',
		'འ': '',
		'ཡ': '',
		'ར': '',
		'ལ': '',
		'ཤ': '',
		'ས': '',
		'ཧ': '',
		'ཨ': ''
	},
	
	
	i; // iterator
	
// ********************************************
function Tibetan() {
	//this.chars = chars;
}
Tibetan.prototype = {
	
	// replace stacks method:
	rs: function( text ) {
		return text.replace( replaceStackRegex , function( match, subset ) {
			return replaceStacks[ subset ] ? replaceStacks[ subset ] : match ;
		});
	},
	
	// replace vowels method
	rv: function( text ) {
		return text.replace( replaceVowelRegex , function( match, subset ) {
			return replaceVowels[ subset ] ?
				replaceVowels[ subset ] : String.fromCharCode( subset.charCodeAt(0) + 3 ) ;
		});
	},
	
	getComposed: function( text ) {
		return this.rv( this.rs( text ) );
	},
	
	getSubset: function() {
		return tibetanComposedStacks +
			tibetanComposedConsonantsWithU +
			this.rv( tibetanComposedStacks.replace( /(.)/g, "$1ུ" ) );
	}
	
};

// ********************************************

BOKUG.Tibetan = Tibetan;
})();

