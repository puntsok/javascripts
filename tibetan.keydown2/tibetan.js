(function() {


BOKUG = window.BOKUG || {};
	
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
		'ྱ' : '', // composed addition for iphone
		'ྱ' : '', // composed addition for iphone
		'ྲ' : '', // composed addition for iphone
		
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
		'རྒྱ' : '', //
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
		'སྙ' : '',
		
		'ཏྲ' : '',
		'ཏྭ' : '',
		'རྟ' : '',
		'ལྟ ' : '',
		'སྟ' : '',
		
		'ཐྲ' : '',
		
		'དྲ' : '',
		'དྭ' : '',
		'རྡ' : '',
		'ལྡ' : '',
		'སྡ' : '',
		
		'ནྲ' : '',
		'རྣ' : '',
		'སྣ' : '',
		'སྣྲ' : '',
		
		'པྱ' : '',
		'པྲ' : '',
		'ལྤ' : '',
		'སྤ' : '',
		'སྤྱ' : '',
		'སྤྲ' : '',
		
		'ཕྱ' : '',
		'ཕྲ' : '',
		'ཕྱྭ' : '',
		
		'བྱ' : '',
		'བྲ' : '',
		'བླ' : '',
		'རྦ' : '',
		'ལྦ' : '',
		'སྦ' : '',
		'སྦྱ' : '',
		'སྦྲ' : '',
		
		'མྱ' : '',
		'མྲ' : '',
		'རྨ' : '',
		'སྨ' : '',
		'རྨྱ' : '',
		'སྨྱ' : '',
		'སྨྲ' : '',

		'ཙྭ' : '',		
		'སྩ' : '',
		'རྩ' : '',
		'རྩྭ' : '',

		'ཚྭ' : '',
		
		'རྫ' : '',
		
		'ཞྭ' : '',
		
		'ཟླ' : '',
		'ཟྭ' : '',
		
		'རླ' : '',
		'རྭ' : '',
		
		'ལྭ' : '',
		
		'ཤྲ' : '',
		'ཤྭ' : '',
		
		'སྲ' : '',
		'སླ' : '',
		'སྭ' : '',
		
		'ཧྲ' : '',
		'ཧྭ' : '',
		'ལྷ' : ''
	},
	replaceStackRegex = new RegExp( '(.[ྐྑྒྔྕྖྗྙྟྠྡྣྤྥྦྨྩྪྫྭྮྯཱྱྲླྴྶྷྸ]+)', 'g' ),
	
	tibetanConsonants = 'ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ',
	tibetanComposedConsonantsWithU = '',
	tibetanComposedStacks = '' +
		'' + '' +'' + '' + '' + '' + '' + '' +
		'' + '' + '' + '' + '' + '' + 
		'' + '' + '' + '' + '' + '' + '' + '' + '' +
		'',
	
	replaceVowelRegex = new RegExp( '([' + tibetanConsonants + tibetanComposedStacks +'])ུ' , 'g' ),
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
	
	otherSingleCharacters = '་།༄༅༡༢༣༤༥༦༧༨༩༠ིེོ',
	
	i; // iterator
	
// ********************************************
function Tibetan() {
	//this.chars = chars;
}
Tibetan = {
	
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
		return tibetanConsonants +
			otherSingleCharacters +
			tibetanComposedStacks +
			tibetanComposedConsonantsWithU +
			this.rv( tibetanComposedStacks.replace( /(.)/g, "$1ུ" ) );
	}
	
};

// ********************************************

BOKUG.Tibetan = Tibetan;
})();

