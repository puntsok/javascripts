// requires gallery-jsonp

function Twitter( id, callback ) {
	this.id = id;
	this._callback = callback;
	
	var Y = YUI().use( 'gallery-jsonp' );
		
	this.url =
		'http://twitter.com/statuses/user_timeline/' +
		this.id +
		'.json';
		
	this._request = new Y.JSONPRequest(
		this.url,
		callback
	);
		
	this.send = function() {
		return this._request.send();
	};
}
bokug.Twitter = Twitter;


