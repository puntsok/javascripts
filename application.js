var bokug = {};

YUI({
	modules: {
		'gallery-jsonp': {
			fullpath:   'http://yui.yahooapis.com/gallery-2009.10.27/build/gallery-jsonp/gallery-jsonp-min.js',
			requires:   ['selector-css3'],
			optional:   [],
			supersedes: []
		},
		'bokug-twitter': {
			fullpath:   'twitter.js',
			requires:   ['gallery-jsonp']
		}
	}
}).use( 'node-base', function(Y) {
/* *********************************************** */

// setup
	bokug.Init = {};

// shortcuts
	var	b = bokug,
		d = document,
		init = bokug.Init;

// various startup functions
init.sayHello = function() {
	console.log( 'hi' );
};
init.sayBye = function() {
	console.log( 'bye-bye' );
};
init.putIt = function( text ) {
	var node = d.getElementById( 'tweets' );
	node.appendChild( d.createTextNode( text ) );
};	
init.loadTweets = function() {
	Y.use('bokug-twitter', function(Y) {
		console.log( 'bokug-twitter loaded' );
		var tweet = new b.Twitter( 29460607, init.putIt );
		var ans = tweet.send();
		debugger;
	});
};

// the order to run them in
init.run = function() {
	init.sayHello();
	init.sayBye();
	init.loadTweets();
};

// start application
Y.on( 'domready', init.run );

/* *********************************************** */
});





