YUI().use( 'node-base', function(Y) {
	Y.on( 'domready', init );
	
	var init = function() {
		// do some functions
		alert( 'init' );
	};
});