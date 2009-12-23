/*jslint debug: true */
window.onload = function() {
// -------------------------------------------------------------------
YUI().use('node','event', function(Y) {
// -------------------------------------------------------------------


var n = Y.one( '#textarea' ),
	_ = Y.bind( Y.log, Y ), 
	b = Y.one( 'html' );


var m = Y.one( '#mobile' );

m.append( (!!(Y.UA.mobile)).toString() );

var handle = Y.on( 'windowresize', function() {
	_( 'window was resized!' );
});

/*window.attachEvent( 'onresize', function() {
	_( 'window was resized!' );
});*/

n.on( 'keypress', function(e) {
	_( e.charCode );
	n.set('value', e.charCode);
	e.preventDefault();
});
	

// -------------------------------------------------------------------
});
// -------------------------------------------------------------------
};







