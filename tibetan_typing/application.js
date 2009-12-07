var bokug = {};

(function() {
	
YUI({
	filter: '', // use 'debug' if needed
	modules: {
		'tibetan-input': {
			fullpath: 'tibetan-input.js',
			requires: ['base']
		}
	}
}).use( 'node-base', function(Y) { // node-base to do the dom-ready
/* *********************************************** */

// shortcuts
	var	b = bokug,
		d = document,
		
// local variables
		ti;

// various functions
function makeNewTibetanInput() {
	Y.use('tibetan-input', function(Y) {
		ti = new b.TibetanInput();
		ti.after( 'versionChange', function(e) {
			alert( 'changed!!!!' );
		});
		debugger;
	});
}


// the order to run them in
function init() {
	console.log( 'domloaded' );
	makeNewTibetanInput();
};

// start application
Y.on( 'domready', init );

/* *********************************************** */
});

})();