// requires gallery-jsonp
// probably needs oop for bind

(function() {
	
var Twitter = function( id, callback ) {
	this.id = id;
	this._callback = callback;
	this._twitterObject = {};
	this._onSuccess = function( results ) {
		this._twitterObject = results;
		this._callback();
	};
	
	var Y = YUI().use( 'gallery-jsonp' );
		
	this.url =
		'http://twitter.com/statuses/user_timeline/' +
		this.id +
		'.json';
		
	this._request = new Y.JSONPRequest(
		this.url,
		Y.bind( this._onSuccess, this )
	);
		
	this.send = function() {
		return this._request.send();
	};
	
	this.makeList = function() {
		var
			tweets = this._twitterObject,
			text = '<h1>Tweets</h1><ul>',
			linkify,
			replacer,
			length,
			i;
		
		// will turn text links in string into <a> links
		replacer = '<a href="$1">$1</a>';
		linkify = function( text ) {
			return text.replace( /\b(http\S*)/g, replacer );
		};
		
		// produce pure string with <li> nodes
		length = tweets.length;
		for ( i = 0; i < length; i++ ) {
			text += '<li>' + linkify( tweets[i].text )+ '</li>';
		}
		
		return text += '</ul>';
	};
};
bokug.Twitter = Twitter;

})();

