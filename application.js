var bokug = {};

(function() {
	
YUI({
	filter: 'debug',
	modules: {
		'gallery-jsonp': {
			fullpath:   'http://yui.yahooapis.com/gallery-2009.10.27/build/gallery-jsonp/gallery-jsonp.js',
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

// shortcuts
	var	b = bokug,
		d = document,
		
// local variables
		container,
		tweet;

// various startup functions
function sayHello() {
	console.log( 'saying hello' );
}
function sayBye() {
	console.log( 'bye-bye' );
}
function loadTweets() {
	Y.use('bokug-twitter', function(Y) {		
		tweet = new b.Twitter( 29460607, function() {
			container = d.getElementById( 'tweets' );
			container.innerHTML = this.makeList();
		});					
		tweet.send();
	});
}

// the order to run them in
function init() {
	sayHello();
	sayBye();
	loadTweets();
};

// start application
Y.on( 'domready', init );

/* *********************************************** */
});

})();